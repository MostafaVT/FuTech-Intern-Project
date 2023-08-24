package com.futech.msystem.repository;

import com.futech.msystem.model.ProducerProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProducerProfileRepository extends JpaRepository<ProducerProfile,Integer> {

}
