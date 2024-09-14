package com.example.DoAn1.entities;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "[user]")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String userId;
    private String role;
    private String email;
    private String firstName;
    private String lastName;
    private String gentle;
    private Date dob;
    private String password;
    private float height;
    private float weight;
    private float bloodPressure;
    private float hearBeat;
    private float bloodSugar;
    //
    private float bloodPressure1;
    private float bloodSugar1;
    //
    private String code; // code to reset email.
}
