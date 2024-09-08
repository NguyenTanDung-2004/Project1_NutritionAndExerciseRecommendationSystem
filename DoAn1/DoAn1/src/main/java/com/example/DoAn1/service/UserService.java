package com.example.DoAn1.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.DoAn1.entities.User;
import com.example.DoAn1.mapper.UserMapper;
import com.example.DoAn1.repository.UserRepository;
import com.example.DoAn1.request.UserCreationRequest;
import com.example.DoAn1.response.ResponseCode;
import com.example.DoAn1.utils.UtilsHandleJwtToken;
import com.example.DoAn1.utils.UtilsUserService;
import com.google.gson.Gson;

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
}
