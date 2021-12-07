
/*
    ===== Código de TypeScript =====
*/


let habilidades: (string | number | boolean)[] = ["bash", "counter", "healing"];
    
interface Personaje {
    nombre: string,
    hp: number,
    habilidades:string[],
    puebloNatal?: string // optional variable
}


const personje: Personaje={
    nombre: 'Strider',
    hp: 100,
    habilidades:["bash", "counter", "healing"],

}

