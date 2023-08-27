package com.futech.producer.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.net.InetAddress;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ToString
public class ProducerProfile {
    @JsonIgnore
    private int id;
    private String name;
    private InetAddress IP;
    private String location;
    private String currentBrokerConnection;
}
