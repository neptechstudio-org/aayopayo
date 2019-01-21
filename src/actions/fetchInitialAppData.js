import axios from 'axios';
import { UPDATE_MAIN_VALUE } from './types';

const objectParser = (obj, clip) => {
  const array = Object.values(obj);
  const data = array.slice(0, array.length - clip);
  // console.log('array value of', data);
  return data;
};

export const updateMainValue = (key, value) => ({
  type: UPDATE_MAIN_VALUE,
  payload: { key, value },
});

export const fetchProduct = () => async (dispatch, getState) => {
  try {
    const liveData = await axios.get('https://www.aayopayo.com/app/app_get_products.php?type=Live&auth=AAYOPAAYOHULLAWERQUIPCSTHKVXEMV');
    if (!liveData.data.error) {
      dispatch(updateMainValue('liveProduct', objectParser(liveData.data, 3)));
    }
    const UpcomingData = await axios.get('https://www.aayopayo.com/app/app_get_products.php?type=up&auth=AAYOPAAYOHULLAWERQUIPCSTHKVXEMV');
    if (!UpcomingData.data.error) {
      dispatch(updateMainValue('upcomingProduct', objectParser(UpcomingData.data, 3)));
    }
    const closedData = await axios.get('https://www.aayopayo.com/app/app_get_products.php?type=End&auth=AAYOPAAYOHULLAWERQUIPCSTHKVXEMV');
    if (!UpcomingData.data.error) {
      dispatch(updateMainValue('closedProduct', objectParser(closedData.data, 3)));
    }
    // console.log('product data', 'live= ', liveData.data, 'upcoming data = ', UpcomingData.data, 'closed data =', closedData.data);
  } catch (e) {
    return e;
  }
};

export const fetchProductDetails = pid => async (dispatch, getState) => {
  try {
    dispatch(updateMainValue('loading', true));
    const res = await axios.get(`https://www.aayopayo.com/app/app_get_product_details.php?auth=AAYOPAAYOHULLAWERQUIPCSTHKVXEMV&id=${pid}`);
    const { data } = res;
    if (!data.error) {
      dispatch(updateMainValue('productDetails', data));
    } else {
      dispatch(updateMainValue('loading', false));
      dispatch(updateMainValue('error', data.message));
    }
    const bidRes = await axios.get(`https://www.aayopayo.com/app/app_get_bid_list.php?id=${pid}&auth=AAYOPAAYOHULLAWERQUIPCSTHKVXEMV`);
    dispatch(updateMainValue('loading', false));
    if (!bidRes.data.error) {
      dispatch(updateMainValue('bidders', objectParser(bidRes.data, 4)));
    } else {
      dispatch(updateMainValue('loading', false));
      dispatch(updateMainValue('error', data.message));
    }
  } catch (e) {
    dispatch(updateMainValue('loading', false));
    return e;
  }
};
