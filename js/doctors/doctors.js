document.addEventListener("DOMContentLoaded", function() {

    const departmentContainer = document.getElementById('department-container');
    const departmentButtons = document.querySelectorAll('.department-button');

    function displayAllDepartments() {
        const allDepartments = ['internal medicine', 'obstetrics and gynecology', 'ophthalmologist', 'otyhopedics', 'pediaratics'];
        allDepartments.forEach(department => {
            const filteredDoctors = doctors.filter(doctor => doctor.department === department);
            const departmentDoctors = filteredDoctors.map(doctor => `
                <div class="doctor fade-in">
                    <img src="${doctor.image}" alt="${doctor.name}">
                    <span class="doctor-name">${doctor.name} ${doctor.id}</span>
                    <span class="doctor-department">Specialist: ${doctor.department}</span>
                    <a href="#" class="view-profile-link" data-id="${doctor.id}">View Profile</a>
                </div>`).join('');
            departmentContainer.innerHTML += `<div class="department-title">${department.charAt(0).toUpperCase() + department.slice(1)}</div><div class="department-list">${departmentDoctors}</div>`;
        });
    }

    function filterDoctors(department) {
        departmentContainer.innerHTML = '';
        if (department === 'all') {
            displayAllDepartments();
        } else {
            const filteredDoctors = doctors.filter(doctor => doctor.department === department);
            const departmentDoctors = filteredDoctors.map(doctor => `
                <div class="doctor fade-in">
                    <img src="${doctor.image}" alt="${doctor.name}">
                    <span class="doctor-name">${doctor.name}</span>
                    <span class="doctor-department">Specialist: ${doctor.department}</span>
                    <a href="#" class="view-profile-link" data-id="${doctor.id}">View Profile</a>
                </div>`).join('');
            departmentContainer.innerHTML = `<div class="department-title">${department.charAt(0).toUpperCase() + department.slice(1)}</div><div class="department-list">${departmentDoctors}</div>`;
        }

        // Remove active class from all buttons
        departmentButtons.forEach(button => button.classList.remove('active'));
        // Add active class to the clicked button
        const activeButton = document.querySelector(`[data-department="${department}"]`);
        activeButton.classList.add('active');
    }

    departmentButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const department = this.getAttribute('data-department');
            filterDoctors(department);
        });
    });

    function viewProfile(id) {
        // Find the doctor object with the given id
        const doctor = doctors.find(d => d.id === id);
        if (doctor) {
            // Navigate to another HTML page (sample.html) and pass doctor's information as query parameters
            window.location.href = `doctors-profile.html?id=${doctor.id}&name=${doctor.name}&department=${doctor.department}&image=${doctor.image}&schedule=${doctor.schedule}&time=${doctor.time}&contact=${doctor.contact}`;
        }
    }

    // Event listener for "View Profile" links
    departmentContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('view-profile-link')) {
            event.preventDefault();
            const doctorId = event.target.getAttribute('data-id');
            viewProfile(doctorId);
        }
    });

    displayAllDepartments(); // Initial display of all departments and doctors
});
