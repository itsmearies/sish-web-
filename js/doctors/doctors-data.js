const doctors = [
    { id: "1", name: "Dr. Cristina Magno", department: "pediatrics", image: "./assets/images/doctors/PEDIATRICS/Dr. Cristina Magno.jpg", schedule: "Thursday", time: "12nn-1pm", contact: "Look for Secretary"},

    { id: "2", name: "Dr. Frederick Hipol", department: "orthopedics", image: "./assets/images/doctors/ORTHOPEDICS/Dr. Frederick Hipol.jpg", schedule: "Wednesday", time: "1pm-2pm", contact: "Look for Secretary May Ann 0998163 8330"},

    { id: "3", name: "Dr. Relito Saquilayan", department: "cardiology", image: "./assets/images/doctors/OPHTHALMOLOGIST/Dr. Relito Saquilayan.jpg", schedule: "Monday, Thursday", time: "7-11am", contact: "0964 198 2283"},
   
    { id: "4", name: "Doctor", department: "cardiology", image: "./assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "5", name: "Doctor", department: "cardiology", image: "./assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "6", name: "Doctor", department: "cardiology", image: "./assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "7", name: "Doctor", department: "cardiology", image: "./assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "8", name: "Doctor", department: "cardiology", image: "./assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},

    { id: "9", name: "Doctor", department: "neurology", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "10", name: "Doctor", department: "neurology", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "11", name: "Doctor", department: "neurology", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "12", name: "Doctor", department: "neurology", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "13", name: "Doctor", department: "neurology", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "14", name: "Doctor", department: "neurology", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "15", name: "Doctor", department: "neurology", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "16", name: "Doctor", department: "neurology", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
   
    { id: "17", name: "Doctor", department: "orthopedics", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "18", name: "Doctor", department: "orthopedics", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "18", name: "Doctor", department: "orthopedics", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "19", name: "Doctor", department: "orthopedics", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "20", name: "Doctor", department: "orthopedics", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "21", name: "Doctor", department: "orthopedics", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "22", name: "Doctor", department: "orthopedics", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "23", name: "Doctor", department: "orthopedics", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "24", name: "Doctor", department: "orthopedics", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
   
    { id: "25", name: "Doctor", department: "radiology", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "26", name: "Doctor", department: "radiology", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "27", name: "Doctor", department: "radiology", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "28", name: "Doctor", department: "radiology", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "29", name: "Doctor", department: "radiology", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "30", name: "Doctor", department: "radiology", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "31", name: "Doctor", department: "radiology", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
    { id: "32", name: "Doctor", department: "radiology", image: "/assets/images/doctors/doctor.jpg", schedule: "Monday, Wednesday, Saturday", time: "7-11am", contact: "0964 198 2283"},
  
];