import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles/CardItem.styles';

const COLORS = {
  enable: 'green',
  disable: 'gray',
};

interface IProps {
  picture: string;
  info: {
    title: string;
    value: string;
    iconName: string;
  }[];
}

const CardItem: React.FC<IProps> = props => {
  const [chooseIndex, setChooseIndex] = useState(0);
  const {picture, info} = props;
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.borderAvatar} />
      <View style={styles.defaultAvatar}>
        <Image
          source={{
            uri:
              'https://i1.wp.com/www.mvhsoracle.com/wp-content/uploads/2018/08/default-avatar.jpg',
          }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.avatarWrapper}>
        <Image source={{uri: picture}} style={styles.avatar} />
      </View>
      <View style={styles.infoTextWrapper}>
        <Text style={styles.titleText}>{info[chooseIndex].title}</Text>
        <Text style={styles.detailText}>{info[chooseIndex].value}</Text>
      </View>
      <View style={styles.chooseButtonWrapper}>
        {info.map((item, index) => (
          <TouchableOpacity
            style={[
              {
                borderTopColor:
                  chooseIndex === index ? COLORS.enable : 'transparent',
              },
              styles.button,
            ]}
            key={item.title}
            onPress={() => {
              setChooseIndex(index);
            }}>
            <FontAwesome
              name={item.iconName}
              size={30}
              color={chooseIndex === index ? COLORS.enable : COLORS.disable}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CardItem;
