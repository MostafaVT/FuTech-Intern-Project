package com.futech.msystem.repository;

import com.futech.msystem.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    User findOneByEmailIgnoreCaseAndPassword(String email,String password);
}
