package com.example.DoAn1.mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.DoAn1.entities.User;
import com.example.DoAn1.request.UserCompleteRequest;
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

    public User mapperUserCompleteRequest(User user, UserCompleteRequest userCompleteRequest) {
        user.setHeight(userCompleteRequest.getHeight());
        user.setWeight(userCompleteRequest.getWeight());
        user.setBloodPressure(userCompleteRequest.getBloodPressureRange());
        user.setBloodSugar(userCompleteRequest.getBloodGlucoseRange());
        user.setHearBeat(userCompleteRequest.getHeartRateRange());
        user.setBloodPressure1(userCompleteRequest.getBloodPressureRange1());
        user.setBloodSugar1(userCompleteRequest.getBloodGlucoseRange1());
        return user;
    }

}
