import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

interface IProps {
  name: string;
  focused: boolean;
}

const TabBarIcon: React.FC<IProps> = props => {
  return (
    <Icons
      name={props.name}
      size={26}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
};

export default TabBarIcon;
