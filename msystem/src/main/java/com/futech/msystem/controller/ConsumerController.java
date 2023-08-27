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
@RequestMapping("/jms")
@RestController
@CrossOrigin
public class ConsumerController {
    @Autowired
    private MessageServiceImpl messageServiceImpl;

    @GetMapping("/getAll")
    public List<SystemMessage> getSavedMessages() {
        return messageServiceImpl.getAllMSG();
    }

    @GetMapping("/getACK")
    public List<SystemMessage> getACKMessages() {
        return messageServiceImpl.getACKMSG();
    }

    @GetMapping("/getAction")
    public List<SystemMessage> getActionMessages() {
        return messageServiceImpl.getActionMSG();
    }

    @GetMapping("/getMSG")
    public SystemMessage getActionMessages(@RequestParam int id) {
        return messageServiceImpl.getMSG(id);
    }

    @GetMapping("/setACK")
    public ResponseEntity<SystemMessage> setACKMessage(@RequestParam int id) {
        return new ResponseEntity<SystemMessage>(messageServiceImpl.setACK(id),HttpStatus.OK);
    }

    @GetMapping("/setAction")
    public ResponseEntity<SystemMessage> setActionMessage(@RequestParam int id) {
        return new ResponseEntity<SystemMessage>(messageServiceImpl.setAction(id),HttpStatus.OK);
    }




}