package com.futech.msystem.service;

import com.futech.msystem.model.SystemMessage;
import com.futech.msystem.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class MessageServiceImpl implements MessageService {
    @Autowired
    private MessageRepository messageRepository;
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
        SystemMessage systemMessageALT = messageRepository.findById(id).get();
        systemMessageALT.setACKTimeStamp(new Date());
        systemMessageALT.setACK(true);
        return messageRepository.save(systemMessageALT);
    }

    public SystemMessage setAction(int id) {
        SystemMessage systemMessageALT = messageRepository.findById(id).get();
        systemMessageALT.setActionTimeStamp(new Date());
        systemMessageALT.setAction(true);
        return messageRepository.save(systemMessageALT);
    }
}
