// FADE IN SCROLL ANIMATION
const faders = document.querySelectorAll('.fade-in');

const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => { appearOnScroll.observe(fader); });

// FORM SUBMISSION DEMO
const messageForm = document.querySelector('.message-form');
messageForm.addEventListener('submit', e => {
  e.preventDefault();
  alert("Thanks! Your message has been sent.");
});