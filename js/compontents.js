// Links
fetch('./components/header-links.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('.header-links').innerHTML = data;
    })

// Navigation
fetch('./components/navigation.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('.nav-bar').innerHTML = data;
    })

//  Map
fetch('./components/map.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.map').innerHTML = data;
  })

// Email
fetch('./components/email.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.email').innerHTML = data;
  })

// Footer
fetch('./components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('.footer').innerHTML = data;
    })

// Contact Us
fetch('./components/contact-us.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('.contact-us').innerHTML = data;
    })

