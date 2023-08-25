package com.futech.msystem.controller;

import com.futech.msystem.model.SystemMessage;
import com.futech.msystem.model.User;
import com.futech.msystem.service.MessageServiceImpl;
import com.futech.msystem.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ConsumerController {
    @Autowired
    private MessageServiceImpl messageServiceImpl;
    @Autowired
    private UserServiceImpl userServiceImpl;

    @GetMapping("/getAll")
    public List<SystemMessage> getSavedMessages() {
        return messageServiceImpl.getAllMSG();
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        try {
            userServiceImpl.saveUser(user);
            return new ResponseEntity<>("registered.", HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}