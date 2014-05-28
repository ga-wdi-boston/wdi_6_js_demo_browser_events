# JavaScript/jQuery Event Demo

We use *events* in JavaScript to respond to various input from the user in the web browser, such as a button press or mouse click. While you can do [events purely in javascript](https://github.com/ga-wdi-boston/wdi_6_js_demo_browser_events/tree/pure_js) we are going to continue using the [jQuery library](http://jquery.com/) to make them easier and more consistent to implement.

To setup this project, I've created a new Rails project, removed CoffeeScript from the `Gemfile` , and then executed `rails g controller Home index`. I then changed the root route to `root 'home#index'`. I've also included Bootstrap to make it prettier.

Let's write all of our code in `home.js`
