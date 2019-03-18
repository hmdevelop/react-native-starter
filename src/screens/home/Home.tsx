import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Linking,
  ScrollView,
} from 'react-native';
import { observer } from 'mobx-react';
import { Navigation } from 'react-native-navigation';
import CodePush from 'react-native-code-push';

import { UIStore } from '../../stores/UIStore';
import { codePushConfig } from '../../utils/code-push';
import { COUNTER, IScreen } from '../../screens';
import { Button } from '../../components/button/Button';
import firebase from 'react-native-firebase';

import { getVar } from 'react-native-ueno-css-modules';
import { normalize } from '../../helpers/normalize.js';

const s = require('./Home.scss');

@CodePush(codePushConfig())
@observer
export class Home extends React.Component<IScreen> {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Home',
        },
      },
      bottomTab: {
        text: 'Home',
        badge: '2',
        badgeColor: 'red',
        testID: 'bottomTabTestID',
        icon: require('../../assets/Home.png'),
        textColor: '#979191',
        selectedTextColor: getVar('white_'),

        fontSize: normalize(10),
      },
    };
  }

  public componentDidAppear() {
    UIStore.setComponentId(this.props.componentId);
  }

  public onCounterScreenPress = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: COUNTER,
      },
    });
  }

  public drawer = () => {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    });
  }

  public _goToURL = () => {
    Linking.openURL('https://github.com/hmdevelop/rigel-app');
  }

  public render() {
    const Banner = firebase.admob.Banner;
    const AdRequest = firebase.admob.AdRequest;
    const request = new AdRequest();
    const unitId =
      Platform.OS === 'ios'
        ? 'ca-app-pub-3940256099942544/2934735716'
        : 'ca-app-pub-3940256099942544/6300978111';
    return (
      <ScrollView style={s.host} testID='HOME_SCREEN'>
        <View style={s.content}>
          <Text style={s.text}>Welcome Home </Text>
          <Text style={s.text}> Rigel-Native-Eta</Text>
        </View>

        <Banner
          unitId={unitId}
          size={'SMART_BANNER'}
          request={request.build()}
          onAdLoaded={() => {
            console.log('Advert loaded');
          }}
        />
        <Image source={require('../../assets/Post.png')} />
        <Image source={require('../../assets/Post2.png')} />
        <Image source={require('../../assets/Post.png')} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    width: 300,
    height: 100,
  },
});
