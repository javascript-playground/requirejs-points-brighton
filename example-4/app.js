require.config({
  paths: {
    'jquery': 'lib/jquery'
  },
  shim: {
    "lib/underscore": {
      exports: '_'
    },
    "lib/backbone": {
      deps: ["lib/underscore", "jquery"],
      exports: "Backbone"
    }
  }

});

require(["jquery", "lib/backbone", "lib/mymodule"], function($, Backbone, mod) {
  $(function() {
    mod.alertHi();
    console.log(Backbone.VERSION);
  });
});
