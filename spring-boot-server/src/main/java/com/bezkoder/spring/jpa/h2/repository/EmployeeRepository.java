package com.bezkoder.spring.jpa.h2.repository;

import com.bezkoder.spring.jpa.h2.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

  List<Employee> findByNameContaining(String name);
//  List<Employee> findByIdContaining(Long id);
//
//  List<Employee> findByIdAndName(Long id, String name);
//
//  List<Employee> findByIdAndDepartment(Long id, String department);
//
//  List<Employee> findByIdAndNameAndDepartment(Long id, String name, String department);
//
//  List<Employee> findByDepartmentContainingIgnoreCase(String department);
//
//  List<Employee> findByNameAndDepartment(String name, String department);
//
}
