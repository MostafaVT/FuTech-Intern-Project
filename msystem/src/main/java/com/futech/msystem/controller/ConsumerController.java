//package com.futech.msystem.controller;
//
//import com.futech.msystem.model.SystemMessage;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.jms.core.JmsTemplate;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@CrossOrigin
//public class ConsumerController {
//
//    @Autowired
//    private JmsTemplate jmsTemplate;
//
////    @GetMapping("/consumeMessage")
////    public ResponseEntity<String> consumeMessage() {
////        try {
////            SystemMessage sysM = (SystemMessage) jmsTemplate.receiveAndConvert("test");
////            System.out.println(sysM);
////            return new ResponseEntity<>("received.", HttpStatus.OK);
////
////        } catch (Exception e) {
////            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
////        }
////    }
//
//}