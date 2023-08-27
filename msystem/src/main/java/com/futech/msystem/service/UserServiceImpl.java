package com.futech.msystem.service;

import com.futech.msystem.model.User;
import com.futech.msystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User findUserToLogin(String emailDTO, String passwordDTO) {

        return  userRepository.findOneByEmailIgnoreCaseAndPassword(emailDTO,passwordDTO);
    }
}
