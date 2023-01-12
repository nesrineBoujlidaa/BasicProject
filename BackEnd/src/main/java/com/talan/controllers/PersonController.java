package com.talan.controllers;

import com.talan.entities.Person;
import com.talan.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;



@RestController("/Persons")
public class PersonController {
     @Autowired
     private PersonService PersonService;

   


   @GetMapping("/")
    public String list(Model model) {
        model.addAttribute("Persons", PersonService.listAllPersons());
        System.out.println("Returning Persons:");
        return "Persons";
    }


    @GetMapping("/{id}")
    public String showPerson(@PathVariable Integer id, Model model) {
        model.addAttribute("Person", PersonService.getPersonById(id));
        return "Personshow";
    }

    // Afficher le formulaire de modification du Person
    @PutMapping("/edit/{id}")
    public String edit(@PathVariable Integer id, Model model) {
        model.addAttribute("Person", PersonService.getPersonById(id));
        return "Personform";
    }


    @RequestMapping("Person/new")
    public String newPerson(Model model) {
        model.addAttribute("Person", new Person());
        return "Personform";
    }


    @RequestMapping(value = "Person", method = RequestMethod.POST)
    public String savePerson(Person person) {
        PersonService.savePerson(person);
        return "redirect:/Person/" + person.getId();
    }

    
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id) {
        PersonService.deletePerson(id);
        return "redirect:/Persons";
    }

}
