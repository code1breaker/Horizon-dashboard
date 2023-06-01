// ---------first start------------------
export const line1 = {
  labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
  datasets: [
    {
      data: [50, 64, 48, 66, 49, 68],
      fill: false,
      backgroundColor: "rgba(92, 47, 237,0.2)",
      borderColor: "rgba(92, 47, 237)",
      tension: 0.45,
      pointRadius: 0,
    },
    {
      data: [30, 40, 24, 46, 20, 46],
      fill: false,
      borderColor: "#43c7f7",
      tension: 0.45,
      pointRadius: 0,
    },
  ],
};
export const options1 = {
  scales: {
    y: {
      display: false,
      beginAtZero: false,
      min: 10,
      max: 70,
      ticks: {
        stepSize: 15,
      },
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  elements: {
    line: {
      borderWidth: 5,
    },
  },
  plugins: {
    tootltips: {
      mode: "index",
      intersect: false,
    },
  },
  resposnsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
  },
};
// ---------first end------------------

// -----------second start-----------------
export const bar1 = {
  labels: ["00", "04", "08", "12", "14", "16", "18"],
  datasets: [
    {
      data: [20, 30, 40, 20, 45, 50, 30],
      fill: false,
      backgroundColor: "rgba(92, 47, 237)",
      borderColor: "rgba(92, 47, 237)",
      borderRadius: 80,
      barThickness: 20,
      categoryPercaentage: 5,
      barPercaentage: 5,
    },
  ],
};
export const barOptions1 = {
  scales: {
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    tootltips: {
      mode: "index",
      intersect: false,
    },
  },
  resposnsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
  },
};
// -----------second end-------------------

// --------------third start----------------

export const line2 = {
  labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thr", "Fri"],
  datasets: [
    {
      data: [20, 30, 28, 32, 29, 36, 40],
      fill: false,
      backgroundColor: "rgba(92, 47, 237)",
      borderColor: "rgba(92, 47, 237)",
      categoryPercaentage: 0.5,
      barPercaentage: 0.5,
      tension: 0.3,
      pointRadius: 0,
    },
  ],
};
export const options2 = {
  scales: {
    y: {
      display: false,
      beginAtZero: false,
      min: 15,
      max: 50,
      ticks: {
        stepSize: 10,
      },
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  elements: {
    line: {
      borderWidth: 5,
    },
  },
  plugins: {
    tootltips: {
      mode: "index",
      intersect: false,
    },
  },
  resposnsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
  },
};
// --------------third end----------------
