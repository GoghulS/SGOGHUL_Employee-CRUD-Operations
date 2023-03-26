import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentEmployee: Employee = {
    name: '',
    department: '',
    designation:'',
    salary:0
  };
  
  message = '';

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getEmployee(this.route.snapshot.params["id"]);
    }
  }

  getEmployee(id: string): void {
    this.employeeService.get(id)
      .subscribe({
        next: (data) => {
          this.currentEmployee = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  // updatePublished(status: number): void {
  //   const data = {
  //     name: this.currentEmployee.name,
  //     department: this.currentEmployee.department,
  //     designation:this.currentEmployee.designation,
  //     salary: status
  //   };

  //   this.message = '';

  //   this.employeeService.update(this.currentEmployee.id, data)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.currentEmployee.published = status;
  //         this.message = res.message ? res.message : 'The status was updated successfully!';
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

  updateEmployee(): void {
    const data = {
          name: this.currentEmployee.name,
          department: this.currentEmployee.department,
          designation:this.currentEmployee.designation,
          salary: this.currentEmployee.salary
        };
    this.message = '';
    this.employeeService.update(this.currentEmployee.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This employee was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteEmployee(): void {
    this.employeeService.delete(this.currentEmployee.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/employees']);
        },
        error: (e) => console.error(e)
      });
  }

}
