import $ from 'jquery'


// Tipando o tipo do parametro
function soma (a: number, b: number){
    return a + b
}

// types
// interface


// Criação de interface e estrutura de dados 
interface IAnimal {
    nome: string,
    tipo: 'terrestre' | 'aquatico'
    domestico: boolean
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande'
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'aquatico',
    domestico: false
}

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    domestico: false
}

const canino: ICanino = {
    nome: "Cachorro",
    tipo: 'terrestre',
    domestico: true,
    porte: 'pequeno'
}

// Atribuindo o elemento Input no html
const input = document.getElementById('input') as HTMLInputElement

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement

    console.log(i.value)
})

// Generic Types
function preencheLista<T> (array: T[], value: T) {
    return array.map(() => value)

}

preencheLista([1,2,3], 5)


// Interface para um usuario
interface Usuario {
    id: string,
    email: string,
}

interface Admin extends Usuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor'
}

function redirecione (user: Usuario | Admin ) {
    if('cargo' in user){
        // Redireciona para a área Admin
    }

    // Redireciona para a área Usuario
}


// Criando interface. O simbolo ? significa que pode ou não acontecer

interface Crianca {
    nome: string,
    idade: number,
    parqueFavorito?: string //Pode ou não acontecer ou 'ter' (opcional)
}

const crianca: Crianca = {
    nome: 'Sofia',
    idade: 1
}

class Employee {
    readonly emptCode: number; // Propriedade somente de leitura (não é possivel alterar)
    emptName: string

    constructor ( code: number, name: string ){
        this.emptCode = code
        this.emptName = name
    }
}

let emp = new Employee(10, 'Leo')
emp.emptName = 'Sofia'



interface Estudante {
    nome: string,
    idade: number
}

interface Estudante {
    serie: string
}


$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova função')
    }
})

$('input').novaFuncao()