require.config({
  paths: {
    'jquery': 'lib/jquery'
  }
});

require(["jquery"], function($) {
  $(function() {
    $("body").css("background", "red");
  });
});
