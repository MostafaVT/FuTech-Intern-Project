package com.futech.msystem.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;
import java.util.Date;

@Getter
@Setter
@ToString
@Entity
public class SystemMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String source;
    private String content;
    //private String mapURL;
    @Temporal(TemporalType.TIMESTAMP)
    private Date sentTimeStamp;
    @OneToOne(cascade = CascadeType.ALL)
    private User ACKUser;
    private boolean isACK;
    private boolean isAction;

    public SystemMessage(){}

}
