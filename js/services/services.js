document.addEventListener("DOMContentLoaded", function() {
    const serviceContainer = document.getElementById('service-facilities-info');
    const serviceButton = document.querySelectorAll('.service-navbtn');

    function displayInitialized(){
        const service = services[0];

        const servicesHTML = `
            <div class="dept-logo">
                <h2>${service.name}</h2>
            </div>

            <div class="displayed-img">
                <img id="content-img" src="${service.image}" alt="content_img">
            </div>

            <div class="service-details">
                <p id="info-details">${service.description}</p>
            </div>

            <div class="services">
                <label class="fs-4 fw-bold">Services Offer:</label>
                <ul id="service-offered">
                    <li>${service.services}</li>
                </ul>
            </div>
        `;
        serviceContainer.innerHTML = servicesHTML;
    }

    serviceButton.forEach(button => {
        button.addEventListener('click', function() {
            const selectedService = this.getAttribute('data-item');
            displaySelected(selectedService);
        });
    });

    function displaySelected(selectedService){
        const filteredService = services.filter(service => service.name.toLowerCase().includes(selectedService.toLowerCase()));
        
        filteredService.forEach(service => {
        const servicesHTML = `
            <div class="dept-logo">
                <h2>${service.name}</h2>
            </div>

            <div class="displayed-img">
                <img id="content-img" src="${service.image}" alt="content_img">
            </div>

            <div class="service-details">
                <p id="info-details">${service.description}</p>
            </div>

            <div class="services">
                <label class="fs-4 fw-bold">Services Offer:</label>
                <ul id="service-offered">
                    <li>${service.services}</li>
                </ul>
            </div>
        `;
        serviceContainer.innerHTML = servicesHTML;
        });
        
        serviceButton.forEach(button => button.classList.remove('active'));
        // Add active class to the clicked button
        const activeButton = document.querySelector(`[data-item="${selectedService}"]`);
        activeButton.classList.add('active');
    }

    displayInitialized();
});
