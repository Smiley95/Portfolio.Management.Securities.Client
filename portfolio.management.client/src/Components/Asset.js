import React from "react";
import Page from "../layout/Page";
import NumberWidget from "./NumberWidget";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Button,
  Media,
} from "reactstrap";

const Asset = () => {
  return (
    <Page
      title="ticker"
      breadcrumbs={[{ name: "ticker", active: true }]}
      className="TablePage"
    >
      <Row>
        <Col lg={3} md={6} sm={6} xs={12}>
          <NumberWidget
            title="Nb assets"
            subtitle="Total"
            number="9.8k"
            color="secondary"
          />
        </Col>

        <Col lg={3} md={6} sm={6} xs={12}>
          <NumberWidget
            title="highest return"
            subtitle="ticker"
            number="0.54"
            color="secondary"
          />
        </Col>

        <Col lg={3} md={6} sm={6} xs={12}>
          <NumberWidget
            title="highest risk"
            subtitle="ticker"
            number="0.003"
            color="secondary"
          />
        </Col>

        <Col lg={3} md={6} sm={6} xs={12}>
          <NumberWidget
            title="sectors"
            subtitle="diversity"
            number="3"
            color="secondary"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>
              <Media left href="#">
                <Media
                  object
                  data-src="holder.js/64x64"
                  alt="Generic placeholder image"
                />
              </Media>
              Asset ticker
            </CardHeader>
            <CardBody>
              <Row></Row>
              <Row
                style={{
                  "justify-content": "flex-end",
                }}
              >
                <Button>Buy</Button>
                {"  "}
                <Button color="secondary">Sell</Button>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};
export default Asset;
