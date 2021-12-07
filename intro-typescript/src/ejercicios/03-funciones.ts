


function sumar(a: number, b:number):number {
    return a+b;
}
const result = sumar(1,2);

console.log(result)
function multuplicar(numero: number, otronumero:number, base:number=2):number {
    return numero *base;
}

interface PersonaLOR {
    nombre: string,
    pv: number,
    mostrarhp: ()=> void;

}

function curar(personaje:PersonaLOR, curarX):void {
    personaje.pv +=curarX;
    console.log(personaje)
}


const nuevoPersonaje:PersonaLOR ={
    nombre:'strider',
    pv: 50,
    mostrarhp(){
        console.log('puntos de vida: ', this.pv)
    }
}
curar(nuevoPersonaje,10);
nuevoPersonaje.mostrarhp()