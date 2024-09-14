package com.example.DoAn1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @PostMapping("/test")
    public ResponseEntity test() {

        utilsHandleEmail.setRecipient("22520001@gm.uit.edu.vn");
        utilsHandleEmail.setSubject("ASDFASDFASD");
        String code = utilsHandleEmail.createRandom();
        utilsHandleEmail.setMsgBody(utilsHandleEmail.createBodySendEmail(code));
        utilsHandleEmail.sendHtmlEmail();
        return null;
    }

    @PostMapping("/testAuthorization")
    public String abc() {
        System.out.println("nguyentandung");
        return "nguyentandung";
    }
}
