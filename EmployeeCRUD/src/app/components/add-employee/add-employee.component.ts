import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent {

  employee: Employee = {
    name: '',
    department: '',
    designation: '',
    salary: 0
  };
  submitted = false;

  constructor(private employeeService: EmployeeService) { }

  saveEmployee(): void {
    const data = {
      name: this.employee.name,
      department: this.employee.department,
      designation: this.employee.designation,
      salary: this.employee.salary
    };

    this.employeeService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = {
      name: '',
      department: '',
      designation: '',
      salary: 0
    };
  }

}