import { UPDATE_MODAL_VALUE } from '../actions/types';

const INITIAL_MODAL_STATE = {
  modalNotificationShow: false,
  modalAddCoinShow: false,
  modalContactuShow: false,
  readNotificationSpinner: null,
  notificationReadStatus: true,
  showProfileModal: false,
  loading: false,
  addCoinVideoUrl: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4',
  addCoinSuccess: false,
  error: '',
  notificationContent: null,
};

export default (state = INITIAL_MODAL_STATE, actions) => {
  switch (actions.type) {
    case UPDATE_MODAL_VALUE:
      return { ...state, [actions.payload.key]: actions.payload.value };
    default:
      return state;
  }
};
