var DemoApp = {
  initialize: function() {
    $('#click-me-button').click(function(event) {
      alert('You did it!');
      event.preventDefault();
    });

    $('#disorient').click(this.mirrorText);
    $('#random-color-button, .color-changing').click(this.randomizeColor);
    $('#word-form').submit(this.addFunnyWord);
    $('#words-list').on('click', 'li', this.randomizeColor);
    $('#randomize-words-button').click($.proxy(this.randomizeWords, this));
  },

  mirrorText: function() {
    $(this).toggleClass('mirror');
  },

  randomizeColor: function(event) {
    var newColor = Math.floor(Math.random() * 0xffffff).toString(16);
    $(this).css('color', '#' + newColor);
    if(event.preventDefault !== undefined){ event.preventDefault(); }
  },

  addFunnyWord: function(event) {
    var newWord = $('#word-field').val();

    if(newWord !== '') {
      var newItem = $('<li>').text(newWord);
      $('#words-list').append(newItem);
      $('#word-field').val('');
    }

    event.preventDefault();
  },

  randomizeWords: function(event) {
    $('#words-list li').each(this.randomizeColor);
    event.preventDefault();
  }
};

$(document).ready(function(){ DemoApp.initialize(); });
