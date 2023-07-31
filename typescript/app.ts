/*
O que é TypeScript
É uma linguagem que estende o javaScript e adiciona tipos como Strings, number, boolean e também adiciona
classes e interfaces.
Pode ajudar na detecção de erros
Ele ajuda também na organização de códigos, pois oferece módulos que são unidades independentes

let name:string
name = "Han Solo"

name = 10 //ERROR

// Criando array
let players: number[] = [1,2,3]
let players: Array<number>[] = [1,2,3]
let players = [1,2,3]
*/

let message:string = "Help me, Obi-Wan Kenobi. You're my only hope!"
console.log(message)
let episode:number = 4
console.log(`This is episode ${episode}`)
episode = episode + 1
console.log(`Next episode is ${episode}`)

let favoriteDroid:string
// Vai ser do tipo any a variavel vai poder ter qualquer valor
favoriteDroid = "BB-8"
console.log("My favorite droid is" + favoriteDroid)

// Tipo dos parametros e tipo do retorno

function useTheForce(name: string):void {
  console.log('Use the force' + name)
}

let shorttestRun = function(parsecs:number):boolean {
  return parsecs < 12
}
console.log(shorttestRun(9))
//Error console.log(shorttestRun("4"))

// É obrigatorio voce passar os parametros, se não pode haver um Error
// Caso voce queira que o parametro seja opcional marque com uma ? no parametro

let isEnoughToBeatMF = function(parsecs: number):boolean {
  return parsecs < 12
}
let distance:number = 11
console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : "NO"} `)

let call = (name: string) => console.log(`Do you copy ${name}`)
call('R2')

function inc(speed:number, inc:number = 1):number {
  return speed + inc
}
console.log(inc(5, 2))
console.log(inc(5))

// Classe são representações de um objeto do mundo real, podemos ter atributos e metodos

import {Spacecraft, Containership} from './base-ships'
import {MillenniumFalcon} from './startfighters'

import * as _ from 'lodash'

console.log(_.pad("typescript Examples", 40, "="))


let ship = new Spacecraft("hyperdrive")
ship.jumpIntoHyperspace()

// Herança quero extender SpaceCraft

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'yes': 'no'}`)
