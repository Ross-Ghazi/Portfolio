import { Container, Row, Col, Image } from "react-bootstrap";

import APIGateway from "react-aws-icons/dist/aws/logo/APIGateway";
import LambdaFunction from "react-aws-icons/dist/aws/compute/LambdaFunction";
import DynamoDB from "react-aws-icons/dist/aws/logo/DynamoDB";
import EC2 from "react-aws-icons/dist/aws/logo/EC2";
import S3 from "react-aws-icons/dist/aws/logo/S3";
import SNS from "react-aws-icons/dist/aws/logo/SNS";
import SQS from "react-aws-icons/dist/aws/logo/SQS";
import Route53 from "react-aws-icons/dist/aws/logo/Route53";
import Appsync from "./aws-appsync-logo.png";

export const AWS = () => {
  return (
    <>
      <section data-aos="fade-up" className="aws  container  ">
        <div className=" width2 ">
          <div className=" container">
            <i class="fas fa-cloud fa-2x"></i>
            <div></div>
          </div>
          <div className="text  ">
            <div className="title">Cloud -AWS</div>
            <Container fluid>
              <Row className="height1">
                <Col className="height3rem" sm={12} md={4}>
                  {" "}
                  <LambdaFunction size={48} />
                  Lambda
                </Col>
                <Col className="height3rem" sm={12} md={4}>
                  <DynamoDB size={48} />
                  DynamoDB
                </Col>
                <Col className="height3rem" sm={12} md={4}>
                  <EC2 size={48} />
                  EC2
                </Col>
              </Row>
              <Row className="height1">
                <Col className="height3rem" sm={12} md={4}>
                  {" "}
                  <S3 size={48} />
                  S3
                </Col>
                <Col className="height3rem" sm={12} md={4}>
                  <APIGateway size={48} />
                  APIGateway{" "}
                </Col>
                <Col className="height3rem" sm={12} md={4}>
                  <Image className="imgeHeight" src={Appsync} />
                  Appsync
                </Col>
              </Row>
              <Row className="height1">
                <Col className="height3rem" md={4}>
                  <SNS size={48} />
                  SNS
                </Col>
                <Col className="height3rem" md={4}>
                  {" "}
                  <SQS size={48} />
                  SQS
                </Col>
                <Col className="height3rem" md={4}>
                  {" "}
                  <Route53 size={48} />
                  Route53
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
    </>
  );
};
