import axios from 'axios';
import querystring from 'querystring';

export const nextButtonPressHelper = (state, navigation, dispatch, updateFormValue) => {
  const { full_name, email, password, cpassword } = state.registerForm; //eslint-disable-line
  if ((full_name !== '') && (email !== '') && (password !== '') && (cpassword !== '')) { //eslint-disable-line
    if (password === cpassword) {
      navigation.navigate('PersonalDetails');
      dispatch(updateFormValue('error', ''));
    } else {
      dispatch(updateFormValue('error', 'Password mismatch'));
    }
  } else {
    dispatch(updateFormValue('error', 'Fill all the fields'));
  }
};

export const submitButtonPressHelper = async (states, dispatch, updateFormValue) => {
  const { dob, phone_number, agree } = states.registerForm; //eslint-disable-line
  dispatch(updateFormValue('loading', true));
  if ((dob !== '') && (phone_number !== '') && agree) { //eslint-disable-line
    try {
      const response = await axios({
        method: 'post',
        url: 'https://www.aayopayo.com/api/register.php',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: querystring.stringify(states.registerForm),
      });
      // console.log(response.data);
      dispatch(updateFormValue('loading', false));
      dispatch(updateFormValue('error', response.data.message));
    } catch (e) {
      dispatch(updateFormValue('error', 'Form submit failed'));
    }
  } else {
    dispatch(updateFormValue('error', 'Fill all the fields'));
  }
};

export const agreeCheckBoxPressHelper = (state, dispatch, content, navigation, updateFormValue) => {
  dispatch(updateFormValue('agree', !state.registerForm[content.value]));
};
