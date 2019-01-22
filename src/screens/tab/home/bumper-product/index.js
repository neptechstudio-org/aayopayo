import React, { Component } from 'react';
import { Image } from 'react-native';
import { View, Text } from 'native-base';
import { SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../../config';

export default () => {
  return (
    <View style={{
      width: SCREEN_WIDTH,
    }}
    >
      <View style={{
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        position: 'absolute',
        zIndex: 5,
        backgroundColor: '#FFA500',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
      }}
      >
        <Text style={{ color: '#fff', fontSize: 15, marginRight: 5, marginLeft: 5 }}>Bumper Product</Text>
      </View>
      <Image
        source={{ uri: 'https://www.aayopayo.com/img/uploads/images/70efdf2ec9b086079795c442636b55fb.jpg' }}
        style={{
          height: 300,
          width: SCREEN_WIDTH * 0.98,
          borderWidth: 1,
          borderColor: '#757575',
          alignSelf: 'center',
        }}
      />
    </View>
  );
};
