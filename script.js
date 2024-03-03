// // Dynamic Doctor List
// const doctorList = [
//     { name: 'Dr. John Doe', specialization: 'Cardiologist' },
//     { name: 'Dr. Jane Smith', specialization: 'Pediatrician' },
//     // Add more doctors as needed
// ];

// const doctorSelect = document.getElementById('doctor');
// doctorList.forEach(doctor => {
//     const option = document.createElement('option');
//     option.value = doctor.name;
//     option.textContent = `${doctor.name} - ${doctor.specialization}`;
//     doctorSelect.appendChild(option);
// });

// // Appointment Form Submission
// const appointmentForm = document.getElementById('appointment-form');
// const appointmentMessage = document.getElementById('appointment-message');

// appointmentForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const selectedDoctor = doctorSelect.value;
//     const selectedDate = document.getElementById('date').value;
//     const selectedTime = document.getElementById('time').value;
    
//     // Perform validation checks here if needed

//     // Example message display
//     appointmentMessage.innerHTML = `
//         <p>Appointment booked successfully!</p>
//         <p>Doctor: ${selectedDoctor}</p>
//         <p>Date: ${selectedDate}</p>
//         <p>Time: ${selectedTime}</p>
//     `;
// });

// // Contact Form Submission
// const contactForm = document.getElementById('contact-form');
// const contactMessage = document.getElementById('contact-message');

// contactForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const formData = new FormData(contactForm);
//     const formDataSerialized = Object.fromEntries(formData.entries());
    
//     // Perform validation checks here if needed

//     // Example message display
//     contactMessage.innerHTML = `
//         <p>Thank you for your message, ${formDataSerialized.name}!</p>
//         <p>We will get back to you soon at ${formDataSerialized.email}.</p>
//         <p>Your message: ${formDataSerialized.message}</p>
//     `;
// });

// // Burger Menu Functionality
// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');

//     burger.addEventListener('click', () => {
//         nav.classList.toggle('nav-active');
//     });
// }

// navSlide();
