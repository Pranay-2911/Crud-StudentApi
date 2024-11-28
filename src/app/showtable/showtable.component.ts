import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-showtable',
  templateUrl: './showtable.component.html',
  styleUrls: ['./showtable.component.css']
})
export class ShowtableComponent {
  studentData : any = '';
  constructor(private studentService:StudentService, private router:Router) {
    this.loadStudent();
  }

  loadStudent(){
    this.studentService.getStudents().subscribe((data)=>{
      this.studentData=data;
    })
  }
  deleteStudent(id: any)
  {
    console.log(id);
    this.studentService.deleteStudent(id).subscribe(()=>{});
    this.loadStudent();
  }
  sendData(id:any){
    console.log("click");
    this.router.navigate(['updatestudent/'+`${id}`]);
  }

}
