import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  API='http://localhost:8081';
  constructor(private http: HttpClient) { }


  public registerStudent(StudentData:any){
    return this.http.post(this.API+'/registerStudent',StudentData)
  }

  public getStudents(){
    return this.http.get(this.API+'/getStudents');
  }

  public deleteStudent(rollno:any){
     return this.http.delete(this.API+'/deleteStudent?rollno=' + rollno);
  }

  public updateStudent(student:any){
    return this.http.put(this.API+'/updateStudents',student);
  }
}
