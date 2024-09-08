package com.example.DoAn1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.DoAn1.request.UserCreationRequest;
import com.example.DoAn1.response.ResponseCode;
import com.example.DoAn1.service.UserService;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/SignUp")
    public ResponseEntity signUp(@RequestBody UserCreationRequest userCreationRequest,
            HttpServletResponse httpServletResponse) {
        return userService.signUp(userCreationRequest, httpServletResponse);
    }
}
