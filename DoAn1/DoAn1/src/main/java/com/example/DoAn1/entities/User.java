package com.example.DoAn1.entities;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.HashSet;

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

    // relationship n - n with food
    @ManyToMany
    @JoinTable(name = "user_like_food", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "food_id"))
    private java.util.Set<Food> likedFoods = new HashSet<>();
}
