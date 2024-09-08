package com.example.DoAn1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.DoAn1.entities.User;

public interface UserRepository extends JpaRepository<User, String> {
    @Query("select u from User u where u.email = :email")
    public User getUserByEmail(String email);
}
