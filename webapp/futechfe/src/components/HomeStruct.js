import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PublishMessage from "./PublishMessage";
import ScrollspyACK from "./ScrollspyACK";
import ActionTab from "./ActionTab";
import ProducerProfile from "./ProducerProfileTab";
import MapTap from "./MapTap";

export default function HomeStruct() {
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
            <MapTap></MapTap>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
