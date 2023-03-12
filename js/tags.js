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
    const cardUrls = [];

    // Find card files that contain the clicked element's id
    $.ajax({
      url: '/cards/',
      async: false,
      success: function(data) {
        $(data).find('a[href$=".html"]').each(function(){
          const url = $(this).attr('href');
          $.ajax({
            url: url,
            async: false,
            success: function(data){
              if($(data).find('#'+event.target.id).length){
                cardUrls.push(url);
              }
            }
          });
        });
      }
    });

    // creates placeholders for cards
    let cardsPlaceholder = "";
    for (let i = 0; i < cardUrls.length; i++) {
      cardsPlaceholder += `<a id="card${i}" class="card"></a>`;
    }
    document.getElementById("index_container").innerHTML = cardsPlaceholder;

    // subs in each cardx.html for the placeholder
    for (let i = 0; i < cardUrls.length; i++) {
      $.ajax({
        url: cardUrls[i],
        success: function(data) {
          $(`#card${i}`).html(data);
        }
      });
    }

    console.log("cards.js ran successfully.");
  }

}, 3000);
