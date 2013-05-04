require.config({
  paths: {
    'jquery': 'lib/jquery'
  },
  shim: {
    "lib/underscore": {
      exports: '_'
    }
  }

});

require(["jquery", "lib/underscore", "lib/mymodule"], function($, _, mod) {
  $(function() {
    mod.alertHi();
    console.log(_.VERSION);
  });
});
