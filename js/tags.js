// when a tag is clicked, page changes to only display cards containing that tag

const tagButtons = document.querySelectorAll('.tagButton');

// Add a click event listener to each button
tagButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Set the tag variable to the id of the clicked button
    const tag = button.id;
    
    // Do something else with the tag variable
    console.log(`Tag ${tag} clicked!`);
  });
});
