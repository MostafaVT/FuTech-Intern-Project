package com.futech.msystem.service;

import com.futech.msystem.model.ACKMessage;
import com.futech.msystem.model.ActionMessage;
import com.futech.msystem.model.SystemMessage;
import com.futech.msystem.repository.ACKMessageRepository;
import com.futech.msystem.repository.ActionMessageRepository;
import com.futech.msystem.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class MessageServiceImpl implements MessageService {
    @Autowired
    private MessageRepository messageRepository;
    @Autowired
    private ACKMessageRepository ackMessageRepository;
    @Autowired
    private ActionMessageRepository actionMessageRepository;
    @Override
    public SystemMessage saveMSG(SystemMessage msg) {
        msg.setACK(false);
        msg.setAction(false);
        return messageRepository.save(msg);
    }

    @Override
    public List<SystemMessage> getAllMSG() {
        return messageRepository.findAll();
    }

    @Override
    public List<SystemMessage> getACKMSG() {
        return messageRepository.findByIsACK(true);
    }

    @Override
    public List<SystemMessage> getActionMSG() {
        return messageRepository.findByIsAction(true);
    }

    public SystemMessage getMSG(int id) {
        return messageRepository.findById(id).get();
    }

    public SystemMessage setACK(int id) {
        SystemMessage systemMessage = messageRepository.findById(id).get();

        ACKMessage ackMessage = new ACKMessage();
        ackMessage.setACKTimeStamp(new Date());
        ackMessage.setSystemMessage(systemMessage);
        ackMessageRepository.save(ackMessage);

        systemMessage.setACK(true);
        return messageRepository.save(systemMessage);
    }

    public SystemMessage setAction(int id) {
        SystemMessage systemMessage = messageRepository.findById(id).get();

        ActionMessage actionMessage = new ActionMessage();
        actionMessage.setActionTimeStamp(new Date());
        actionMessage.setSystemMessage(systemMessage);
        actionMessageRepository.save(actionMessage);

        systemMessage.setAction(true);
        return messageRepository.save(systemMessage);
    }
}
