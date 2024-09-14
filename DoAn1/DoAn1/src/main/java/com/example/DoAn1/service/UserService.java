package com.example.DoAn1.service;

import java.io.IOException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.DoAn1.entities.User;
import com.example.DoAn1.exception.ExceptionCode;
import com.example.DoAn1.exception.ExceptionUser;
import com.example.DoAn1.mapper.UserMapper;
import com.example.DoAn1.repository.UserRepository;
import com.example.DoAn1.request.UserUpdatePasswordRequest;
import com.example.DoAn1.request.UserCompleteRequest;
import com.example.DoAn1.request.UserCreationRequest;
import com.example.DoAn1.response.ResponseCode;
import com.example.DoAn1.utils.UtilsHandleEmail;
import com.example.DoAn1.utils.UtilsHandleJwtToken;
import com.example.DoAn1.utils.UtilsHandlePassword;
import com.example.DoAn1.utils.UtilsUserService;
import com.google.gson.Gson;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Service
public class UserService {
    @Autowired
    private UtilsUserService utilsUserService;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private UtilsHandleJwtToken utilsHandleJwtToken;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UtilsHandleEmail utilsHandleEmail;

    @Autowired
    private UtilsHandlePassword utilsHandlePassword;

    @Value("${role.userrole}")
    private String userRole;

    public ResponseEntity<Map<String, Object>> signUp(UserCreationRequest userCreationRequest,
            HttpServletResponse httpServletResponse) {
        boolean checkEmailExist = this.utilsUserService.checkUserExist(userCreationRequest.getEmail());
        User user = this.userMapper.convertRequestUserToUser(userCreationRequest, this.userRole);
        user = this.userRepository.save(user);

        String jwtToken = this.utilsHandleJwtToken.createToken(user);
        this.utilsUserService.sendJwtToClient(jwtToken, httpServletResponse);

        return ResponseEntity.ok().body(ResponseCode.jsonOfResponseCode(ResponseCode.CreateAccountSuccessfully));
    }

    public ResponseEntity<Map<String, Object>> completeAccount(UserCompleteRequest userCompleteRequest,
            HttpServletRequest httpServletRequest) {

        String token = this.utilsUserService.getCookie(httpServletRequest, "jwtToken");
        User user = this.utilsUserService.getUserFromToken(token);
        user = this.userMapper.mapperUserCompleteRequest(user, userCompleteRequest);
        this.userRepository.save(user);
        return ResponseEntity.ok().body(ResponseCode.jsonOfResponseCode(ResponseCode.CompleteAccountSuccessfully));
    }

    public ResponseEntity<Map<String, Object>> sendCode(String emailRecipient) {

        User user = this.userRepository.getUserByEmail(emailRecipient);

        if (user == null) {
            throw new ExceptionUser(ExceptionCode.EmailIsNotExits);
        } else {
            utilsHandleEmail.setRecipient(emailRecipient);
            utilsHandleEmail.setSubject("CONFIRM TO CHANGE YOUR PASSWORD");
            String code = utilsHandleEmail.createRandom();
            utilsHandleEmail.setMsgBody(utilsHandleEmail.createBodySendEmail(code));

            user.setCode(code);
            userRepository.save(user);

            utilsHandleEmail.sendHtmlEmail();
            return ResponseEntity.ok().body(ResponseCode.jsonOfResponseCode(ResponseCode.SendEmailSuccessfully));
        }
    }

    public ResponseEntity<Map<String, Object>> updatePassword(UserUpdatePasswordRequest userUpdatePasswordRequest) {
        User user = this.userRepository.getUserByEmail(userUpdatePasswordRequest.getEmail());

        // check code
        if (user.getCode().equals(userUpdatePasswordRequest.getCode())) {
            String encryptedPassword = utilsHandlePassword.encryptPassword(userUpdatePasswordRequest.getPassword());
            user.setPassword(encryptedPassword);
            this.userRepository.save(user);
            return ResponseEntity.ok().body(ResponseCode.jsonOfResponseCode(ResponseCode.UpdatePasswordSuccessfully));
        } else {
            throw new ExceptionUser(ExceptionCode.CodeWrong);
        }
    }

    public ResponseEntity<Map<String, Object>> login(String password, String email,
            HttpServletResponse httpServletResponse) {
        User user = this.userRepository.getUserByEmail(email);
        if (user == null) {
            throw new ExceptionUser(ExceptionCode.EmailIsNotExits);
        }

        if (this.utilsHandlePassword.checkPassword(password, user.getPassword()) == 1) {
            String token = this.utilsHandleJwtToken.createToken(user);
            this.utilsUserService.setCookie("jwtToken", token, httpServletResponse);
            return ResponseEntity.ok().body(ResponseCode.jsonOfResponseCode(ResponseCode.LoginSuccessfully));
        } else {
            throw new ExceptionUser(ExceptionCode.PasswordWrong);
        }
    }
}
