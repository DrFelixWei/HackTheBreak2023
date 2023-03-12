// delay function to give time for placeholders to load in
setTimeout(function() {

    // Select all elements with class="tagButton"
  const buttons = document.querySelectorAll('.tagButton');

  // Loop through all buttons and add event listener to each one
  buttons.forEach(button => {
    button.addEventListener('click', handleClick);
  });

  // Handle click event
  function handleClick(event) {
    var numberOfCards = 0;
    $.ajax({
      url: '/cards/',
      async: false,
      success: function(data) {
        $(data).find('a[href$=".html"]').each(function(){
          let url = $(this).attr('href');
          $.ajax({
          url: url,
          async: false,
          success: function(data){
            if($(data).find('#tag_MasterCard').length){
              numberOfCards++;
              }
            }
          });
        });
      }
    });

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
  }

}, 3000);



