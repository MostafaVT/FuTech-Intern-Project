package com.futech.producer.controller;

import com.futech.producer.config.MQTTConfig;
import com.futech.producer.dto.MQTTMessage;
import com.futech.producer.dto.MQTTMessagePayload;
import com.futech.producer.exceptions.ExceptionMessages;
import com.futech.producer.exceptions.MqttException;
import jakarta.validation.Valid;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;

@RestController
@RequestMapping("/mqtt")
public class MqttController {

    @PostMapping("/publish")
    public void publishMessage(@RequestBody @Valid MQTTMessage message,
                               BindingResult bindingResult) throws org.eclipse.paho.client.mqttv3.MqttException {
        if (bindingResult.hasErrors()) {
            throw new MqttException(ExceptionMessages.SOME_PARAMETERS_INVALID);
        }

        MqttMessage mqttMessage =
                new MqttMessage(message.getMessage()
                        .payloadFormater(message.getMessage().getMqttAttribute1(),
                                message.getMessage().getMqttAttribute2()).getBytes());

        System.out.println(message.getMessage().toString());

        mqttMessage.setQos(message.getQos());
        mqttMessage.setRetained(message.getRetained());

        MQTTConfig.getInstance().publish(message.getTopic(), mqttMessage);
    }

    @GetMapping("/subscribe")
    public List<MQTTMessage> subscribeChannel(@RequestParam(value = "topic") String topic,
                                                     @RequestParam(value = "wait_millis") Integer waitMillis)
            throws InterruptedException, org.eclipse.paho.client.mqttv3.MqttException {
        List<MQTTMessage> messages = new ArrayList<>();
        CountDownLatch countDownLatch = new CountDownLatch(10);
        MQTTConfig.getInstance().subscribeWithResponse(topic, (s, mqttMessage) -> {
            MQTTMessage mqttMessageALT = new MQTTMessage();
            mqttMessageALT.setId(mqttMessage.getId());
           // mqttMessageALT.setMessage(new String(mqttMessage.getPayload()));
            mqttMessageALT.setQos(mqttMessage.getQos());
            messages.add(mqttMessageALT);
            countDownLatch.countDown();
        });

        countDownLatch.await(waitMillis, TimeUnit.MILLISECONDS);

        return messages;
    }


}