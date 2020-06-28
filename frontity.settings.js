const settings = {
  "name": "ljmv-frontity",
  "state": {
    "frontity": {
      "url": "http://ljmv.artlyticalmedia.com",
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
          api: "http://ljmv.artlyticalmedia.com/wp-json/",
          homepage: "/home"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "frontity-contact-form-7"
  ]
};

export default settings;
