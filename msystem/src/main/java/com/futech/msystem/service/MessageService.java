package com.futech.msystem.service;

import com.futech.msystem.model.SystemMessage;

import java.util.List;

public interface MessageService {
    public SystemMessage saveMSG(SystemMessage msg);
    public List<SystemMessage> getAllMSG();

}
