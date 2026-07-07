# Difference between JPA, Hibernate and Spring Data JPA 

## Java Persistence API (JPA)
- JSR 338 Specification for persisting, reading and managing data from Java objects
- Does not contain concrete implementation of the specification
- Hibernate is one of the implementation of JPA

## Hibernate
- ORM Tool that implements JPA

## Spring Data JPA
- Does not have JPA implementation, but reduces boiler plate code
- This is another level of abstraction over JPA implementation provider like Hibernate
- Manages transactions

## Code Comparison
Refer to the Java files in this project to see the difference between using pure Hibernate (`EmployeeHibernateDao.java`) and Spring Data JPA (`EmployeeService.java` + `EmployeeRepository.java`).

### Reference Links
- https://dzone.com/articles/what-is-the-difference-between-hibernate-and-sprin-1 
- https://www.javaworld.com/article/3379043/what-is-jpa-introduction-to-the-java-persistence-api.html
