import React, { Component } from "react";
import { Text, View } from "react-native";

import CardStack, { Card } from "react-native-card-stack-swiper";
import CardItem from "../../components/CardItem";
import LoadingCard from "./components/LoadingCard";
import { upperFirst, formatPeopleInfo } from "../../utils/stringUtils";
import moment from "moment";

export class DiscoverView extends Component {
  onSwipedRight = index => {
    this.props.addFavoritePeopleAction([
      ...this.props.favoriteList,
      this.props.infos[index]
    ]);
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "lightgray" }}>
        <CardStack
          secondCardZoom={1}
          style={{ marginVertical: 100 }}
          verticalSwipe={false}
          renderNoMoreCards={() => <LoadingCard />}
          onSwipedRight={this.onSwipedRight}
          onSwiped={this.props.getPersonInfoAction}
        >
          {this.props.infos.map((peopleInfo, index) => (
            <Card key={index}>
              <CardItem {...formatPeopleInfo(peopleInfo)} />
            </Card>
          ))}
        </CardStack>
      </View>
    );
  }
}

export default DiscoverView;
