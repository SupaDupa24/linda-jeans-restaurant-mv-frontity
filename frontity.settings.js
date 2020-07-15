const settings = {
  "name": "ljmv-frontity",
  "state": {
    "frontity": {
      "url": "https://ljmv.artlyticalmedia.com",
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
          api: "https://ljmv.artlyticalmedia.com/wp-json/",
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
