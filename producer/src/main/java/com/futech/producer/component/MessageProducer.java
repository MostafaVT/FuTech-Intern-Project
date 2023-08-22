package com.futech.producer.component;

import com.futech.producer.model.SystemMessage;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Component;


@Component
@Slf4j
public class MessageProducer {
    @Autowired
    private JmsTemplate jmsTemplate;
    public void sendTo(String destination, SystemMessage systemMessage) {
        jmsTemplate.convertAndSend(destination, systemMessage);
        System.out.println("Producer> Message Sent");
    }
}