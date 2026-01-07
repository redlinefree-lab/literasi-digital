const selectElement = selector => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly.`);
};

const scrollHeader = () => {
    const headerElement = selectElement('#header');

    if (window.scrollY >= 15) {
        headerElement.classList.add('activated');
    } else {
        headerElement.classList.remove('activated');
    }
};

window.addEventListener('scroll', scrollHeader);

const menuToggleIcon = selectElement('#menu-toggle-btn');

const toggleMenu = () => {
    const mobileMenu = selectElement("#menu");
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);

const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if(currentTheme){
    bodyElement.classList.add('light-theme')
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme')

    if(bodyElement.classList.contains('light-theme')){
        localStorage.setItem('currentTheme', 'themeActive')
    }else{
         localStorage.removeItem('currentTheme');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const instagramLogo = document.querySelector("#instagram-toggle-btn");

    if (instagramLogo) {
        instagramLogo.style.cursor = "pointer";
        instagramLogo.addEventListener("click", () => {
            window.open(
                "https://www.instagram.com/m.farhanra?igsh=MXFtaHozNThucTFrNg==",
                "_blank"
            );
        });
    }
});


document.getElementById("scrollDown").addEventListener("click", () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth"
    });
});



