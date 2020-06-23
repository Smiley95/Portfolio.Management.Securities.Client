import React, { useEffect, useState } from "react";
import Page from "../layout/Page";
import NumberWidget from "./NumberWidget";
import GainersTable from "./Card/GainersTable";
import { items, gainers } from "../demos/dashboardPage";
import { Pie, Doughnut } from "react-chartjs-2";
import InfiniteCalendar from "react-infinite-calendar";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardDeck,
  CardGroup,
  CardHeader,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => window.scrollTo(0, 0));

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
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

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.source.name}
      >
        <img src={item.urlToImage} alt={item.title} className="carousel-img" />
        <CarouselCaption captionText={item.title} captionHeader={item.title} />
      </CarouselItem>
    );
  });
  return (
    <Page
      className="DashboardPage"
      title="Dashboard"
      breadcrumbs={[{ name: "Dashboard", active: true }]}
    >
      <Row>
        <Col lg={3} md={6} sm={6} xs={12}>
          <NumberWidget
            title="Nb portfolios"
            subtitle="This month"
            number="9.8k"
            color="secondary"
          />
        </Col>

        <Col lg={3} md={6} sm={6} xs={12}>
          <NumberWidget
            title="Monthly Visitors"
            subtitle="This month"
            number="5,400"
            color="secondary"
          />
        </Col>

        <Col lg={3} md={6} sm={6} xs={12}>
          <NumberWidget
            title="New Users"
            subtitle="This month"
            number="3,400"
            color="secondary"
          />
        </Col>

        <Col lg={3} md={6} sm={6} xs={12}>
          <NumberWidget
            title="Bounce Rate"
            subtitle="This month"
            number="38%"
            color="secondary"
          />
        </Col>
      </Row>
      <Row>
        <Col md="6" sm="12" xs="12">
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </Col>
        <Col md="6" sm="12" xs="12">
          <Card>
            <CardHeader>Gainers</CardHeader>
            <CardBody>
              <GainersTable
                headers={["ticker", "change %", "price"]}
                gainers={gainers}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
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
    </Page>
  );
};
export default HomePage;
