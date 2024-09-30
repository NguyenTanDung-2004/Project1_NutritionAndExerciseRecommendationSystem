package com.example.DoAn1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.DoAn1.entities.Food;

public interface FoodRepository extends JpaRepository<Food, String> {

}
