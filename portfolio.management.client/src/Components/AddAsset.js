import React from "react";
import { useHistory } from "react-router-dom";
import Page from "../layout/Page";
import GainersTable from "./Card/GainersTable";
import { Pie, Doughnut } from "react-chartjs-2";
import { gainers, losers } from "../demos/dashboardPage";
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const AddAsset = () => {
  const history = useHistory();
  const handleSubmit = () => {
    history.push("/portfolio");
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

          label: "Dataset 1",
        },
      ],
      labels: ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5"],
    };
  };
  return (
    <Page
      title="ADD NEW ASSET"
      breadcrumbs={[{ name: "new asset", active: true }]}
      className=""
    >
      <Row>
        <Col md="8" sm="12" xs="12">
          <Card>
            <CardHeader>New Investment</CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="exampleSelect">Select ticker</Label>
                  <Input type="select" name="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <FormGroup row>
                  <Label for="holderName" md={2}>
                    Holder
                  </Label>
                  <Col>
                    <Input plaintext value="holder name" readOnly md={10} />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label for="nbInvestment">Number of securities</Label>
                  <Input
                    type="number"
                    name="number"
                    id="nbInvestment"
                    placeholder="number of investments"
                  />
                </FormGroup>
                <FormGroup row>
                  <Label for="price" md={2}>
                    Price
                  </Label>
                  <Col>
                    <Input
                      plaintext
                      id="price"
                      value="price of investment"
                      readOnly
                      md={10}
                    />
                  </Col>
                </FormGroup>
                <Button className="border-0 " onClick={handleSubmit}>
                  Invest
                </Button>
              </Form>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>related charts</CardHeader>
            <CardBody>
              {" "}
              <Row>
                <Col xl={6} lg={12} md={12}>
                  <Card>
                    <CardHeader>CURRENCIES</CardHeader>
                    <CardBody>
                      <Pie data={genPieData()} />
                    </CardBody>
                  </Card>
                </Col>

                <Col xl={6} lg={12} md={12}>
                  <Card>
                    <CardHeader>Sectors performance</CardHeader>
                    <CardBody>
                      <Doughnut data={genPieData()} />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col md="4" sm="12" xs="12">
          <Card>
            <CardHeader>Gainers</CardHeader>
            <CardBody>
              <GainersTable
                headers={["ticker", "change %", "price"]}
                items={gainers}
              />
            </CardBody>
          </Card>
          <Card>
            <CardHeader>Losers</CardHeader>
            <CardBody>
              <GainersTable
                headers={["ticker", "change %", "price"]}
                items={losers}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};
export default AddAsset;
