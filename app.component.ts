import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'student-module';

  StudentDetails=null as any;
  studentToUpdate={
    rollno:"",
    name:"",
    city:"",
    percentage:""
  }

  constructor(private StudentService: StudentService){
    this.getStudentDetails();
  }

  register(registerForm:NgForm){
    this.StudentService.registerStudent(registerForm.value).subscribe(
      (resp)=>{
        console.log(resp);
        registerForm.reset();
        this.getStudentDetails();
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  getStudentDetails(){
    this.StudentService.getStudents().subscribe(
      (resp)=>{
        console.log(resp);
        this.StudentDetails=resp;
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  deleteStudent(student:any){
    this.StudentService.deleteStudent(student.rollno).subscribe(
      (resp)=>{
        console.log(resp);
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  edit(student:any){
    this.studentToUpdate=student
  }

  updateStudent(){
    this.StudentService.updateStudent(this.studentToUpdate).subscribe(
      (resp)=>{
        console.log(resp);
      },
      (err)=>{
        console.log(err);
      }
    );
  }
}
