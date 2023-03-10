package com.talan.services;

import com.talan.entities.Person;
import com.talan.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

/**
 * Person service implement.
 */
@Service
public class PersonServiceImpl implements PersonService {
     @Autowired
     private PersonRepository personRepository;

    

    @Override
    public Collection<Person> listAllPersons() {
        return personRepository.findAll();
    }

    @Override
    public Person getPersonById(Integer id) {
        return personRepository.findById(id).get();
    }

    @Override
    public Person savePerson(Person person) {
        return personRepository.saveAndFlush(person);
    }

    @Override
    public void deletePerson(Integer id) {
        personRepository.deleteById(id);
    }

}
