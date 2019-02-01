import React, { Component } from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';
import { View, Text, Button, Badge, Icon } from 'native-base';
import DateTimeFormator from '../../../../../common/functions/DateTimeFormator';
import Timer from '../../live/Timer';
import Bidders from './Bidders';

class ProductDetails extends Component {
  state = {};

  onTimerFinish = () => {
    const { main, fetchProductDetails } = this.props;
    fetchProductDetails(main.showProductDetails);
  }

  render() {
    const { main, updateModalValue } = this.props;
    const { name, price, status, winner, start_date, end_date, start_time, end_time, image} = main.productDetails;
    return (
      <ScrollView>
        <View style={styles.contentStyle}>
          <View style={{ elevation: 2 }}>
            <Image
              source={{ uri: image }}
              resizeMode="stretch"
              style={{
                width: '100%',
                height: 200,
                alignSelf: 'center',
              }}
            />
          </View>
          <View style={{ margin: 5 }}>
            <Text style={{ fontWeight: '100', color: 'orange' }}>
              {name}
            </Text>
            <Text>
              {`NPR ${price}`}
            </Text>
            {status === 'up' && <Text style={{ fontSize: 15 }}>{`Start at : ${DateTimeFormator(start_date, start_time, 'YYYY-MM-DD hh:mm a')}`}</Text>}
            <Text>
              <Text style={{ color: '#0000009f' }}>Product ID:</Text>
              {` #${main.showProductDetails}`}
            </Text>
            { status === 'end'
            && (
              <View>
                <Text style={{ fontSize: 15 }}>{`Ended On: ${DateTimeFormator(end_date, end_time, 'YYYY-MM-DD hh:mm a')} NPT`}</Text>
                <Text>This product is closed</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 }}>
                  <Text style={{ fontSize: 30 }}>Winner:</Text>
                  <View style={{ borderRadius: 5, backgroundColor: 'green', padding: 10, marginLeft: 10 }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>{winner}</Text>
                  </View>
                </View>
              </View>
            )
          }
          </View>
          <View style={{ borderWidth: 1, borderColor: '#757575', padding: 5, backgroundColor: '#f5f5f5', margin: 5 }}>
            <Text>{main.productDetails.details ? main.productDetails.details : 'Product detials not available'}</Text>
          </View>
          {status === 'live'
            && (
              <View style={{ alignSelf: 'center' }}>
                <Timer endDate={end_date} endTime={end_time} context={this.context} name={status} {...this.props} onTimerFinish={this.onTimerFinish} />
              </View>
            )
            }
          {status === 'live'
          && (
            <Button
              disabled={(main.myBidAmount === null && main.userId === null) || (main.myBidAmount !== null && main.userId !== null)}
              full
              success
              onPress={() => {
                updateModalValue('addBidSuccess', '');
                updateModalValue('bidError', '');
                updateModalValue('modalPlaynowShow', true);
              }}
              style={{ marginTop: 10 }}
            >
              <Text>
                {main.myBidAmount !== null ? `You already have bid for this product\n Your bid amount : ${main.myBidAmount}` : 'Playnow'}
              </Text>
            </Button>
          )
          }
          { status !== 'up'
        && (
          <View style={{ marginTop: 10, marginBottom: 20 }}>
            {main.bidders.length !== 0
              ? (
                main.userId && (
                  <View>
                    <Text style={{ marginBottom: 20 }}>{`Total number of bidders: ${main.bidders.length}`}</Text>
                    <Bidders bidders={main.bidders} userId={main.userId} />
                  </View>
                )
              )
              : main.userId && (<Text>{`Total number Of bidders: ${main.bidders.length}`}</Text>)
            }
            {!main.userId && (
              <Text style={{ color: 'red' }}>
                <Icon name="warning" style={{ color: 'red' }} />
                {`   Please login to Play and see bidding details`} {/* eslint-disable-line */}
              </Text>
            )}
          </View>
        )}
        </View>
      </ScrollView>
    );
  }
}
export default ProductDetails;
const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    padding: 5,
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
