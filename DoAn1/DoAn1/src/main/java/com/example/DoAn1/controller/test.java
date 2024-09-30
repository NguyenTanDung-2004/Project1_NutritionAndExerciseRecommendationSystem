package com.example.DoAn1.controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.DoAn1.entities.Food;
import com.example.DoAn1.repository.FoodRepository;
import com.example.DoAn1.service.UserService;
import com.example.DoAn1.utils.UtilsHandleEmail;
import com.example.DoAn1.utils.UtilsHandleJwtToken;

@RestController
@RequestMapping("/test")
public class test {
    @Autowired
    private UtilsHandleJwtToken utilsHandleJwtToken;

    @Autowired
    private UserService userService;

    @Autowired
    private UtilsHandleEmail utilsHandleEmail;

    @Autowired
    private FoodRepository foodRepository;

    @PostMapping("/test")
    public ResponseEntity test() {
        System.out.println("nguyentandung");
        // List<Food> list = this.foodRepository.findAll();
        return ResponseEntity.ok().body("nguyentandung");
    }

    @PostMapping("/testAuthorization")
    public String abc() {
        System.out.println("nguyentandung");
        return "nguyentandung";
    }

}
