package com.futech.msystem.service;

import com.futech.msystem.dto.LoginRequest;
import org.springframework.http.ResponseEntity;

public interface AuthenticationService {
    public ResponseEntity<String> authentiacte(LoginRequest loginRequest);
}
