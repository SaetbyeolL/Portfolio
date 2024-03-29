//Header: Apply dark styling to the header when scrolling down
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});


//Home: Make the Home section transparent when scrolling down
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', ()=> {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});


//Arrow-up: Make the arrow up button transparent when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=> {
    if(window.scrollY > homeHeight / 2){
        arrowUp.style.opacity = 1;         
    } else {
        arrowUp.style.opacity = 0;
    }
});


//Navbar: Handling toggle button clicks
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', ()=> {
    navbarMenu.classList.toggle('open');
})


//Navbar: Closing the menu automatically when a Navbar menu item is clicked
navbarMenu.addEventListener('click', ()=> {
    navbarMenu.classList.remove('open');
})









