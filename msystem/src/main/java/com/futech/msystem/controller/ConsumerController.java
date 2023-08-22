package com.futech.msystem.controller;

import com.futech.msystem.model.SystemMessage;
import com.futech.msystem.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class ConsumerController {
    @Autowired
    MessageService messageService;
    @GetMapping("/getAll")
    public List<SystemMessage> getSavedMessages() {
        return messageService.getAllMSG();
    }
}