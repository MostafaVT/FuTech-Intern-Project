package com.futech.producer.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.eclipse.paho.client.mqttv3.MqttMessage;

@Getter
@Setter
@ToString
public class MQTTMessagePayload {

    private String mqttAttribute1;
    private String mqttAttribute2;

    public String payloadFormater(String mqttAttribute1, String mqttAttribute2) {
//        return "{\"message\": {\"mqttAttribute2\":\""+ mqttAttribute1 + ",\"mqttAttribute2\":\"" + mqttAttribute2 + "\"}}";
        return "{\"mqttAttribute1\":\""+ mqttAttribute1 + "\",\"mqttAttribute2\":\"" + mqttAttribute2 + "\"}";
    }
}

