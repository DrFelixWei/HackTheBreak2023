const scrollLinks = document.querySelectorAll('#nav-start');

scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const target = document.querySelector(href);
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function scrollToSection() {
    var section = document.getElementById("index_container");
    section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}
