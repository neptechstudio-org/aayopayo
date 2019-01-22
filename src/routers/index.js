
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import MainDrawer from '../screens/drawers/index';
import MainScreen from '../screens';
import TermsAndPrivacy from '../screens/term-and-privacy/TermsAndPrivacy';
import AboutUs from '../screens/aboutus/AboutUs';
import AcountDetails from '../screens/register-new-account/AcountDetails';
import PersonalDetails from '../screens/register-new-account/PersonalDetails';
import SignIn from '../screens/sign-in';
import ForgotPassword from '../screens/forgot-password';
import MyAccount from '../screens/tab/myaccount';
import { SCREEN_WIDTH } from '../config';

const stackNavigator = createStackNavigator({
  MainScreen,
  RegisterNewAccount: AcountDetails,
  PersonalDetails,
  AboutUs,
  TermsAndPrivacy,
  SignIn,
  ForgotPassword,
  MyAccount,
});

const RootRouter = createDrawerNavigator({
  Home: stackNavigator,
}, {
  contentComponent: MainDrawer,
  drawerWidth: SCREEN_WIDTH * 0.8,
});
export default createAppContainer(RootRouter);
