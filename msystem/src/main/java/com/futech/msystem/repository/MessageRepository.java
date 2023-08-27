package com.futech.msystem.repository;

import com.futech.msystem.model.SystemMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<SystemMessage,Integer> {
    List<SystemMessage> findByIsACK(boolean isACK);
    List<SystemMessage> findByIsAction(boolean isAction);
}
