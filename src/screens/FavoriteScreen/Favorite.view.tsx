import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import CardItem from "../../components/CardItem";
import { formatPeopleInfo } from "../../utils/stringUtils";


export class FavoriteView extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "lightgray" }}>
        <FlatList
          data={this.props.peopleList}
          renderItem={({ item }) => {
            return (
              <CardItem
                {...formatPeopleInfo(item)}
              />
            );
          }}
          keyExtractor={item => item.md5}
        />
      </View>
    );
  }
}

export default FavoriteView;
