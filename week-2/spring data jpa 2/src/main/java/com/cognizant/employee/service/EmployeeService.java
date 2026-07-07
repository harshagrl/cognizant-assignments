package com.cognizant.employee.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.cognizant.employee.model.Employee;
import com.cognizant.employee.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    /* Method to CREATE an employee in the database using Spring Data JPA */
    @Transactional
    public void addEmployee(Employee employee) {
        employeeRepository.save(employee);
    }
}
