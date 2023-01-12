package com.talan.repositories;

import com.talan.entities.Person;
import org.springframework.data.jpa.repository.*;

public interface PersonRepository extends JpaRepository<Person, Integer> {

}
