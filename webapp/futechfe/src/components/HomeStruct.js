import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PublishMessage from "./PublishMessage";
import ScrollspyACK from "./ScrollspyACK";
import ActionTab from "./ActionTab";

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
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </div>
  );
}
