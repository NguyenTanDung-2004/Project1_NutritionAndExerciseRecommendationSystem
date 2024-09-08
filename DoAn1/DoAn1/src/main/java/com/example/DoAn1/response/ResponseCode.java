package com.example.DoAn1.response;

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public enum ResponseCode {

    CreateAccountSuccessfully(1000, "create account successfully!");

    private int code;
    private String message;

    public static Map<String, Object> jsonOfResponseCode(ResponseCode responseCode) {
        Map map = new HashMap<>();
        map.put("code", responseCode.getCode());
        map.put("message", responseCode.getMessage());
        return map;
    }

}
