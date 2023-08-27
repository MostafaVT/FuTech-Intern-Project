package com.futech.msystem.controller;

import com.futech.msystem.dto.LoginRequest;
import com.futech.msystem.model.User;
import com.futech.msystem.service.AuthenticationService;
import com.futech.msystem.service.AuthenticationServiceImpl;
import com.futech.msystem.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class UserController {
    @Autowired
    private UserServiceImpl userServiceImpl;
    @Autowired
    private AuthenticationServiceImpl authenticationServiceImpl;
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        try {
            userServiceImpl.saveUser(user);
            return new ResponseEntity<>("registered.", HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginRequest loginRequest){

        return authenticationServiceImpl.authentiacte(loginRequest);
    }
}
