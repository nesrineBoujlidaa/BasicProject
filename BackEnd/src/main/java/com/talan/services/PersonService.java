package com.talan.services;

import com.talan.entities.Person;

public interface PersonService {

    Iterable<Person> listAllPersons();

    Person getPersonById(Integer id);

    Person savePerson(Person person);

    void deletePerson(Integer id);

}
