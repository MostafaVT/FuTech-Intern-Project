package com.futech.msystem.component;

import com.futech.msystem.model.SystemMessage;
import com.futech.msystem.service.MessageService;
import com.futech.msystem.service.MessageServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Component;

@Component
public class MessageConsumer {
    @Autowired
    private JmsTemplate jmsTemplate;
    @Autowired
    private MessageServiceImpl messageServiceImpl;
    private static final Logger LOGGER = LoggerFactory.getLogger(MessageConsumer.class);

    @JmsListener(destination = "test", containerFactory = "jmsFactory")
    public void messageListener(SystemMessage systemMessage) {
        LOGGER.info("Message received! {}", systemMessage);
        messageServiceImpl.saveMSG(systemMessage);

    }
}