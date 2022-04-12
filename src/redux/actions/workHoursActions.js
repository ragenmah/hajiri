export const transformDataForBarChart = number => {
  // random ranges > number < inscribed to distinguish colors
  if (number <= 30) {
    return {
      value: number,
      svg: {
        fill: 'red',
      },
    };
  } else if (number > 30 && number < 70) {
    return {
      value: number,
      svg: {
        stroke: 'orange',
        strokeWidth: 2,
        fill: '#FFD580',
      },
    };
  } else {
    return {
      value: number,
      svg: {
        fill: 'green',
      },
    };
  }
};
