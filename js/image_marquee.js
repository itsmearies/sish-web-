
const images = [
    "./assets/images/doctors/doctor.jpg",
    "./assets/images/doctors/doctor.jpg",
    "./assets/images/doctors/doctor.jpg",
    "./assets/images/doctors/doctor.jpg",
    "./assets/images/doctors/doctor.jpg",
    "./assets/images/doctors/doctor.jpg",
    "./assets/images/doctors/doctor.jpg",
    "./assets/images/doctors/doctor.jpg",
    "./assets/images/doctors/doctor.jpg",
    "./assets/images/doctors/doctor.jpg",
    "./assets/images/doctors/doctor.jpg",
    "./assets/images/doctors/doctor.jpg",
    "./assets/images/doctors/doctor.jpg",
    "./assets/images/doctors/doctor.jpg",
    "./assets/images/doctors/doctor.jpg",
    "./assets/images/doctors/doctor.jpg",
    "./assets/images/doctors/doctor.jpg"
];

const marqueeContent = document.querySelector('.doctors-content');

images.forEach((imageUrl) => {
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    
    const marqueeItem = document.createElement('div');
    marqueeItem.classList.add('doctor');
    marqueeItem.appendChild(imgElement);
    
    marqueeContent.appendChild(marqueeItem.cloneNode(true));
});
