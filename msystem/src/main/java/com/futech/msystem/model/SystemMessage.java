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
    @JsonIgnore
    private int id;
    private String source;
    private String content;
    @Temporal(TemporalType.TIMESTAMP)
    private Date sentTimeStamp;
    private Date ACKTimeStamp;
    @OneToOne(cascade = CascadeType.ALL)
    private User ACKUser;
    private boolean isACK;
    private boolean isAction;
    @ManyToOne
    @JoinColumn(name="producerProfile_id", nullable=false)
    private ProducerProfile producerProfile;

    public SystemMessage(){}

}
