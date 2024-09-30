package com.example.DoAn1.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.DoAn1.entities.Food;
import com.example.DoAn1.mapper.FoodMapper;
import com.example.DoAn1.repository.FoodRepository;
import com.example.DoAn1.request.FoodCreationRequest;
import com.example.DoAn1.response.ResponseCode;

@Service
public class FoodService {
    @Autowired
    private FoodMapper foodMapper;
    @Autowired
    private FoodRepository foodRepository;

    public ResponseEntity<Map<String, Object>> createFood(FoodCreationRequest foodCreationRequest) {

        Food food = this.foodMapper.convertRequest(foodCreationRequest);
        this.foodRepository.save(food);
        return ResponseEntity.ok().body(ResponseCode.jsonOfResponseCode(ResponseCode.CreateFoodSuccessfully));
    }
}
