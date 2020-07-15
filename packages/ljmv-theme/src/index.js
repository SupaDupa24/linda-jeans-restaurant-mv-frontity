import Root from './components/index'
import image from "@frontity/html2react/processors/image";

const acfOptionsHandler = {
  pattern: "acf-options-page",
  func: async ({ route, state, libraries }) => {
    const response = await libraries.source.api.get({
      endpoint: `/acf/v3/options/options`
    });
    const option = await response.json();

    const data = state.source.get(route);
    Object.assign(data, { ...option, isAcfOptionsPage: true });
  }
};

export default {
  name: "ljmv-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      showNotification: true
    }
  },
  actions: {
    theme: {
      beforeSSR: async ({ libraries, actions }) => {
        await actions.source.fetch("acf-options-page");

        libraries.html2react.processors.push(image)

        libraries.source.handlers.push({
          name: "nameAndDescription",
          priority: 10,
          pattern: "nameAndDescription",
          func: async ({ route, state, libraries }) => {
            // 1. Get response from api endpoint.
            const response = await libraries.source.api.get({
              endpoint: "/" // "/" is added after "/wp-json" so final url is "/wp-json/"
            });
      
            // 2. Extract relevant data from the response.
            const { name, description } = await response.json();
      
            // 3. Add it to the source.data object.
            state.source.data[route].name = name;
            state.source.data[route].description = description;
          }
        });

        // Fetch the wp-json endpoint.
        await actions.source.fetch("nameAndDescription");
      },
      beforeCSR: async ({ libraries }) => {
        libraries.html2react.processors.push(image);
      }
    }
  },
  libraries: {
    html2react: {
      processors: [image]
    },
    source: {
      handlers: [acfOptionsHandler]
    }
  }
}