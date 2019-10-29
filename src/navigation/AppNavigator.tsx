import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {Platform} from 'react-native';
import Colors from '../constants/Colors';

import TabBarIcon from '../components/TabBarIcon';
import DiscoverScreen from '../screens/DiscoverScreen/Discover.screen';
import FavoriteScreen from '../screens/FavoriteScreen/Favorite.screen';
import FavoriteIconWithBadge from '../screens/FavoriteScreen/components/FavoriteIconWithBadge';

const DiscoverStack = createStackNavigator({
  Discover: DiscoverScreen,
});
DiscoverStack.navigationOptions = {
  tabBarIcon: (param: {focused: boolean}) => (
    <TabBarIcon
      focused={param.focused}
      name={Platform.OS === 'ios' ? 'ios-albums' : 'md-albums'}
    />
  ),
};

const FavoriteStack = createStackNavigator({
  Favorite: FavoriteScreen,
});
FavoriteStack.navigationOptions = {
  tabBarIcon: (param: {focused: boolean}) => (
    <FavoriteIconWithBadge
      name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
      size={26}
      color={param.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};

const TabNavigator = createBottomTabNavigator(
  {
    DiscoverStack,
    FavoriteStack,
  },
  {
    tabBarOptions: {showLabel: false},
  },
);

export default createAppContainer(TabNavigator);
