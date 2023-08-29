package com.futech.producer.component;

import com.futech.producer.dto.Message;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class MessageProducer {
    @Autowired
    private JmsTemplate jmsTemplate;


    public void sendTo(String destination, Message message) {

        try{
            log.info("Attempting Send message to Topic: "+ destination);
            jmsTemplate.convertAndSend(destination, message);
        } catch(Exception e){
            log.error("Recieved Exception during send Message: ", e);
        }
    }

}