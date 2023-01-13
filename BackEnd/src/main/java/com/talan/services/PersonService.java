package com.talan.services;

import com.talan.entities.Person;

import java.util.Collection;

public interface PersonService {

    Collection<Person> listAllPersons();

    Person getPersonById(Integer id);

    Person savePerson(Person person);

    void deletePerson(Integer id);

}
