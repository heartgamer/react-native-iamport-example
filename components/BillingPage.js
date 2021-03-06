import React, { PropTypes } from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import IAmPort from 'react-native-iamport';
import { Actions, ActionConst } from 'react-native-router-flux';

class BillingPage extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: '결제화면',
  });

  // 결제 결과에 따른 처리
  _onPaymentResultReceive(response) {
    console.log('_onPaymentResultReceive');
    console.log(response);
    Actions.BillingResultPage({
      billingResponse: response,
      type: ActionConst.REPLACE,
    });
  }

  render() {
    const {
      code,
      pg,
      pay_method,
      app_scheme,
      name,
      amount,
      buyer_email,
      buyer_name,
      buyer_tel,
      buyer_addr,
      buyer_postcode,
    } = this.props;

    return (
      <View style={styles.container}>
        <IAmPort
          style={styles.iamport}
          onPaymentResultReceive={this._onPaymentResultReceive}
          params={{
            code: code,
            pg: pg,
            pay_method: pay_method,
            app_scheme: app_scheme,
            name: name,
            amount: amount,
            buyer_email: buyer_email,
            buyer_name: buyer_name,
            buyer_tel: buyer_tel,
            buyer_addr: buyer_addr,
            buyer_postcode: buyer_postcode
          }}>
        </IAmPort>
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
  iamport: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});

export default BillingPage;
