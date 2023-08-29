package com.futech.msystem.repository;

import com.futech.msystem.model.ACKMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ACKMessageRepository extends JpaRepository<ACKMessage,Integer> {
}
