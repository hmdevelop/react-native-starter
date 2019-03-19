import * as React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import { observer } from 'mobx-react';
import { Navigation } from 'react-native-navigation';
import CodePush from 'react-native-code-push';

import { UIStore } from '../../stores/UIStore';
import { codePushConfig } from '../../utils/code-push';
import { COUNTER, IScreen } from '../../screens';
import { Button } from '../../components/button/Button';
import firebase from 'react-native-firebase';
import LinearGradient from 'react-native-linear-gradient';
import { getVar } from 'react-native-ueno-css-modules';

import { normalize } from '../../helpers/normalize.js';

const s = require('./Screen4.scss');

@CodePush(codePushConfig())
@observer
export class Screen4 extends React.Component<IScreen> {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Notifications',
        },
      },
      bottomTab: {
        text: 'Notifications',

        testID: 'bottomTabTestID',
        icon: require('../../assets/Notifications.png'),
        iconColor: '#979191',
        textColor: '#979191',
        selectedTextColor: '#F54B64',
        selectedIconColor: '#F54B64',

        fontSize: normalize(10),
      },
    };
  }

  public componentDidAppear() {
    UIStore.setComponentId(this.props.componentId);
  }

  public push = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'ueno-rns.Screen5',
        options: {},
      },
    });
  }

  public render() {
    return (
      <View style={s.host} testID='HOME_SCREEN'>
        <View style={s.content}>
          <Text style={s.text}>Notifications</Text>
          <Button
            title='Go to screen5'
            onPress={this.push}
            style={s.counter__button}
          />
          <Text style={s.text}>Screen4ss</Text>
          <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={{
              flex: 1,
              paddingLeft: 15,
              paddingRight: 15,
              borderRadius: 5,
              width: 200,
              height: 100,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Gill Sans',
                textAlign: 'center',
                margin: 10,
                color: '#ffffff',
                backgroundColor: 'transparent',
              }}
            >
              Sign in with Facebook
            </Text>
          </LinearGradient>
          <Text style={s.text}>Screen4ss</Text>
        </View>
      </View>
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
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
