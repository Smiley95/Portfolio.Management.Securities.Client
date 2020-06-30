import Page from "../layout/Page";
import React from "react";
import NumberWidget from "./NumberWidget";
import { annualValue } from "../demos/stockSummury";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
  Row,
  Col,
  CardBody,
  CardHeader,
  CardFooter,
  Card,
  FormGroup,
  Label,
  Input,
  Form,
  Table,
} from "reactstrap";

const PortfolioReport = () => {
  const genLineData = (moreData = {}, moreData2 = {}) => {
    const dates = annualValue.map((x) => x["date"]);
    const values = annualValue.map((x) => x["enterpriseValue"]);
    return {
      labels: dates,
      datasets: [
        {
          label: "Dataset 1",
          backgroundColor: "primary",
          borderColor: "primary",
          borderWidth: 1,
          data: values,
          ...moreData,
        },
      ],
    };
  };
  const randomNum = (min = 0, max = 1000) => {
    return min + Math.random() * (max - min);
  };
  const genPieData = () => {
    return {
      datasets: [
        {
          data: [
            randomNum(),
            randomNum(),
            randomNum(),
            randomNum(),
            randomNum(),
          ],
          backgroundColor: [
            "primary",
            "secondary",
            "success",
            "info",
            "danger",
          ],
          label: "Dataset 1",
        },
      ],
      labels: ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5"],
    };
  };
  return (
    <>
      <Page
        title="Reporting"
        breadcrumbs={[{ name: "Reporting", active: true }]}
        className="TablePage"
      >
        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader></CardHeader>
              <CardBody>
                <Col lg={3} md={3}>
                  <Form>
                    <FormGroup>
                      <Label for="exampleSelect">
                        Select a portfolio to report
                      </Label>
                      <Input type="select" name="select">
                        <option>FB</option>
                        <option>APPL</option>
                        <option>ZNGA</option>
                        <option>MSFT</option>
                      </Input>
                    </FormGroup>
                  </Form>
                </Col>
                <hr />
                <Card>
                  <CardHeader>General Info</CardHeader>
                  <CardBody>
                    <Row>
                      <Col lg={3} md={6} sm={6} xs={12}>
                        <NumberWidget
                          title="first info"
                          subtitle="Total"
                          number="9.8k"
                          color="secondary"
                        />
                      </Col>

                      <Col lg={3} md={6} sm={6} xs={12}>
                        <NumberWidget
                          title="second info"
                          subtitle="ticker"
                          number="0.54"
                          color="secondary"
                        />
                      </Col>

                      <Col lg={3} md={6} sm={6} xs={12}>
                        <NumberWidget
                          title="third info"
                          subtitle="ticker"
                          number="0.003"
                          color="secondary"
                        />
                      </Col>

                      <Col lg={3} md={6} sm={6} xs={12}>
                        <NumberWidget
                          title="forth info"
                          subtitle="diversity"
                          number="3"
                          color="secondary"
                        />
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={12} md={12}>
            <Card>
              <CardHeader>Return annual movements</CardHeader>
              <CardBody>
                <Bar data={genLineData()} />
              </CardBody>
            </Card>
          </Col>
          <Col xl={6} lg={12} md={12}>
            <Card>
              <CardHeader>risk annual movements</CardHeader>
              <CardBody>
                <Line data={genLineData({ fill: false }, { fill: false })} />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={12} md={12}>
            <Card>
              <CardHeader>sector diversity</CardHeader>
              <CardBody>
                <Doughnut data={genPieData()} />
              </CardBody>
            </Card>
          </Col>
          <Col xl={6} lg={12} md={12}>
            <Card>
              <CardHeader>Currency diversity</CardHeader>
              <CardBody>
                <Doughnut data={genPieData()} />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>last 12 months value changes by asset</CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Ticker</th>
                      <th>Jan</th>
                      <th>Feb</th>
                      <th>Mar</th>
                      <th>Apl</th>
                      <th>May</th>
                      <th>Jun</th>
                      <th>Jul</th>
                      <th>Aug</th>
                      <th>Sep</th>
                      <th>Oct</th>
                      <th>Nov</th>
                      <th>Dec</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">APPL</th>
                      <td>-0.0802</td>
                      <td>+1.38</td>
                      <td>-0.0802</td>
                      <td>+1.38</td>
                      <td>-0.0802</td>
                      <td>+1.38</td>
                      <td>-0.0802</td>
                      <td>+1.38</td>
                      <td>-0.0802</td>
                      <td>+1.38</td>
                      <td>-0.0802</td>
                      <td>+1.38</td>
                    </tr>
                    <tr>
                      <th scope="row">APPL</th>
                      <td>-0.0802</td>
                      <td>+1.38</td>
                      <td>-0.0802</td>
                      <td>+1.38</td>
                      <td>-0.0802</td>
                      <td>+1.38</td>
                      <td>-0.0802</td>
                      <td>+1.38</td>
                      <td>-0.0802</td>
                      <td>+1.38</td>
                      <td>-0.0802</td>
                      <td>+1.38</td>
                    </tr>
                    <tr>
                      <th scope="row">APPL</th>
                      <td>-0.0802</td>
                      <td>+1.38</td>
                      <td>-0.0802</td>
                      <td>+1.38</td>
                      <td>-0.0802</td>
                      <td>+1.38</td>
                      <td>-0.0802</td>
                      <td>+1.38</td>
                      <td>-0.0802</td>
                      <td>+1.38</td>
                      <td>-0.0802</td>
                      <td>+1.38</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    </>
  );
};

export default PortfolioReport;
