package com.example.DoAn1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.DoAn1.request.FoodCreationRequest;
import com.example.DoAn1.service.FoodService;

@RestController
@RequestMapping("/food")
public class FoodController {
    @Autowired
    private FoodService foodService;

    @PostMapping("/createFood")
    public ResponseEntity createFood(@RequestBody FoodCreationRequest foodCreationRequest) {
        return this.foodService.createFood(foodCreationRequest);
    }
}
