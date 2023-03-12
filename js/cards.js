//  loads the page with all cards regardless of tags
$(document).ready(function() {

  
  var numberOfCards = $('#index_container > .card').length;
  numberOfCards = 6;
  console.log(numberOfCards);

  // creates placeholders for cards
  let cardsPlaceholder = "";
  for (let n = 1; n <= numberOfCards; n++) {
    cardsPlaceholder += "<a id=\"card" + n + "\" class=\"card\"></a>"
  }
  document.getElementById("index_container").innerHTML = cardsPlaceholder;

  // subs in each cardx.html for the placeholder
  for (var i = 1; i <= numberOfCards; i++) {
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


// for tags
// document.querySelector(".tagButton").addEventListener("click", function (e) {
//    event.stopPropagation();
  
  
  // ajaxGET("/action?format=html", function (data) {
  //     // console.log(data);
  //     document.getElementById("action-html").innerHTML = data;
  // });
// });