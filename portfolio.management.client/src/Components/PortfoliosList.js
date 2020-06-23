import Page from "../layout/Page";
import React from "react";
import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";
import { MDBDataTable } from "mdbreact";
import { Portfolios } from "../demos/Portfoliodata";
import NumberWidget from "./NumberWidget";

const PortfoliosList = () => {
  return (
    <Page
      title="Portfolios"
      breadcrumbs={[{ name: "Portfolios", active: true }]}
      className="TablePage"
    >
      <Row>
        <Col lg={3} md={6} sm={6} xs={12}>
          <NumberWidget
            title="Nb portfolios"
            subtitle="Total"
            number="9.8k"
            color="secondary"
          />
        </Col>

        <Col lg={3} md={6} sm={6} xs={12}>
          <NumberWidget
            title="highest return"
            subtitle="portfolio name"
            number="0.54"
            color="secondary"
          />
        </Col>

        <Col lg={3} md={6} sm={6} xs={12}>
          <NumberWidget
            title="highest risk"
            subtitle="portfolio name"
            number="0.003"
            color="secondary"
          />
        </Col>

        <Col lg={3} md={6} sm={6} xs={12}>
          <NumberWidget
            title="most investor"
            subtitle="client name"
            number="153"
            color="secondary"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>Managed portfolios</CardHeader>
            <CardBody>
              <MDBDataTable
                striped
                bordered
                large
                responsive
                data={Portfolios}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default PortfoliosList;
