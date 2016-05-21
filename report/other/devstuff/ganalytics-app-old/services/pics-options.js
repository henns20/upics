/**
 * Created by john on 11/4/15.
 */
'use strict';

angular.module('ganalytics')
  .factory('picsOptions', profilePicsFactory);

function profilePicsFactory () {
  // this will be super long - better place ment link put it in a function so that it hoists
  var profilePics = [
    {
      name: "Snapchat it",
      description: "The story of Snapchat is an exciting one",
      productlink: "../../app/components/product-page/product.html",
      profileImage: "../assets/images/silicon-valley/evan_snapchat.jpg",
      littleImage: "../assets/images/snapchat-logo-250250.png",
      picsId: "snapchat-ceo"
    },
    {
      name: "iExec",
      description: "Get a photo inspired by the Apple executive",
      productlink: "../../app/components/product-page/product.html",
      profileImage: "../assets/images/silicon-valley/apple-woman-350.png",
      littleImage: "../assets/images/silicon-valley/apple-aluminum.png",
      picsId: "apple-woman"
    },
    {
      name: "Search Engine Giant",
      description: "Get a photo like the Google's management team",
      productlink: "../../app/components/product-page/product.html",
      profileImage: "../assets/images/silicon-valley/googleexec.jpg",
      littleImage: "../assets/images/silicon-valley/google4.png",
      picsId: "search-engine-giant"
    },
    {
      name: "G Ventrified",
      description: "A quick creative description of the pic",
      productlink: "../../app/components/product-page/product.html",
      profileImage: "../assets/images/silicon-valley/kevin-rose2.jpg",
      littleImage: "../assets/images-1gv-logo-icon.png",
      "picsId": "g-ventrified-1"
    },
    {
      name: "Yahoo Ceo",
      description: "A quick creative description of the pic",
      productlink: "../../app/components/product-page/product.html",
      profileImage: "../assets/images/silicon-valley/mmayer-1.jpg",
      littleImage: "../assets/images-1yahoo-logo.png",
      "picsId": "yahoo-ceo"
    },
    {
      name: "G Ventrified 2",
      description: "A quick creative description of the pic",
      productlink: "../../app/components/product-page/product.html",
      profileImage: "../assets/images/silicon-valley/phoebe-peronto.jpg",
      littleImage: "../assets/images-1gv-logo-icon.png",
      picsId: 'g-ventrified-2'
    }
//    {
//      name: "Snapchat",
//      description: "The story of Snapchat is an exciting one",
//      productlink: "../../app/components/product-page/product.html",
//      profileImage: "../../assets/images/silicon-valley/evan_snapchat.jpg"
//    },
//    {
//      name: "Snapchat",
//      description: "The story of Snapchat is an exciting one",
//      productlink: "../../app/components/product-page/product.html",
//      profileImage: "../../assets/images/silicon-valley/evan_snapchat.jpg"
//    },
//    {
//      name: "Snapchat",
//      description: "The story of Snapchat is an exciting one",
//      productlink: "../../app/components/product-page/product.html",
//      profileImage: "../../assets/images/silicon-valley/evan_snapchat.jpg"
//    },
//    {
//      name: "Snapchat",
//      description: "The story of Snapchat is an exciting one",
//      productlink: "../../app/components/product-page/product.html",
//      profileImage: "../../assets/images/silicon-valley/evan_snapchat.jpg"
//    },
//    {
//      name: "Snapchat",
//      description: "The story of Snapchat is an exciting one",
//      productlink: "../../app/components/product-page/product.html",
//      profileImage: "../../assets/images/silicon-valley/evan_snapchat.jpg"
//    }
  ];
  var profilePics2 = [
    {
      name: "Wordpress Hero",
      description: "Get a photo like the J. Torke Wordpress development guru.",
      productlink: "../../app/components/product-page/product.html",
      profileImage: "../assets/images-1torke-large-1.jpeg",
      littleImage: ""
    },
    {
      name: "Iron Chef W",
      description: "Cat Kora was the first woman Iron Chefe",
      productlink: "../../app/components/product-page/product.html",
      profileImage: "../assets/images/cat.png",
      littleImage: ""
    },
    {
      name: "Comic Genius",
      description: "Get a photo inspired by the Apple executive",
      productlink: "../../app/components/product-page/product.html",
      profileImage: "../assets/images/comicbdrop250.jpg",
      littleImage: ""
    },
    {
      name: "Martha's Assistant",
      description: "A quick creative description of the pic",
      productlink: "../../app/components/product-page/product.html",
      profileImage: "../assets/images/silicon-valley/marthastewart-mediakit.png",
      littleImage: ""
    }

  ];

  return {
    getPics: function() {
      return profilePics;
    },
    getPics2: function() {
      return profilePics2;
    }
  }
}