// Our page hasn't loaded yet, so we have to make sure our document is ready before we do anything
$(document).ready(function() {

  // Example 1 - Basic Click Events
  // We select the `#click-me-button` by ID using jQuery
  // then we attach an event listener for clicks
  // We give click an anonymous function, which executes on the click event
  $("#click-me-button").click(function() {
    alert("You did it! Check your console");
    console.log("Print message here instead. Alerts are annoying");
  });


  // Example 2 - Click Events with Callbacks
  // Anonymous functions aren't reusable. If we want reusable code
  // Notice, we are just passing the name of the function, not invoking it! (no parens)
  $("#callback-button").click(DemoApp.changeButtonColor);


  // Example 3 - Selecting via Class with Callbacks
  // We said that we made reusable code right? Let's use it!
  $('.color-changing-list-element').click(DemoApp.changeButtonColor);



  // Example 4 - Altering Text with a click
  // Note: some CSS was used here to reverse letters
  $('#disorient').click(DemoApp.reverseLetters);



  // Example 5 - Clearing on focus
  $("#color-field").focus(DemoApp.clearField);



  // Example 6 - Form submission
  $("#color-input").submit(function(event){
    // Gets the color from the form
    var new_color = $('#color-field').val();

    // Only inserts if there is a color present
    if (new_color > '') {
      // Appends to the ul
      $('#colors-list').append('<li>' + new_color + '</li>');

      // Reset all form fields for this form
      $('#color-field').val('');
    }

    // Prevents the form from actually submitting
    event.preventDefault();
  });
});

// Note everything is namespaced in DemoApp. Only one global variable!
var DemoApp = {
  changeButtonColor: function() {
    // This ties in with Example 2
    // Generates a random color
    var random_color = '#'+Math.floor(Math.random()*16777215).toString(16);

    // Uses `this` to refer to the button that triggered the event
    $(this).css("color", random_color);

    // Logs the current color, just for fun
    console.log("Color is now: " + random_color);
    return this; // Returning this allows for chaining of functions
  },
  reverseLetters: function() {
    $(this).toggleClass('mirror');
    return this;
  },
  clearField: function() {
    $(this).val(''); // Clears the form field
    console.log('Form field in focus and cleared');
    return this;
  }
}

