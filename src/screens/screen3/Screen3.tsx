import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  FlatList,
} from 'react-native';
import { observer } from 'mobx-react';
import { Navigation } from 'react-native-navigation';
import CodePush from 'react-native-code-push';

import { UIStore } from 'stores/UIStore';
import { codePushConfig } from 'utils/code-push';
import { COUNTER, IScreen } from 'screens';
import { Button } from 'components/button/Button';
import firebase from 'react-native-firebase';
import { ListItem } from 'react-native-elements';
import { getVar } from 'react-native-ueno-css-modules';

import { normalize } from '../../helpers/normalize.js';

const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
];

const s = require('./Screen3.scss');

@CodePush(codePushConfig())
@observer
export class Screen3 extends React.Component<IScreen> {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Screen3',
        },
      },
      bottomTab: {
        text: 'Screen3',
        badge: '2',
        badgeColor: 'red',
        testID: 'bottomTabTestID',
        icon: require('../../assets/polar-bear.png'),
        textColor: '#979191',
        selectedTextColor: getVar('white_'),

        fontSize: normalize(10),
      },
    };
  }

  public keyExtractor = (item, index) => index;

  public renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={{ source: { uri: item.avatar_url } }}
    />
  )

  public componentDidAppear() {
    UIStore.setComponentId(this.props.componentId);
  }

  public render() {
    return (
      <View style={s.host} testID='HOME_SCREEN'>
        <View style={s.content}>
          <Text style={s.text}>Screen3</Text>
          <FlatList
            data={list}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => item.name}
          />
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
});
