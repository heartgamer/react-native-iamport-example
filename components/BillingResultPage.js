import React, { PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import IAmPort from 'react-native-iamport';

class BillingResultPage extends React.Component {
  static navigationOptions = {
    title: '결제 결과',
  }

  render() {
    const {
      billingResponse
    } = this.props;

    return (
      <View style={styles.container}>
        <Text>결제 {billingResponse.result}</Text>
        <Text>{billingResponse.result == 'success' ? billingResponse.imp_uid : billingResponse.original}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:Platform.OS === 'ios'? 64 : 54, //nav bar height
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default BillingResultPage;
