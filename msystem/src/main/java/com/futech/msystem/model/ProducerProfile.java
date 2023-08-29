package com.futech.msystem.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.net.InetAddress;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ToString
@Entity
public class ProducerProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private InetAddress IP;
    private String location;//url-map
    private String currentBrokerConnection;

    public ProducerProfile(){}

}
