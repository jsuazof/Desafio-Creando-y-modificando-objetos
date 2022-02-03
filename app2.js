class Paciente {
    constructor(nombre, edad, rut, diagnostico){
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
        this.diagnostico = diagnostico;
        
    }
}    
class Consultorio {
        constructor(nombre){
            this.nombre = nombre;
            this.pacientes = [];
        }

    get getPacientes() {
        return this.pacientes;
    }

    set setPacientes(paciente){
        this.pacientes.push(paciente);
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

quinta.setConsultorio = jorge;
quinta.setConsultorio = miguel;
quinta.setConsultorio = claudio;

console.log(jorge);