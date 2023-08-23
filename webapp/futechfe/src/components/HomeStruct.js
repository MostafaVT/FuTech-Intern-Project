import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PublishMessage from "./PublishMessage";

export default function HomeStruct() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <PublishMessage></PublishMessage>
          </Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </div>
  );
}
