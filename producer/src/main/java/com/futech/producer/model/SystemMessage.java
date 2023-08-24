package com.futech.producer.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class SystemMessage {
    @JsonIgnore
    private int id;
    private String source;
    private String content;
    private Date sentTimeStamp;
    private Date ACKTimeStamp;
    private boolean inAction;
}
