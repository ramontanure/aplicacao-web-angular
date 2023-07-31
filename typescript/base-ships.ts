class Spacecraft {
  // Sintaxe reduzida, ele cria o atributo e o parametros
  constructor(public propulsor: string) {}

  jumpIntoHyperspace() {
    // Sempre que precisamos utilizar os atributos daquela classe utilizamos a palavra this
    console.log(`Entering hyperspace with ${this.propulsor}`)
  }
}

interface Containership {
  cargoContainers: number
}
// Exportar classe ou interface ou export antes da interface e antes de class
export { Spacecraft, Containership }
