import { Component } from '@angular/core';
import {Student} from './student/student.model'

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  students: Student[] = [
    {name: 'Luke', isJedi: true, temple: 'Coruscant'},
    {name: 'leia', isJedi: false},
    {name: 'Han Solo', isJedi: false}
  ]
}

/*
O que é diretivas?

Diretivas são componentes com templates
Componentes herdam tudo de diretivas

Diretiva comum e simples serve para adicionar comportamento a um elemento do DOM
Mas não tem um template de um componente

3 tipos de diretivas:
Componentes
Estruturais: Adicionar comportamento a um elemento do DOM
Atributos: associa um atributo a um elemento do dom

*ngIF permite redenrizar um conteudo caso a expressao associada seja verdadeira
se não for o conteudo não é exibido * é pra abreviar o template escrito em html5

*ngFor vai repetir o conteudo de um elemento para cada item de uma coleção de objetos
vai repetir o template de cada elemento

*ngSwitchCase
*ngSwitchDefault
*/
