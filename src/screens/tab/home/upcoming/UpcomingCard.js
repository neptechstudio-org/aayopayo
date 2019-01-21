import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Text, Left, Body, Button, Right } from 'native-base';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config';

const UpcomingCard = ({ product }) => {
  // console.log(product);
  const { name, image } = product;
  return (
    <Card>
      <CardItem cardBody>
        <Image
          source={{ uri: image }}
          resizeMode="contain"
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: SCREEN_WIDTH * 0.8,
            height: SCREEN_HEIGHT * 0.4,
          }}
        />
      </CardItem>
      <CardItem>
        <Left>
          <Body>
            <Text>
              {name}
            </Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Left>
          <Body>
            <Button danger full>
              <Text>
                Buy
              </Text>
            </Button>
          </Body>
        </Left>
        <Right>
          <Body>
            <Button danger full>
              <Text>
              Details
              </Text>
            </Button>
          </Body>
        </Right>
      </CardItem>
    </Card>
  );
};
export default UpcomingCard;
