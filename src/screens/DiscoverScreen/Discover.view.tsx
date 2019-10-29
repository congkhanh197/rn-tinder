import React, {Component} from 'react';
import {Text, View} from 'react-native';

import CardStack, {Card} from 'react-native-card-stack-swiper';
import CardItem from '../../components/CardItem';
import LoadingCard from './components/LoadingCard';
import {formatPeopleInfo} from '../../utils/stringUtils';
import {IPeopleResponse} from '../../store/reducers/peopleInfoReducer';

interface IProps {
  addFavoritePeopleAction: any;
  favoriteList: IPeopleResponse[];
  infos: IPeopleResponse[];
  getPersonInfoAction: any;
}

const DiscoverView: React.FC<IProps> = props => {
  const onSwipedRight = (index: number) => {
    props.addFavoritePeopleAction([...props.favoriteList, props.infos[index]]);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'lightgray'}}>
      <CardStack
        key={props.infos.length}
        secondCardZoom={1}
        style={{marginVertical: 100}}
        verticalSwipe={false}
        renderNoMoreCards={() => <LoadingCard />}
        onSwipedRight={onSwipedRight}
        onSwiped={props.getPersonInfoAction}>
        {props.infos.map((peopleInfo, index) => {
          return (
            <Card key={index}>
              <CardItem {...formatPeopleInfo(peopleInfo)} />
            </Card>
          );
        })}
      </CardStack>
    </View>
  );
};

export default DiscoverView;
