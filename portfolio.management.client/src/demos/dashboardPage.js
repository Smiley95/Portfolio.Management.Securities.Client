export const items = [
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

export const gainers = [
  {
    ticker: "BYFC",
    changes: 1.61,
    price: "3.31",
    changesPercentage: "(+94.71%)",
    companyName: "Broadway Financial Corporation",
  },
  {
    ticker: "MTSL",
    changes: 0.71,
    price: "1.85",
    changesPercentage: "(+62.28%)",
    companyName: "MER Telemanagement Solutions Ltd.",
  },
  {
    ticker: "ARRY",
    changes: 17.69,
    price: "46.57",
    changesPercentage: "(+61.25%)",
    companyName: "Array BioPharma Inc.",
  },
  {
    ticker: "WRLSW",
    changes: 0.0649,
    price: "0.18",
    changesPercentage: "(+56.39%)",
    companyName: "Pensare Acquisition Corp. Warrant",
  },
  {
    ticker: "ARTLW",
    changes: 0.0599,
    price: "0.1699",
    changesPercentage: "(+54.45%)",
    companyName: "Artelo Biosciences, Inc.",
  },
  {
    ticker: "UONE",
    changes: 11.3,
    price: "36.3",
    changesPercentage: "(+45.20%)",
    companyName: "Urban One Inc.",
  },
  {
    ticker: "BBGI",
    changes: 1.195,
    price: "3.855",
    changesPercentage: "(+44.92%)",
    companyName: "Beasley Broadcast Group Inc.",
  },
];

export const todosData = [
  { id: 1, title: "task -1", done: true },
  { id: 2, title: "task -2", done: false },
  { id: 3, title: "task -3", done: true },
  { id: 4, title: "task -4", done: true },
  { id: 5, title: "task -5", done: false },
];

export const chartjs = {
  bar: {
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Expense for this year",
          backgroundColor: "#6a82fb",
          stack: "Expense",
          data: [10000, 30000, 50000, 80000, 60000, 20000, 10000],
        },
        {
          label: "Expense for last year",
          backgroundColor: "#fc5c7d",
          stack: "Expense",
          data: [30000, 80000, 50000, 100000, 60000, 40000, 90000],
        },
      ],
    },
    options: {
      title: {
        display: false,
        text: "Chart.js Bar Chart - Stacked",
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      responsive: true,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            stacked: true,
            display: false,
          },
        ],
        yAxes: [
          {
            stacked: true,
            display: false,
          },
        ],
      },
    },
  },
  doughnut: {
    data: {
      datasets: [
        {
          data: [20, 30, 40, 50, 60],
          backgroundColor: [
            "#6a82fb",
            "#fc5c7d",
            "#45b649",
            "#00c9ff",
            "#ffd700",
          ],
          label: "Dataset 1",
        },
      ],
      labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
    },
    options: {
      responsive: true,
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Doughnut Chart",
      },
      animation: {
        animateScale: true,
        animateRotate: true,
      },
    },
  },
  line: {
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Revenue for this year",
          borderColor: "#6a82fb",
          backgroundColor: "#6a82fb",
          data: [0, 1300, 2200, 3400, 4600, 3500, 3000],
        },

        {
          label: "Revenue for last year",
          borderColor: "#fc5c7d",
          backgroundColor: "#fc5c7d",
          data: [0, 1300, 2200, 3400, 4600, 3500, 3000],
        },
      ],
    },
    options: {
      responsive: true,
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart - Stacked Area",
      },
      tooltips: {
        intersect: false,
        mode: "nearest",
      },
      hover: {
        mode: "index",
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: false,
              labelString: "Month",
            },
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            stacked: true,
            scaleLabel: {
              display: false,
              labelString: "Value",
            },
            gridLines: {
              display: false,
            },
          },
        ],
      },
    },
  },
};

export const losers = [
  {
    ticker: "LK",
    changes: -1.62,
    price: 1.38,
    changesPercentage: "(-54.00%)",
    companyName: "Luckin Coffee Inc.",
  },
  {
    ticker: "AKRX",
    changes: -0.0937,
    price: 0.09,
    changesPercentage: "(-51.01%)",
    companyName: "Akorn Inc.",
  },
  {
    ticker: "ICPT",
    changes: -29.565,
    price: 47.925,
    changesPercentage: "(-38.15%)",
    companyName: "Intercept Pharmaceuticals Inc.",
  },
  {
    ticker: "CBLI",
    changes: -1.61,
    price: 2.65,
    changesPercentage: "(-37.79%)",
    companyName: "Cleveland BioLabs Inc.",
  },
  {
    ticker: "BBCP",
    changes: -1.85,
    price: 3.63,
    changesPercentage: "(-33.76%)",
    companyName: "Concrete Pumping Holdings, Inc.",
  },
  {
    ticker: "CTRC",
    changes: -0.0802,
    price: 0.1608,
    changesPercentage: "(-33.28%)",
    companyName: "Centric Brands Inc.",
  },
  {
    ticker: "TACOW",
    changes: -0.016,
    price: 0.0426,
    changesPercentage: "(-27.30%)",
    companyName: "Del Taco Restaurants Inc. Warrants",
  },
  {
    ticker: "HRTX",
    changes: -5.3361,
    price: 14.4839,
    changesPercentage: "(-26.92%)",
    companyName: "Heron Therapeutics Inc.",
  },
  {
    ticker: "CJJD",
    changes: -0.48,
    price: 1.4,
    changesPercentage: "(-25.53%)",
    companyName: "China Jo-Jo Drugstores Inc.",
  },
  {
    ticker: "BVXVW",
    changes: -2.4901,
    price: 7.51,
    changesPercentage: "(-24.90%)",
    companyName: "BiondVax Pharmaceuticals Ltd. Warrants",
  },
];
