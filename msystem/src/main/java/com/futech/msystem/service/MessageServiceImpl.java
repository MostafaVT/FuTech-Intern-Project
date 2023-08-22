package com.futech.msystem.service;

import com.futech.msystem.model.SystemMessage;
import com.futech.msystem.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private MessageRepository messageRepository;
    @Override
    public SystemMessage saveMSG(SystemMessage msg) {
        return messageRepository.save(msg);
    }
}
