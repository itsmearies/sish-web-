document.addEventListener("DOMContentLoaded", function() {
    const departmentContainer = document.getElementById('department-info');
    const departmentButton = document.querySelectorAll('.department-navbtn');

    function displayInitialized(){
        const department = departments[1];

        const departmentHTML = `
        <div class="dept-logo">
            <img id="logo-img" src="${department.logo}" alt="logo_img">
            <h2>${department.name}</h2>
        </div>
        
        <div class="displayed-img">
            <img id="content-img" src="${department.image}" alt="content_img">
        </div>

        <div class="dept-details">
            <p id="info-details">${department.description}</p>
        </div>

        <div class="service-offered">
            <label class="fs-4 fw-bold">Services Offer:</label>
            <ul id="service-offered">
                ${department.services}
            </ul>
        </div>
        `;
        departmentContainer.innerHTML = departmentHTML;
    }

    departmentButton.forEach(button => {
        button.addEventListener('click', function() {
            const selectedDepartment = this.getAttribute('data-item');
            displaySelected(selectedDepartment);
        });
    });

    function displaySelected(selectedDepartment){
        const filteredDepartment = departments.filter(department => department.name.toLowerCase().includes(selectedDepartment.toLowerCase()));
        
        filteredDepartment.forEach(department => {
        const departmentHTML = `
        <div class="dept-logo">
            <img id="logo-img" src="${department.logo}" alt="logo_img">
            <h2>${department.name}</h2>
        </div>
        
        <div class="displayed-img">
            <img id="content-img" src="${department.image}" alt="content_img">
        </div>

        <div class="dept-details">
            <p id="info-details">${department.description}</p>
        </div>

        <div class="service-offered">
            <label class="fs-4 fw-bold">Services Offer:</label>
            <ul id="service-offered">
                ${department.services}
            </ul>
        </div>
        `;
        departmentContainer.innerHTML = departmentHTML;

        });
        
        departmentButton.forEach(button => button.classList.remove('active'));
        // Add active class to the clicked button
        const activeButton = document.querySelector(`[data-item="${selectedDepartment}"]`);
        activeButton.classList.add('active');
    }

    displayInitialized();
});
