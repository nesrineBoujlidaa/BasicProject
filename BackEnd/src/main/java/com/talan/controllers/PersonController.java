package com.talan.controllers;

import com.talan.entities.Person;
import com.talan.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;


@RestController
@RequestMapping("/persons")
public class PersonController {
     @Autowired
     private PersonService personService;


   @GetMapping("/")
    public Collection<Person> getAllPersons() {

        return personService.listAllPersons();
    }


    @GetMapping("/{id}")
    public Person getPersonById(@PathVariable Integer id) {

        return personService.getPersonById(id) ;
    }



    @PostMapping("/create")
    public Person createPerson(@RequestBody Person person) {
        personService.savePerson(person);
        return person;

    }

    @PostMapping("/add")
    public Long incrementSalary(@RequestBody Long salary) {

        return salary;

    }

    
    @DeleteMapping("/{id}")
    public void deletePerson(@PathVariable Integer id) {
        personService.deletePerson(id);
    }

}
