// Crear interfaces

interface Auto {
  encender: boolean,
  velocidadMaxima: number,
  acelerar ():void
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason{
  reir: boolean,
  comer: boolean,
  llorar: boolean
}

const guason: Guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface CiduadGotica {
  ( ciudadanos:string[] ):number
}

const ciudadGotica:CiduadGotica = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface PersonaType{
  nombre: string,
  edad: number,
  sexo: string,
  estadoCivil: string,
  imprimirBio(): void
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements PersonaType {

  public nombre: string;
  public edad: number;
  public sexo: string;
  public estadoCivil: string;

  constructor( nombre:string, edad:number, sexo:string, estadoCivil:string){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.estadoCivil = estadoCivil;
  }

  imprimirBio(){
    console.log(`Nombre: ${ this.nombre }, Edad: ${ this.edad}, Sexo: ${ this.sexo }, Estado Civil: ${ this.estadoCivil}`);
  }

}