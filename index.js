/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// Modules
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import IAmPort from 'react-native-iamport';
import { StackNavigator } from 'react-navigation';

// Components
import BillingPage from './components/BillingPage';
import BillingResultPage from './components/BillingResultPage';

const PG_TYPE = {
  NICE: 'nice',
  CARD: 'card',
  VBANK: 'vbank',
  KAKAO: 'kakao',
  PAYCO: 'payco',
}

class Home extends Component {
  static navigationOptions = {
    title: '메인화면',
  }

  _onPressCheck(pgType) {
    const { navigate } = this.props.navigation;

    navigate('BillingPage', {
      code: "yourcode",
      pg: (pgType == PG_TYPE.VBANK | PG_TYPE.CARD) ? PG_TYPE.NICE : pgType,
      pay_method: (pgType == PG_TYPE.VBANK) ? "vbank" : "card",
      app_scheme: "jeffgukangiamport",
      name: "주문명:결제테스트",
      amount: 1000,
      buyer_email: "iamport@siot.do",
      buyer_name: "jeffgukang",
      buyer_tel: "010-1234-5678",
      buyer_addr: "서울특별시 강남구 삼성동",
      buyer_postcode: "123-456"
    });
  }

  render() {
    // card, vbank
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 35, marginBottom: 30}}>결제금액:1000원 </Text>
        <TouchableOpacity onPress={() => this._onPressCheck(PG_TYPE.NICE)}>
          <Text style={styles.textButton}>신용카드 결제(나이스)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._onPressCheck(PG_TYPE.VBANK)}>
          <Text style={styles.textButton}>가상계좌 결제</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this._onPressCheck(PG_TYPE.PAYCO)}>
          <Text style={styles.textButton}>페이코 결제</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._onPressCheck(PG_TYPE.KAKAO)}>
          <Text style={styles.textButton}>카카오페이 결제</Text>
        </TouchableOpacity>
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
  textButton: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const ReactNativeIAmPort = StackNavigator({
  Home: { screen: Home },
  BillingPage: { screen: BillingPage },
  BillingResultPage: { screen: BillingResultPage},
});

AppRegistry.registerComponent('ReactNativeIAmPort', () => ReactNativeIAmPort);
