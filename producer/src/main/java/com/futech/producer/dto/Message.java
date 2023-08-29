package com.futech.producer.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Message {
    private String source;
    private String content;

    public Message(){}
}
