package com.futech.msystem.repository;

import com.futech.msystem.model.ActionMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActionMessageRepository extends JpaRepository<ActionMessage,Integer> {
}
