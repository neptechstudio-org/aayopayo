import axios from 'axios';
import { UPDATE_MAIN_VALUE } from './types';
import { BASE_URL, AUTH_KEY } from '../config';
import { setAsyncData, getAsyncData } from '../common/AsycstrorageAaayopayo';

const objectParser = (obj, clip) => {
  const array = Object.values(obj);
  const data = array.slice(0, array.length - clip);
  // console.log('array value of', data);
  return data;
};

const strignifyArrayOfObject = arr => arr.map(obj => JSON.stringify(obj));

export const updateMainValue = (key, value) => ({
  type: UPDATE_MAIN_VALUE,
  payload: { key, value },
});

export const fetchProduct = () => async (dispatch, getState) => {
  try {
    const liveData = await axios.get(`${BASE_URL}/app_get_products.php?type=Live&auth=${AUTH_KEY}`);
    if (!liveData.data.error) {
      dispatch(updateMainValue('liveProduct', objectParser(liveData.data, 3)));
      // console.log('response of live product data', liveData.data);
      await setAsyncData('LIVE_PRODUCTS', JSON.stringify(objectParser(liveData.data, 3)));
    }
    const UpcomingData = await axios.get(`${BASE_URL}/app_get_products.php?type=up&auth=${AUTH_KEY}`);
    if (!UpcomingData.data.error) {
      dispatch(updateMainValue('upcomingProduct', objectParser(UpcomingData.data, 3)));
      await setAsyncData('UPCOMING_PRODUCTS', JSON.stringify(objectParser(UpcomingData, 3)));
    }
    const closedData = await axios.get(`${BASE_URL}/app_get_products.php?type=End&auth=${AUTH_KEY}`);
    if (!UpcomingData.data.error) {
      dispatch(updateMainValue('closedProduct', objectParser(closedData.data, 3)));
      await setAsyncData('CLOSED_PRODUCTS', JSON.stringify(objectParser(closedData, 3)));
    }
    const featuredProduct = await axios.get(`${BASE_URL}/app_get_featured_products.php?auth=${AUTH_KEY}&type=all`);
    if (!featuredProduct.data.error) {
      dispatch(updateMainValue('featuredProduct', objectParser(featuredProduct.data, 3)));
      await setAsyncData('FEATURED_PRODUCTS', JSON.stringify(objectParser(featuredProduct, 3)));
    }
    const imageSlider = await axios.get(`${BASE_URL}/app_get_slider_list.php?auth=${AUTH_KEY}`);
    if (!imageSlider.data.error) {
      dispatch(updateMainValue('imageSlider', objectParser(imageSlider.data, 3)));
      await setAsyncData('IMAGE_SLIDER', JSON.stringify(objectParser(imageSlider, 3)));
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
    dispatch(updateMainValue('myBidAmount', myBids[0].bidamount));
  } else {
    dispatch(updateMainValue('myBidAmount', null));
  }
};

export const fetchProductDetails = pid => async (dispatch, getState) => {
  try {
    dispatch(updateMainValue('loading', true));
    const res = await axios.get(`${BASE_URL}/app_get_product_details.php?auth=${AUTH_KEY}&id=${pid}`);
    const { data } = res;
    if (!data.error) {
      dispatch(updateMainValue('productDetails', data));
    } else {
      dispatch(updateMainValue('loading', false));
      dispatch(updateMainValue('error', data.message));
    }
    const bidRes = await axios.get(`${BASE_URL}/app_get_bid_list.php?id=${pid}&auth=${AUTH_KEY}`);
    // console.log('bid res', bidRes.data, pid);
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
