document.addEventListener("DOMContentLoaded", function() {

    const careerContainer = document.getElementById('career-application');
    const jobStaffButton = document.querySelectorAll('.career-button');
    
    function displayAllHiring() {
        // Clear existing content in careerContainer
        careerContainer.innerHTML = "";

        // Render all job offers
        job_offers.forEach(job => {
            const jobElement = `
            <div class="career-application-box">
                <h4>${job.title}</h4>
                <p>${job.description}</p>
                <div class="date-position">
                    <i class='bx bxs-megaphone'></i>
                    ${job.date} | ${job.staffType}
                </div>
            </div>`;
            careerContainer.insertAdjacentHTML('beforeend', jobElement);
        });
    }
    
    jobStaffButton.forEach(button => {
        button.addEventListener('click', function() {
            const JobStaff = this.getAttribute('data-job-staff');
            displayByJobStaff(JobStaff);
        });
    });

    // Function to display job offers by job staff
    function displayByJobStaff(JobStaff) {
        // Clear existing content in careerContainer
        careerContainer.innerHTML = "";

        // Filter job offers by department
        const filteredJobs = job_offers.filter(job => JobStaff === 'all' || job.staffType.toLowerCase().includes(JobStaff));

        // Render filtered job offers
        filteredJobs.forEach(job => {
            const jobElement = `
            <div class="career-application-box">
                <h4>${job.title}</h4>
                <p>${job.description}</p>
                <div class="date-position">
                    <i class='bx bxs-megaphone'></i>
                    ${job.date} | ${job.staffType}
                </div>
            </div>`;
            careerContainer.insertAdjacentHTML('beforeend', jobElement);
        });

        // Remove active class from all buttons
        jobStaffButton.forEach(button => button.classList.remove('active'));
        // Add active class to the clicked button
        const activeButton = document.querySelector(`[data-job-staff="${JobStaff}"]`);
        activeButton.classList.add('active');
    }

    displayAllHiring();
});