import { Component, OnInit, Input } from '@angular/core';
import { Student } from './student.model'

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
// Para receber valores do component parent preciso passar o input
  @Input() student!: Student;
  constructor() { }

  ngOnInit(): void {
  }

  clicked() {
    console.log(`Student: ${this.student?.name}`)
  }

}
