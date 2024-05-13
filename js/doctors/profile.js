document.addEventListener("DOMContentLoaded", function() {
    // Function to get query parameters from URL
    function getQueryVariable(variable) {
        const query = window.location.search.substring(1);
        const vars = query.split('&');
        for (let i = 0; i < vars.length; i++) {
            const pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) === variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        console.log('Query variable %s not found', variable);
    }

    // Retrieve doctor's information from query parameters
    const doctorId = getQueryVariable('id');
    const doctorName = getQueryVariable('name');
    const doctorDepartment = getQueryVariable('department');
    const doctorImage = getQueryVariable('image');
    const doctorSchedule = getQueryVariable('schedule');
    const doctorTime = getQueryVariable('time');
    const doctorContact = getQueryVariable('contact');
    
    // Update HTML elements with doctor's information
    document.getElementById('doctor-image').src = doctorImage;
    document.getElementById('doctor-id').innerText = doctorId
    document.getElementById('doctor-name').innerText = doctorName;
    document.getElementById('doctor-department').innerText = doctorDepartment;
    document.getElementById('doctor-schedule').innerText = 'Schedule: ' + doctorSchedule;
    document.getElementById('doctor-time').innerText = 'Available Time: ' + doctorTime;
    document.getElementById('doctor-contact').innerText = 'Contact: ' + doctorContact;   
});