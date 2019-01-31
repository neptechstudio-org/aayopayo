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
    const featuredProduct = await axios.get('https://www.aayopayo.com/app/app_get_featured_products.php?auth=AAYOPAAYOHULLAWERQUIPCSTHKVXEMV&type=all');
    if (!featuredProduct.data.error) {
      dispatch(updateMainValue('featuredProduct', objectParser(featuredProduct.data, 3)));
    }
    const imageSlider = await axios.get('https://www.aayopayo.com/app/app_get_slider_list.php?auth=AAYOPAAYOHULLAWERQUIPCSTHKVXEMV');
    if (!imageSlider.data.error) {
      dispatch(updateMainValue('imageSlider', objectParser(imageSlider.data, 3)));
    }
  } catch (e) {
    return e;
  }
};

const checkMyBidHelper = (dispatch, getState, bidders) => {
  const { userId } = getState().main;
  // console.log('check my bids', userId, getState().main.bidders);
  const userAvailabilty = bidders.some(data => data.userid === userId.id);
  if (userAvailabilty) {
    const myBids = bidders.filter(data => data.userid === userId.id);
    dispatch(updateMainValue('myBidAmount', myBids.bidamount));
  } else {
    dispatch(updateMainValue('myBidAmount', null));
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
    console.log('bid res', bidRes.data, pid);
    dispatch(updateMainValue('loading', false));
    if (!bidRes.data.error) {
      dispatch(updateMainValue('bidders', objectParser(bidRes.data, 4)));
      checkMyBidHelper(dispatch, getState, objectParser(bidRes.data, 4));
    } else {
      dispatch(updateMainValue('loading', false));
      dispatch(updateMainValue('error', data.message));
      dispatch(updateMainValue('bidders', objectParser(bidRes.data, 4)));
      checkMyBidHelper(dispatch, getState, objectParser(bidRes.data, 4));
    }
  } catch (e) {
    dispatch(updateMainValue('loading', false));
    return e;
  }
};
