package com.futech.msystem.component;

import com.futech.msystem.model.SystemMessage;
import com.futech.msystem.service.MessageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Component;

@Component
public class MessageConsumer {
    //consumer Client info.{name-id-ip-SystemMessages}
    @Autowired
    private JmsTemplate jmsTemplate;
    @Autowired
    private MessageService messageService;
    private static final Logger LOGGER = LoggerFactory.getLogger(MessageConsumer.class);

    @JmsListener(destination = "test", containerFactory = "jmsFactory")
    public void messageListener(SystemMessage systemMessage) {
        LOGGER.info("Message received! {}", systemMessage);
        messageService.saveMSG(systemMessage);
    }
}