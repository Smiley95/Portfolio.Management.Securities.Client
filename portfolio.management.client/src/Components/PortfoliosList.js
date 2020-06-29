import Page from "../layout/Page";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Form,
  Label,
  Input,
  FormGroup,
} from "reactstrap";
import { MDBDataTable } from "mdbreact";
import { Portfolios } from "../demos/Portfoliodata";
import NumberWidget from "./NumberWidget";

const PortfoliosList = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
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
                <Row
                  style={{
                    "justify-content": "flex-end",
                  }}
                >
                  <Button onClick={toggleModal}>Add Portfolio</Button>
                  <Modal isOpen={openModal} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal}>
                      New Portfolio
                    </ModalHeader>
                    <ModalBody>
                      <Form className="mx-3 grey-text">
                        <FormGroup>
                          <Label for="portfolioLabel">Label</Label>
                          <Input
                            type="text"
                            name="label"
                            id="portfolioLabel"
                            placeholder="portfolio label"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="portfolioOwner">Owner</Label>
                          <Input
                            type="text"
                            name="owner"
                            id="portfolioOwner"
                            placeholder="portfolio owner"
                          />
                        </FormGroup>
                      </Form>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary">Add</Button>{" "}
                      <Button color="secondary" onClick={toggleModal}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                </Row>
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
    </>
  );
};

export default PortfoliosList;
