// Our page hasn't loaded yet, so we have to make sure our document is ready before we do anything
$(document).ready(function() {
  // Stuff in here happens on page load
});

// Note everything is namespaced in DemoApp. Only one global variable!
var DemoApp = {
  aTrueFunction = function() { return true; };
};

