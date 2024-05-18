
const images = [
    "./assets/images/doctors/internal_medicine/Dr. Francisco Villanueva Jr.jpg",
    "./assets/images/doctors/internal_medicine/Dr. Gladys Maribal Diaz.jpg",
    "./assets/images/doctors/internal_medicine/Dr. Maria Ailsa Escobin.jpg",
    "./assets/images/doctors/internal_medicine/Dr. Michael Perez.jpg",

    "./assets/images/doctors/obstetrics_gynecology/Dr. Antoinette Añonuevo.jpg",
    "./assets/images/doctors/obstetrics_gynecology/Dr. Catherine Costa.jpg",
    "./assets/images/doctors/obstetrics_gynecology/Dr. Cynthia Correo.jpg",

    "./assets/images/doctors/opthalmologist/Dr. Relito Saquilayan.jpg",

    "./assets/images/doctors/otyhopedics/Dr. Frederick Hipol.jpg",
    "./assets/images/doctors/pediaratics/Dr. Cristina Magno.jpg",
    
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
