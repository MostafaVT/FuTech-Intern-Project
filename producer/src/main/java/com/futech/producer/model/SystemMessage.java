package com.futech.producer.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class SystemMessage {
    @JsonIgnore
    private int id;
    private String source;
    private String message;

    public SystemMessage() {
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "SystemMessage{" +
                "source='" + source + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
}
