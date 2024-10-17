import data from '../json/data.json';

export const useDataHook = key => {
  if (!key) {
    console.log('No key provided.');
    return;
  }

  if (data.length > 0) {
    data.forEach((item, index) => {
      if (item[key]) {
        console.log(`Item ${index + 1} - ${key}: ${item[key]}`);
      } else {
        console.log(`Item ${index + 1} - ${key}: Not found`);
      }
    });
  } else {
    console.log('No data available.');
  }
};
