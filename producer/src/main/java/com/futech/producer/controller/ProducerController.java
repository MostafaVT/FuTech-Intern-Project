package com.futech.producer.controller;

import com.futech.producer.component.MessageProducer;
import com.futech.producer.config.MQTTConfig;
import com.futech.producer.dto.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/jms")
@RestController
@CrossOrigin
public class ProducerController {

    @Autowired
    private MessageProducer messageProducer;

    @PostMapping("/publishMessage")
    public ResponseEntity<String> publishMessage(@RequestBody Message message) {
        try {
            messageProducer.sendTo("test", message);
            return new ResponseEntity<>("Sent.", HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}