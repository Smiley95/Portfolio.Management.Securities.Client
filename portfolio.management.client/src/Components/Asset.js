import React, { useState } from "react";
import Page from "../layout/Page";
import NumberWidget from "./NumberWidget";
import { assetHistory } from "../demos/stockSummury";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Button,
  Media,
  Label,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  InputGroupAddon,
} from "reactstrap";
import { MdStar, MdStarBorder } from "react-icons/md";
import { Line } from "react-chartjs-2";
import Rating from "react-rating";
const Asset = () => {
  const [buyModal, setBuyModal] = useState(false);
  const [sellModal, setSellModal] = useState(false);
  const toggleBuy = () => {
    setBuyModal(!buyModal);
  };
  const toggleSell = () => {
    setSellModal(!sellModal);
  };
  const genLineData = () => {
    const dates = assetHistory.map((x) => x["date"]);
    const history = assetHistory.map((x) => x["close"]);
    return {
      labels: dates,
      datasets: [
        {
          label: "Dataset 1",
          backgroundColor: "primary",
          borderColor: "primary",
          borderWidth: 1,
          data: history,
        },
      ],
    };
  };
  return (
    <Page
      title="ticker"
      breadcrumbs={[{ name: "ticker", active: true }]}
      className="TablePage"
    >
      <Row>
        {MdStar}
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
              <Container>
                {" "}
                <Row>
                  <Col lg={3} md={3}>
                    <Row>
                      <Media left href={"http://www.apple.com"}>
                        <Media
                          object
                          src="https://financialmodelingprep.com/image-stock/AAPL.jpg"
                          alt="Generic placeholder image"
                        />
                      </Media>
                    </Row>
                    <Row>Apple Inc.</Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <Label for="price">
                          <strong>Price</strong>
                        </Label>
                        <div id="price">361.79</div>
                      </Col>
                      <Col>
                        <Label for="rating">
                          <strong>Rating</strong>
                        </Label>
                        <br />
                        <Rating
                          id="rating"
                          initialRating={5}
                          readonly
                          emptySymbol={<MdStarBorder />}
                          fullSymbol={<MdStar />}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Label for="score">
                          <strong>Score</strong>
                        </Label>
                        <div id="score">
                          <h1>S</h1>
                        </div>
                      </Col>
                      <Col>
                        <Label for="ROE">
                          <strong>ROE </strong>
                        </Label>
                        <div id="ROE"> 36.83% </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Label for="recommendation">
                          <strong>Recommendation </strong>
                        </Label>
                        <div id="recommendation"> Strong buy </div>
                      </Col>
                      <Col>
                        <Label for="ROA">
                          <strong>ROA </strong>
                        </Label>
                        <div id="ROA"> 18.71% </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </CardHeader>
            <CardBody>
              <Card>
                <CardHeader>About</CardHeader>
                <CardBody>
                  <Row>
                    <Col>
                      <Label for="ceo">
                        <strong>CEO</strong>
                      </Label>
                      <div id="ceo">Mr. Timothy D. Cook</div>
                    </Col>
                    <Col>
                      <Label for="industry">
                        <strong>Industry</strong>
                      </Label>
                      <div id="industry">Consumer Electronics</div>
                    </Col>
                    <Col>
                      <Label for="sector">
                        <strong>Sector</strong>
                      </Label>
                      <div id="sector">Technology</div>
                    </Col>
                    <Col>
                      <Label for="country">
                        <strong>Country</strong>
                      </Label>
                      <div id="country">United States</div>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col>
                      <Label for="description">
                        <strong>Description</strong>
                      </Label>
                      <div id="description">
                        Apple Inc. designs, manufactures, and markets
                        smartphones, personal computers, tablets, wearables, and
                        accessories worldwide. It also sells various related
                        services. The company offers iPhone, a line of
                        smartphones; Mac, a line of personal computers; iPad, a
                        line of multi-purpose tablets; and wearables, home, and
                        accessories comprising AirPods, Apple TV, Apple Watch,
                        Beats products, HomePod, iPod touch, and other
                        Apple-branded and third-party accessories. It also
                        provides digital content stores and streaming services;
                        AppleCare support services; and iCloud, a cloud service,
                        which stores music, photos, contacts, calendars, mail,
                        documents, and others. In addition, the company offers
                        various service, such as Apple Arcade, a game
                        subscription service; Apple Card, a co-branded credit
                        card; Apple News+, a subscription news and magazine
                        service; and Apple Pay, a cashless payment service, as
                        well as licenses its intellectual property, and provides
                        other related services. The company serves co
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <br />
              <Card lg={12}>
                <CardHeader>Historical price</CardHeader>
                <CardBody>
                  <Line
                    data={genLineData()}
                    options={{
                      scales: {
                        xAxes: [
                          {
                            scaleLabel: {
                              display: true,
                              labelString: "Month",
                            },
                          },
                        ],
                        yAxes: [
                          {
                            stacked: true,
                            scaleLabel: {
                              display: true,
                              labelString: "Value",
                            },
                          },
                        ],
                      },
                    }}
                  />
                </CardBody>
              </Card>
              <br />
              <Row
                style={{
                  "justify-content": "flex-end",
                }}
              >
                <Button
                  style={{ "margin-inline-end": "10px" }}
                  onClick={toggleBuy}
                >
                  Buy
                </Button>
                <Button color="success" onClick={toggleSell}>
                  Sell
                </Button>
                {/*start buy modal*/}
                <Modal isOpen={buyModal} toggle={toggleBuy}>
                  <ModalHeader toggle={toggleBuy}>Buy asset</ModalHeader>
                  <ModalBody>
                    <Form className="mx-3 grey-text">
                      <FormGroup>
                        <Label for="nbBuyAsset">Nb of assets</Label>
                        <Input
                          type="number"
                          name="number"
                          id="nbBuyAsset"
                          placeholder="number of assets to buy"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="price">Price</Label>
                        <Input
                          plaintext
                          id="price"
                          value="total price "
                          readOnly
                          md={10}
                        />
                      </FormGroup>
                    </Form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary">Buy</Button>{" "}
                    <Button color="secondary" onClick={toggleBuy}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
                {/*end buy modal*/}
                {/*start sell modal*/}
                <Modal isOpen={sellModal} toggle={toggleSell}>
                  <ModalHeader toggle={toggleSell}>Sell asset</ModalHeader>
                  <ModalBody>
                    <Form className="mx-3 grey-text">
                      <FormGroup>
                        <Label for="nbSellAsset">Nb of assets</Label>
                        <Input
                          type="number"
                          name="number"
                          id="nbSellAsset"
                          placeholder="number of assets to sell"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="sellPrice">Price</Label>
                        <Input placeholder="Amount" type="number" step="1" />
                      </FormGroup>
                    </Form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary">Buy</Button>{" "}
                    <Button color="secondary" onClick={toggleSell}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
                {/*end sell modal*/}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};
export default Asset;
