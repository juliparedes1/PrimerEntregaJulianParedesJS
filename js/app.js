// Calculadora de Metabolismo Basal

/* Fórmula de la tasa metabólica basal
El cálculo de la TMB se realiza con dos fórmulas, una para mujer y otra para hombre:

Hombres	TMB = (10 x peso en kg) + (6,25 × altura en cm) – (5 × edad en años) + 5
Mujeres	TMB = (10 x peso en kg) + (6,25 × altura en cm) – (5 × edad en años) – 161 */

/* Si le aplicamos el nivel de actividad diaria a esta fórmula, el método para calcularlo cambia de la siguiente manera:

Poco o ningún ejercicio	Calorías diarias necesarias = TMB x 1,2
Ejercicio ligero (1-3 días a la semana)	Calorías diarias necesarias = TMB x 1,375
Ejercicio moderado (3-5 días a la semana)	Calorías diarias necesarias = TMB x 1,55
Ejercicio fuerte (6-7 días a la semana)	Calorías diarias necesarias = TMB x 1,725
Ejercicio muy fuerte (dos veces al día, entrenamientos muy duros)	Calorías diarias necesarias = TMB x 1,9 */

// VOY A PROBAR PASAR EL VALOR DE LA FUNCION DEL SWITCH 

//VARIABLES
let sexo, peso, estatura, edad, nivelDeActividad, tmb, caloriasTotales, auxiliar, fp = false;

//PEDIDA DE DATOS
sexo = prompt("ingrese su sexo (Masculino/Femenino)");
peso = prompt("Ingrese su peso en kg");
estatura = prompt("Ingrese su Estatura en cm");
edad = prompt("Ingrese su Edad");
nivelDeActividad = prompt("Ingrese su Nivel de actividad fisica (sedentario\n ligera\n moderada\n fuerte\n muy fuerte ");


//FUNCIONES
const tmbHombre = (peso, estatura, edad,) => {
    return (peso*10)+(6.25*estatura)-(5*edad)+5;
};
const tmbMujer = (peso, estatura, edad) => {
    return (peso*10)+(6.25*estatura)-(5*edad)-161;
};
const nda = (nivelDeActividad)=>{
    
    switch(nivelDeActividad){
        case "sedentario": 
            return  tmb * 1.2;
        case "ligera":
            return tmb * 1.375;
            
        case "moderada":
            return tmb * 1.55;
            
        case "fuerte":
            return tmb * 1.725;
            
        case "muy fuerte":
            return tmb *1.9;
            
        default:
            alert("ERROR");
            fp = true;
            break;
    };
};

//CONDICIONALES y programa principal
if(sexo == "Masculino" || sexo == "masculino"){
    tmb = tmbHombre(peso, estatura, edad);
    caloriasTotales = nda(nivelDeActividad);
}else if (sexo == "Femenino" || sexo == "femenino") {
    tmb = tmbMujer(peso, estatura, edad)
    caloriasTotales = nda(nivelDeActividad);
}else{
    alert("El genero ingresado es erroneo");
    fp = true;
}

//el TMB representa la tasa metabolica basal, las calorias totales representan el total que se requiere consumir para mantenerse en el mismo peso, generalmente generalmente se agregan 350 calorias para aumentar de manera saludable, y se disminuyen 350 calorias para adelgazar de manera saludable (aproximadamente)
// en este caso, como se requiere un ciclo for / while para la entrega, primero a las calorias totales le restare 350 y hare un ciclo for, asi puedo comenzar con las calorias requeridas para adelgazar y darle alguna utilidad al ciclo 

caloriasTotales -=350;  
if(fp != true){
    alert(`su tasa metabolica basal es ${tmb.toFixed(2)}`)
for(let i = 0; i<3; i++){
    switch(i){
        case 0:
            auxiliar = "bajar de peso"; 
            break;
        case 1:
            auxiliar = "mantenerse en peso";
            break;
        default:
            auxiliar = "aumentar de peso";
            break;
    }
    alert(`las calorias requeridas para ${auxiliar} son aproximadamente : ${caloriasTotales.toFixed(2)}`);
    caloriasTotales+=350;
};
}else{
    alert("Intente Nuevamente");
};
