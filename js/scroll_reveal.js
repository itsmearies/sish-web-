// Initialize Scroll Reveal 
function initializeScrollReveal(origin){
    return ScrollReveal({
        origin: origin,
        distance: '1.5rem',
        duration: 2000,
        reset: 'true',
    })
};

// Top
//  Landing page 

const srTop = initializeScrollReveal('top');
srTop.reveal('.about', {delay: 50});
srTop.reveal('.about-video', {delay: 50});
srTop.reveal('.about-chat', {delay: 50});
srTop.reveal('.about-services', {delay: 50});
srTop.reveal('.map', {delay: 50});
srTop.reveal('.doctors', {delay: 50});

// Doctors
srTop.reveal('.department-list', {delay: 50});


// Left
//  Landing page 
const srLeft = initializeScrollReveal('left');
srLeft.reveal('.about-news', {delay: 100});
srLeft.reveal('.about-articles', {delay: 100});

// Right
const srRight = initializeScrollReveal('right');
srRight.reveal('.about-events', {delay: 100});
srRight.reveal('.read-more', {delay: 100});
