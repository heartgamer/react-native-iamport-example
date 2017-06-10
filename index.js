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
  Platform,
} from 'react-native';
import IAmPort from 'react-native-iamport';
import {Actions, Scene, Router, ActionConst} from 'react-native-router-flux';

// Components
import BillingPage from './components/BillingPage';
import BillingResultPage from './components/BillingResultPage';

export default class ReactNativeIAmPort extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Home" component={Home} title="메인화면" />
          <Scene key="BillingPage" component={BillingPage} title="결제화면" />
          <Scene key="BillingResultPage" component={BillingResultPage} title="결제결과" type={ActionConst.REPLACE} />
        </Scene>
      </Router>
    )
  }
}

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
    Actions.BillingPage({
      code: "가맹점식별코드",
      pg: (pgType == PG_TYPE.VBANK | PG_TYPE.CARD) ? PG_TYPE.NICE : pgType,
      pay_method: (pgType == PG_TYPE.VBANK) ? "vbank" : "card",
      app_scheme: "jeffgukangiamport",
      name: "주문명:결제테스트",
      amount: 1000,
      buyer_email: "iamport@siot.do",
      buyer_name: "jeffgukang",
      buyer_tel: "010-1234-5678",
      buyer_addr: "서울특별시 강남구 삼성동",
      buyer_postcode: "123-456",
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
    paddingTop:Platform.OS === 'ios'? 64 : 54, //nav bar height
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


AppRegistry.registerComponent('ReactNativeIAmPort', () => ReactNativeIAmPort);
