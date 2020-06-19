import React, { useEffect, useState } from "react";
import Page from "../layout/Page";
import { Bar, Line } from "react-chartjs-2";
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

const items = [
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post",
    },
    title:
      "Tulsa imposes curfew ahead of Trump rally to prevent violent protesting - The Washington Post",
    description:
      "Trump’s rally, his first since the coronavirus crisis shut down public gatherings, has angered some residents who worry the event could cause a large scale outbreak.",
    url:
      "https://www.washingtonpost.com/politics/tulsa-imposes-curfew-ahead-of-trump-rally-to-prevent-violent-protesting/2020/06/19/56d31058-b21f-11ea-8f56-63f38c990077_story.html",
    urlToImage:
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/UPZUE5FRZAI6VGFVE6NGI6NB4Q.jpg&w=1440",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    title:
      "Trump: will submit 'enhanced papers' on U.S. Supreme Court immigration decision - Reuters",
    description:
      'President Donald Trump on Friday said his administration will make a filing on "Dreamer" immigrants who are in the United States illegally but entered as children, without providing details, to address the Supreme Court\'s ruling he broke federal procedure law…',
    url:
      "https://www.reuters.com/article/us-usa-court-immigration-trump-idUSKBN23Q2CA",
    urlToImage:
      "https://s1.reutersmedia.net/resources/r/?m=02&d=20200619&t=2&i=1522842200&w=1200&r=LYNXMPEG5I1K1",
  },
  {
    source: {
      id: "nbc-news",
      name: "NBC News",
    },
    title:
      "Twitter labels video tweeted by Trump as 'manipulated media' - NBC News",
    description:
      'Twitter on Thursday labeled a video post on the platform by President Trump "manipulated media." The video projects false claims on a news outlet.',
    url:
      "https://www.nbcnews.com/politics/donald-trump/twitter-labels-video-tweeted-trump-manipulated-media-n1231511",
    urlToImage:
      "https://media3.s-nbcnews.com/j/newscms/2020_25/3391138/200618-donald-trump-cellphone-smartphone-cell-ac-1059p_546ad3aefd8acbdb3f35a1935d244a10.nbcnews-fp-1200-630.jpg",
  },
];

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);
const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

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

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.source.name}
      >
        <img src={item.urlToImage} alt={item.title} />
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
          {/* <NumberWidget
              title="Total Profit"
              subtitle="This month"
              number="9.8k"
              color="secondary"
              progress={{
                value: 75,
                label: "Last month",
              }}
            /> */}
        </Col>

        <Col lg={3} md={6} sm={6} xs={12}>
          {/* <NumberWidget
              title="Monthly Visitors"
              subtitle="This month"
              number="5,400"
              color="secondary"
              progress={{
                value: 45,
                label: "Last month",
              }}
            /> */}
        </Col>

        <Col lg={3} md={6} sm={6} xs={12}>
          {/* <NumberWidget
              title="New Users"
              subtitle="This month"
              number="3,400"
              color="secondary"
              progress={{
                value: 90,
                label: "Last month",
              }}
            /> */}
        </Col>

        <Col lg={3} md={6} sm={6} xs={12}>
          {/* <NumberWidget
              title="Bounce Rate"
              subtitle="This month"
              number="38%"
              color="secondary"
              progress={{
                value: 60,
                label: "Last month",
              }}
            /> */}
        </Col>
      </Row>
      <Row>
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
      </Row>
    </Page>
  );
};
// componentDidMount() {
//   // this is needed, because InfiniteCalendar forces window scroll
//   window.scrollTo(0, 0);
// }
export default HomePage;
