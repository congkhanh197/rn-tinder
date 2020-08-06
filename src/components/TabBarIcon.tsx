import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

export interface IProps {
  name: string;
  focused: boolean;
}

const TabBarIcon = (props: IProps) => {
  return (
    <Icons
      name={props.name}
      size={26}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
};

export default TabBarIcon;
