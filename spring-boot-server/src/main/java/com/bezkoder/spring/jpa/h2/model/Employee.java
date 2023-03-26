package com.bezkoder.spring.jpa.h2.model;

import javax.persistence.*;

@Entity
@Table(name = "employees")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "department")
	private String department;

	@Column(name = "designation")
	private String designation;
	@Column(name = "salary")
	private float salary;


	public Employee() {

	}

	public Employee(String name, String department,String designation, float salary) {
		this.name = name;
		this.department = department;
		this.designation = designation;
		this.salary=salary;
	}

	public long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public float getSalary() {
		return salary;
	}

	public void setSalary(float salary) {
		this.salary = salary;
	}


	@Override
	public String toString() {
		return "Tutorial [id=" + id + ", name=" + name + ", dept=" + department + ",des=\" + designation + \", salary=" + salary + "]";
	}

}
