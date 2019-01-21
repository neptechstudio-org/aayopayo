import { Alert } from 'react-native';
import axios from 'axios';
import { UPDATE_MODAL_VALUE } from './types';
import { BASE_URL } from '../config';

const notificationParser = (data) => {
  const notiReadStatus = data.noalert;
  const notiHeaders = data.alertheader;
  const notiBody = data.alertbody;
  const notiProductId = data.productid;
  const notiDate = data.date;
  const notiTime = data.time;
  const notiData = notiHeaders.map((notiHeader, idx) => (
    {
      header: notiHeader,
      body: notiBody[idx],
      date: notiDate[idx],
      time: notiTime[idx],
      productId: notiProductId[idx],
    }
  ));
  return { notiReadStatus, notiData };
};

export const updateModalValue = (key, value) => ({
  type: UPDATE_MODAL_VALUE,
  payload: { key, value },
});

// https://www.aayopayo.com/app/app_mark_read_alert.php?auth=AAYOPAAYOHULLAWERQUIPCSTHKVXEMV&uid=1$aid=8

const markNotificationRead = async (userId, dispatch, notifications) => {
  try {
    const response = await axios.post(`${BASE_URL}/app_mark_read_alert.php?auth=AAYOPAAYOHULLAWERQUIPCSTHKVXEMV&uid=${userId}$aid=8`);
    const { data } = response;
    if (data.error) {
      dispatch(updateModalValue('notificationReadStatus', false));
    }
  } catch {
    dispatch(updateModalValue('error', 'Faild to fetch data'));
  }
};

export const fetchNotifications = () => {
  return async (dispatch, getState) => {
    try {
      const { userId } = getState().main;
      if (userId) {
        dispatch(updateModalValue('modalNotificationShow', true));
        dispatch(updateModalValue('loading', true));
        const response = await axios.get(`${BASE_URL}/app_get_user_notification.php?uid=${userId.id}&auth=AAYOPAAYOHULLAWERQUIPCSTHKVXEMV`);
        // console.log('notification data', response.data);
        const { data } = response;
        dispatch(updateModalValue('loading', false));
        if (!data.error) {
          const parsedNotification = notificationParser(data);
          dispatch(updateModalValue('notificationContent', parsedNotification.notiData));
          dispatch(updateModalValue('notificationReadStatus', parsedNotification.notiReadStatus));
          markNotificationRead(userId.id, dispatch, getState().modal.notificationContent);
        } else {
          dispatch(updateModalValue('error', data.message));
        }
      } else {
        Alert.alert('Please login to see your details');
      }
    } catch (e) {
      dispatch(updateModalValue('error', 'Faild to fetch notification'));
      throw e;
    }
  };
};

// https://www.aayopayo.com/app/app_get_video_ad.php?uid=10&cvid=2&auth=AAYOPAAYOHULLAWERQUIPCSTHKVXEMV

export const addCoinHandler = () => {
  // console.log('add coin show is called');
  return async (dispatch, getState) => {
    dispatch(updateModalValue('addCoinSuccess', false));
    dispatch(updateModalValue('modalAddCoinShow', true));
    dispatch(updateModalValue('loading', true));
    try {
      const response = await axios.post(`${BASE_URL}/app_mark_read_alert.php?auth=AAYOPAAYOHULLAWERQUIPCSTHKVXEMV&uid=1$aid=8`);
      dispatch(updateModalValue('loading', false));
      dispatch(updateModalValue('addCoinVideoUrl', 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'));
      if (response.data.status === 'success') {
        dispatch(updateModalValue('content', response.data));
      }
    } catch (e) {
      dispatch(updateModalValue('error', 'Faild to fetch VedioUrl'));
    }
  };
};

export const addCoinSuccess = () => {
  // console.log('addCoinSuccess called');
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${BASE_URL}/addCoin.php`, { SESSION: 'jfdlkjfalkjfaslja' });
      dispatch(updateModalValue('addCoinSuccess', true));
      if (response.data.status === 'success') {
        dispatch(updateModalValue('addCoinSuccess', true));
      }
    } catch (e) {
      dispatch(updateModalValue('error', 'Failed to add coins'));
    }
  };
};
