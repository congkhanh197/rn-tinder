import React from 'react';
import {View, FlatList} from 'react-native';
import CardItem from '../../components/CardItem';
import {formatPeopleInfo} from '../../utils/stringUtils';
import {IPeopleResponse} from '../../store/reducers/peopleInfoReducer';

export interface IProps {
  peopleList: IPeopleResponse[];
}
const FavoriteView = (props: IProps) => {
  return (
    <View style={{flex: 1, backgroundColor: 'lightgray'}}>
      <FlatList
        data={props.peopleList}
        renderItem={(data: {item: IPeopleResponse}) => {
          return <CardItem {...formatPeopleInfo(data.item)} />;
        }}
        keyExtractor={item => item.md5}
      />
    </View>
  );
};

export default FavoriteView;
