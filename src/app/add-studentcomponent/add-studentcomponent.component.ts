import { Component } from '@angular/core';
import { FormGroup,FormControl,FormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-add-studentcomponent',
  templateUrl: './add-studentcomponent.component.html',
  styleUrls: ['./add-studentcomponent.component.css']
})
export class AddStudentcomponentComponent {
  newStudentForm = new FormGroup({
    rollNo: new FormControl(),
    name: new FormControl(),
    age: new FormControl(),
    email: new FormControl(),
    date: new FormControl(),
    isMale: new FormControl()
  });

  constructor(private studentService: StudentService) { }

  addnewStudent()
  {
    this.studentService.addStudent(this.newStudentForm.value).subscribe((data) =>{
      console.log(data);
    })
    window.location.href = '';  
    console.log(this.newStudentForm.value);

  }

}
