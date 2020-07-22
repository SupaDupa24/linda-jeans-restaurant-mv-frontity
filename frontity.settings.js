const settings = {
  "name": "ljmv-frontity",
  "state": {
    "frontity": {
      "url": "https://wpadmin.lindajeansrestaurantmv.com",
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
          api: "https://wpadmin.lindajeansrestaurantmv.com/index.php/wp-json/",
          homepage: "/home"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags"
  ]
};

export default settings;
