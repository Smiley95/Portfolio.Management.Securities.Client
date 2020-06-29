import Page from "../layout/Page";
import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Row, Button } from "reactstrap";
import { MDBDataTable } from "mdbreact";
import { assets } from "../demos/assetData";
import NumberWidget from "./NumberWidget";

const Portfolio = () => {
  const history = useHistory();
  const redirectToTarget = () => {
    history.push("/addAsset");
  };
  return (
    <>
      <Page
        title="Portfolio label"
        breadcrumbs={[{ name: "portfolio label", active: true }]}
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
              <CardHeader>Portfolio label</CardHeader>
              <CardBody>
                <Row
                  style={{
                    "justify-content": "flex-end",
                  }}
                >
                  <Button onClick={redirectToTarget}>Add asset</Button>
                </Row>
                <MDBDataTable striped bordered large responsive data={assets} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    </>
  );
};

export default Portfolio;
