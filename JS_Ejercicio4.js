let miNombre = "Nestor"; //- Una cadena de texto con tu Nombre
let miApellido = "Martire"; //- Otra cadena de texto con tu Apellido
let estudiante = miNombre.concat(" ", miApellido); //- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
console.log(estudiante); 
let estudianteMayus = estudiante.toUpperCase(); //- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
console.log(estudianteMayus);
let estudianteMinus = estudiante.toLowerCase(); //- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
console.log(estudianteMinus);
let cantestudiante = estudiante.length; //- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
console.log(cantestudiante);
let letra1nombre = miNombre.charAt(0); //- Una variable que contenga la primera letra del Nombre
console.log(letra1nombre);
let ultLetraApellido = miApellido.charAt(6); //- Otra variable que contenga la última letra del Apellido
console.log(ultLetraApellido);
console.log(estudiante.replace(" ","")); //- Una cadena de texto que elimine los espacios de la variable "estudiante"
console.log(estudiante.includes("Nestor")) //- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"