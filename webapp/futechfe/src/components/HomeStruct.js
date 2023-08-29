import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PublishMessage from "./PublishMessage";
import ScrollspyACK from "./ScrollspyACK";
import ActionTab from "./ActionTab";
import ProducerProfile from "./ProducerProfileTab";
import MapTap from "./MapTap";
import { mapOptions } from "./MapConfig";
import { useJsApiLoader } from "@react-google-maps/api";

export default function HomeStruct() {
  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey,
  });
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <PublishMessage></PublishMessage>
          </Col>
          <Col>
            <ScrollspyACK></ScrollspyACK>
          </Col>
          <Col>
            <ActionTab></ActionTab>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProducerProfile></ProducerProfile>
          </Col>
          <Col>
            <MapTap isLoaded={isLoaded}></MapTap>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
