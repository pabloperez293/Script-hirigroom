// Simulación de los datos del CV
const cvData = {
    nombre: "Pablo",
    apellido: "Perez",
    email: "pablodevperez@gmail.com",
    emailConfirmado: "pablodevperez@gmail.com",
    dni: "36092293",
    phone: "+54 1157576175",

    direccion: "3 de febrero - Buenos Aires",
    linkedin: "www.linkedin.com/in/pabloperezant/",
    github: "github.com/pabloperez293",
    educacion: "Analista Programador - UAI, Feb 2023",
    experiencia: [
        {
            empresa: "Akirento",
            puesto: "Programador Web Freelance",
            fecha: "Ago 2024",
            descripcion: "Desarrollo de funcionalidades en sitios web WordPress, integración de APIs, optimización SEO, entre otros."
        },
        {
            empresa: "Eldar",
            puesto: "Software Engineer",
            fecha: "Oct 2023 - Abr 2024",
            descripcion: "Desarrollo en Java con Spring Boot, manejo de APIs Rest y microservicios."
        }
    ]
};

// Función para rellenar un campo de texto si existe
function rellenarCampo(selector, valor) {
    const campo = document.querySelector(selector);
    if (campo) {
        campo.value = valor;
    } else {
        console.log(`No se encontró el campo: ${selector}`);
    }
}

// Rellenar los campos con la información del CV (ajustando con el id de los inputs)
rellenarCampo('#firstname', cvData.nombre);
rellenarCampo('#lastname', cvData.apellido);
rellenarCampo('#email', cvData.email);
rellenarCampo('#emailConfirm', cvData.emailConfirmado); 
rellenarCampo('#dni', cvData.dni); 

rellenarCampo('#telefono', cvData.telefono);
rellenarCampo('#direccion', cvData.direccion);
rellenarCampo('#linkedin', cvData.linkedin);
rellenarCampo('#github', cvData.github);

// Si los campos de experiencia laboral están disponibles, puedes continuar usando estos selectores
cvData.experiencia.forEach((exp, index) => {
    rellenarCampo(`#empresa${index}`, exp.empresa);
    rellenarCampo(`#puesto${index}`, exp.puesto);
    rellenarCampo(`#fecha${index}`, exp.fecha);
    rellenarCampo(`#descripcion${index}`, exp.descripcion);
});

// Simulacion de  clic en el dropdown para abrir el menú de opciones
document.querySelector('.custom-hr-select__dropdown-indicator').click();

// Esperar un poco para que el menú se abra y luego seleccionar la opción de DNI
setTimeout(function() {
    // Seleccionar la opción que contiene "DNI" (ajustar si la clase o el texto es diferente)
    const opciones = document.querySelectorAll('.css-1wa3eu0-placeholder, .css-62g3xt-dummyInput');
    
    opciones.forEach(opcion => {
        if (opcion.textContent.includes('Documento de identindad')) {
            opcion.click();  // Seleccionar la opción
        }
    });
}, 500); // Esperar medio segundo para que se abra el dropdown
