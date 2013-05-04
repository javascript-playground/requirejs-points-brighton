require.config({
  paths: {
    'jquery': 'lib/jquery'
  }
});

require(["jquery", "lib/mymodule"], function($, mod) {
  $(function() {
    mod.alertHi();
  });
});
