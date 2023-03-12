// when a tag is clicked, page changes to only display cards containing that tag

document.querySelector('#tag_MasterCard').addEventListener('click', handleClick);
document.querySelector('#tag_security').addEventListener('click', handleClick);

function handleClick() {
  console.log("Button clicked");
}
