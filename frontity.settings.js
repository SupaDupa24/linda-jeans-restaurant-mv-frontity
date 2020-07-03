require('dotenv-flow').config()
  
const settings = {
  "name": "ljmv-frontity",
  "state": {
    "frontity": {
      "url": process.env.FRONTITY_URL,
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
          api: process.env.STATE_SOURCE_API,
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
