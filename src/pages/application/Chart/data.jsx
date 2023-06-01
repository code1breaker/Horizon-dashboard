export const data = [
  {
    name: "PRODUCT A",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
  },
  {
    name: "PRODUCT B",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
  },
  {
    name: "PRODUCT C",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
  },
];

export const options = {
  chart: {
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  colors: ["#7156f7", "#97d7fb", "#e7ecf8"],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 15,
      columnWidth: "22%",
      borderWidth: 0,
      dataLabels: {
        total: {
          enabled: false,
          style: {
            fontSize: "13px",
            fontWeight: 900,
          },
        },
      },
    },
  },
  xaxis: {
    categories: [17, 18, 19, 20, 21, 22, 23, 24, 25],
    axisBorder: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
};

export const donut = [40, 10, 20, 15, 30, 10];

export const options2 = {
  chart: {
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  fill: {
    type: "gradient",
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    axisTick: {
      show: false,
    },
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
