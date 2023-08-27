package com.futech.msystem.service;

import com.futech.msystem.model.ProducerProfile;
import com.futech.msystem.repository.ProducerProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProducerProfileServiceImpl implements ProducerProfileService{
    @Autowired
    private ProducerProfileRepository producerProfileRepository;
    @Override
    public ProducerProfile saveProducerProfile(ProducerProfile producerProfile) {
        return producerProfileRepository.save(producerProfile);
    }
}
