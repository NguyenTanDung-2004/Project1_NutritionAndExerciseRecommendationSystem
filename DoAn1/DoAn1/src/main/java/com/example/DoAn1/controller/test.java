package com.example.DoAn1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.DoAn1.request.UserCreationRequest;
import com.example.DoAn1.service.UserService;
import com.example.DoAn1.utils.UtilsHandleJwtToken;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/test")
public class test {
    @Autowired
    private UtilsHandleJwtToken utilsHandleJwtToken;

    @Autowired
    private UserService userService;

    @PostMapping("/test")
    public ResponseEntity test(@RequestBody UserCreationRequest userCreationRequest,
            HttpServletResponse httpServletResponse) {

        // System.out.println("nguyentandung");
        // return null;
        return userService.signUp(userCreationRequest, httpServletResponse);
    }

    @PostMapping("/testAuthorization")
    public String abc() {
        System.out.println("nguyentandung");
        return "nguyentandung";
    }
}
