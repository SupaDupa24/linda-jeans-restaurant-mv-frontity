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
    theme: {}
  },
  actions: {
    theme: {
      beforeSSR: async ({ state, actions }) => {
        await actions.source.fetch("acf-options-page");
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