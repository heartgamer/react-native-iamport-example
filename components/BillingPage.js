import React, { PropTypes } from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import IAmPort from 'react-native-iamport';


class BillingPage extends React.Component {
  static navigationOptions = {
    title: '결제화면',
  }

  // 결제 결과에 따른 처리
  _onPaymentResultReceive(response) {
    console.log('_onPaymentResultReceive');
    console.log(response);
    if (response.result == "success") {
      alert(response.imp_uid);
    } else {
      alert('결제가 실패하였습니다. 다시 시도해주세요');
    }
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
    } = this.props.navigation.state.params;

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
