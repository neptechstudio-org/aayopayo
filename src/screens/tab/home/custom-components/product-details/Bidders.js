import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Text } from 'native-base';

const rowRenderHelper = (row, idx) => (
  <View key={idx} style={[styles.rowStyle, { backgroundColor: idx % 2 === 0 ? '#fff' : '#f5f5f5' }]}>
    <View style={[styles.columnStyle, { flex: 0.1 }]}><Text>{idx + 1 }</Text></View>
    <View style={[styles.columnStyle, { flex: 0.8 }]}><Text>{row.fullname}</Text></View>
    <View style={[styles.columnStyle, { flex: 0.1 }]}><Text>{row.bidamount}</Text></View>
  </View>
);

export default ({ bidders, userId }) => {
  return (
    <View style={{ flexDirection: 'column' }}>
      <View style={styles.rowStyle}>
        <View style={[styles.columnStyle, { flex: 0.1 }]}><Text>S.N</Text></View>
        <View style={[styles.columnStyle, { flex: 0.8 }]}><Text>Name</Text></View>
        <View style={[styles.columnStyle, { flex: 0.1 }]}><Text>Bid</Text></View>
      </View>
      <ScrollView style={{ flexGrow: 1, height: 200 }} nestedScrollEnabled>
        {bidders.map((b, idx) => rowRenderHelper(b, idx))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  tableStyle: { flexDirection: 'column' },
  rowStyle: { flexDirection: 'row', backgroundColor: '#f5f5f5' },
  columnStyle: { borderWidth: 0.5, borderColor: '#757575', padding: 5 },
});
