import React, { Component } from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';
import { View, Text, Badge, Button, Card, CardItem, Left, Right, Body} from 'native-base';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../../config';
import Timer from '../../live/Timer';
import Bidders from './Bidders';

class ProductDetails extends Component {
  state = {};

  render() {
    const { main } = this.props;
    const { name, price, status, winner, start_date, end_date, start_time, end_time } = main.productDetails;
    return (
      <ScrollView>
        <View style={styles.contentStyle}>
          <Card style={styles.cardStyle}>
            <CardItem style={{ borderBottomWidth: 0.5, borderBottomColor: '#757575', backgroundColor: '#f5f5f5' }}>
              <Left>
                <Body>
                  <Text style={{ fontWeight: 'bold' }}>{name}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderBottomWidth: 0.5, borderBottomColor: '#757575', padding: 0 }}>
              <Image
                source={{ uri: 'https://www.aayopayo.com/img/uploads/images/9a1158154dfa42caddbd0694a4e9bdc8.jpg' }}
                resizeMode="stretch"
                style={{
                  width: SCREEN_WIDTH * 0.3,
                  height: SCREEN_HEIGHT * 0.2,
                }}
              />
              <View>
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>Market Price:</Text>
                  {` NPR ${price}`}
                </Text>
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>Availability :</Text>
                In Stock
                </Text>
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>Product ID:</Text>
                  {` #${main.showProductDetails}`}
                </Text>
              </View>
            </CardItem>
            <CardItem style={{ borderBottomWidth: 0.5, borderBottomColor: '#757575' }}>
              <Text>
                Adding hens, especially younger birds, to an existing flock can lead to fighting and injury.
                When a rooster finds food, he may call other chickens to eat first.
              </Text>
            </CardItem>
            <CardItem style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <Timer endDate="2019-12-17" endTime="20:44:00" context={this.context} name={status} />
              <Button full success onPress={() => {}} style={{ marginTop: 10 }}>
                <Text>
                Play Now
                </Text>
              </Button>
            </CardItem>
          </Card>
          {/* {main.userId === null && (
            <View><Text style={{ color: 'red' }}> You dont have a bid yet</Text></View>

          )} */}
          <Bidders bidders={main.bidders} userId={main.userId} />
        </View>
      </ScrollView>
    );
  }
}
export default ProductDetails;
const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    padding: 10,
  },
  imageAndDetailsStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailStyles: {
    flex: 1,
  },
  cardStyle: {
    position: 'relative',
  },
});
