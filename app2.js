class Paciente {
    constructor(nombre, edad, rut, diagnostico){
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
        this.diagnostico = diagnostico;
        
    }

get nombre() {
    return this._nombre
}
get edad() {
    return this._edad
}
get rut() {
    return this._rut
}
get diagnostico() {
    return this._diagnostico
}
set nombre(value) {
    this._nombre = value
}
set edad(value) {
    this._edad = value
}
set rut(value) {
    this._rut = value
}
set diagnostico(value) {
    this._diagnostico = value
}
}    
class Consultorio {
        constructor(nombre){
            this.nombre = nombre;
            this._pacientes = [];
        }

    get getPacientes() {
        return this.pacientes;
    }

    set pacientes(value) {
        this._pacientes.push(value)
    }

    agregarPaciente(value) {
        this._pacientes.push(value)
    }  

};

Consultorio.prototype.findPaciente = function (nombre){
    return this.paciente.find (item => item.nombre.toUpperCase() === this.nombre.toUpperCase()) || "!!! No Encontrado !!!"
}
Consultorio.prototype.findRut = function (rut){
    return this.paciente.find ((id) => id.rut.toUpperCase() === this.nombre.toUpperCase()) || "!!! No Encontrado !!!"
}

Consultorio.prototype.showAll = function (){
    this.paciente.forEach(item => {
        console.log(item);
    })
}

const quinta = new Consultorio ("Quinta");

const jorge = new Paciente ("Jorge", 49, "11.111.111-1", "Tos");
const miguel = new Paciente ("Miguel", 25, "13.333.333-3", "Sed");
const claudio = new Paciente ("Claudio", 53, "14.444.444-4", "Torticolis" )


console.log(jorge);
quinta.agregarPaciente(miguel);
console.log(quinta);







