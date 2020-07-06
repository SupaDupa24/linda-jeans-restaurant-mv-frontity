const settings = {
  "name": "ljmv-frontity",
  "state": {
    "frontity": {
      "url": "http://lindajeansrestaurantmv.test",
      "title": "Linda Jean's Restaurant Martha's Vineyard",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "ljmv-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          api: "http://lindajeansrestaurantmv.test/wp-json/",
          homepage: "/home"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
