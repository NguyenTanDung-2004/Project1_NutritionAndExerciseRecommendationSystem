package com.example.DoAn1.mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.DoAn1.entities.User;
import com.example.DoAn1.request.UserCreationRequest;
import com.example.DoAn1.utils.UtilsHandlePassword;

@Component
public class UserMapper {

    @Autowired
    private UtilsHandlePassword utilsHandlePassword;

    public User convertRequestUserToUser(UserCreationRequest userCreationRequest, String role) {
        User user = User.builder()
                .userId(userCreationRequest.getEmail())
                .role(role)
                .email(userCreationRequest.getEmail())
                .firstName(userCreationRequest.getFirstName())
                .lastName(userCreationRequest.getLastName())
                .gentle(userCreationRequest.getGentle())
                .dob(userCreationRequest.getDob())
                .password(utilsHandlePassword.encryptPassword(userCreationRequest.getPassword()))
                .build();
        return user;
    }

}
