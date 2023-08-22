package com.futech.msystem.repository;

import com.futech.msystem.model.SystemMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends JpaRepository<SystemMessage,Integer> {

}
