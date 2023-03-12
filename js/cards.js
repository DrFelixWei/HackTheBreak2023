$(document).ready(function() {
  var numCards = $('#index_container > .card').length;
  for (var i = 1; i <= numCards; i++) {
    $.ajax({
      url: '/cards/card' + i + '.html',
      success: function(data) {
        $('#card' + this.index).html(data);
      },
      index: i
    });
  }
  console.log("cards.js ran successfully.");
});
