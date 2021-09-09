//it selects the nav-toogle class/object
const navToggle = document.querySelector('.nav_toggle');

//selecting all the queruies
const navLinks = document.querySelectorAll('.nav_link');

//when the event is clicked, then it executes the given class's properites
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav_open');
});

// After each item of navigation bar is selected, the nav_open event gets terminated
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav_open');
    })
})
