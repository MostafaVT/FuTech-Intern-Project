package com.futech.msystem.service;

import com.futech.msystem.model.User;

public interface UserService {
    public User saveUser(User user);
    public User findUserToLogin(String emailDTO,String passwordDTO);
}
