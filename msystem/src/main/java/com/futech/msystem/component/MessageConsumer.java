package com.futech.msystem.component;

import com.futech.msystem.config.JmsConfig;
import com.futech.msystem.model.SystemMessage;
import com.futech.msystem.service.MessageServiceImpl;
import jakarta.jms.*;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class MessageConsumer {

    @Autowired
    private JmsTemplate jmsTemplate;
    @Autowired
    private MessageServiceImpl messageServiceImpl;
    @Autowired
    private ConnectionFactory connectionFactory;

    private static final Logger LOGGER = LoggerFactory.getLogger(MessageConsumer.class);

//
//    public void messageListener(SystemMessage systemMessage) throws JMSException {
//
//        LOGGER.info(connectionFactory.createConnection().getClientID());
//
//        LOGGER.info("Message received! {}", systemMessage);
//        messageServiceImpl.saveMSG(systemMessage);
//
//    }

    @JmsListener(destination = "test", containerFactory = "jmsListenerContainerFactory")
    public void onMessage(SystemMessage systemMessage) {

        log.info("Received Message: "+ systemMessage.toString());
        messageServiceImpl.saveMSG(systemMessage);

    }
}
