import React, { PropTypes } from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import IAmPort from 'react-native-iamport';


class BillingResultPage extends React.Component {
  static navigationOptions = {
    title: '결제 결과',
  }

  render() {
    const {
      billingResult
    } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Text>결제 {billingResult.result}</Text>
        <Text>{billingResult.result == 'success' ? billingResult.imp_uid : '결제가 실패하였습니다.'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default BillingResultPage;
