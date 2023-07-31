import { Containership, Spacecraft } from './base-ships'

export class MillenniumFalcon extends Spacecraft implements Containership{
  cargoContainers : number
  constructor() {
    // Preciso passar qual o propulsor padrão da MilleniumFalcon
    super('hyperdrive')
    this.cargoContainers = 2
    // Não preciso mais passar quando estiver criando uma instancia da Millenium Falcon
  }

  jumpIntoHyperspace() {
    if(Math.random() >= 0.5) {
      // Chamando a implementação da classe base
      super.jumpIntoHyperspace()
    } else {
      console.log('Failed to jump into hyperspace')
    }
  }
}
