import React from 'react';
import { TouchableOpacity, View, Text, Linking } from 'react-native';
import { Icon, Badge } from 'native-base';
import { APP_COLOR } from '../../../../config';

const pressHandler = (navigationState, navigation, props, content) => {
  switch (navigationState) {
    case 'OrderNotification':
      navigation.closeDrawer();
      props.fetchNotifications();
      break;
    case 'orderHistory':
      props.buttonPressHandler(content);
      break;
    case 'ProfleSetting':
      break;
    case 'DeliveryAddress':
      props.buttonPressHandler(content);
      break;
    case 'AboutUs':
      Linking.openURL('https://www.aayopayo.com/about.php');
      break;
    case 'SignIn':
      navigation.navigate(navigationState);
      break;
    case 'SignOut':
      props.buttonPressHandler(content);
      break;
    default:
      return null;
  }
};

const touchableElement = (content, id, navigation, props) => {
  const navigationState = content.label.replace(/\s/g, '');
  return (
    <TouchableOpacity
      onPress={() => pressHandler(navigationState, navigation, props, content)}
      key={content.label}
      style={{
        padding: 15,
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          {content.iconLeft && (
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 40,
            height: 40,
            borderRadius: 40,
            backgroundColor: APP_COLOR,
          }}
          >
            {id === 0 && props.modal.notificationReadStatus && ( //eslint-disable-line
            <View style={{ position: 'absolute', width: 60, height: 60 }}>
              <Badge
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'red',
                  alignSelf: 'flex-end',
                  height: 20,
                }}
              >
                <Text style={{ color: '#fff', fontSize: 10 }}>1</Text>
              </Badge>
            </View>
            )
          }
            <Icon
              name={content.iconLeft}
              style={{
                fontSize: 20,
                color: '#FFF',
              }}
            />
          </View>
          )}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginLeft: 10,
            }}
          >
            <Text style={{ fontWeight: 'bold' }}>{content.label}</Text>
          </View>
        </View>
        {content.iconRight && (
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: APP_COLOR,
          }}
        >
          <Icon
            name={content.iconRight}
            style={{
              fontSize: 20,
              color: '#FFF',
            }}
          />
        </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default touchableElement;
