package com.example.DoAn1.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.DoAn1.repository.FoodRepository;

@Component
public class UtilsFoodService {
    @Autowired
    private FoodRepository foodRepository;

    public void createFood() {

    }
}
