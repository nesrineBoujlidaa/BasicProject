package com.talan.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * Person entity.
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @JsonProperty("name")
    @Column(name ="name")
    private String name;

    @Column(name ="email")
    private String email;

    @Column(name ="age")
    private String age;

    @Column(name ="phone")
    private String phone;
    private String salary;
    private String address;
    }


