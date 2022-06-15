let menuToggler = document.querySelector('.menu-toggle');
let nav = document.querySelector('.nav');
let navLinks = Array.from(document.querySelectorAll('.nav-link'));

menuToggler.addEventListener('click', ()=>{
  menuToggler.classList.toggle('active');
  nav.classList.toggle('active');


  if (menuToggler.classList.contains('active')) {
    setTimeout(()=>{
      nav.classList.add('active');
    },100);

    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove('active');
      setTimeout(()=>{
        navLinks[i].classList.add('active');
      }, i * 100);
    }
  }
});


mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
