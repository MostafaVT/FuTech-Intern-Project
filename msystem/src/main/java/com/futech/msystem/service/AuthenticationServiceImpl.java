package com.futech.msystem.service;

import com.futech.msystem.dto.LoginRequest;
import com.futech.msystem.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    @Autowired
    private UserServiceImpl userServiceImpl;

    @Override
    public ResponseEntity<String> authentiacte(LoginRequest loginRequest) {

        User user = userServiceImpl.findUserToLogin(loginRequest.getEmail(),loginRequest.getPassword());

        if(user==null){
            return new ResponseEntity<>("Login Problem", HttpStatus.INTERNAL_SERVER_ERROR);
        }else{
            return new ResponseEntity<>("Logged in", HttpStatus.OK);
        }


    }
}
