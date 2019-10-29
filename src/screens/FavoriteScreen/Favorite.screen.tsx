import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import FavoriteView from './Favorite.view';
import {IPeopleResponse} from '../../store/reducers/peopleInfoReducer';

export class FavoriteScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <FavoriteView {...this.props} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: {
  favoriteReducer: {peopleList: IPeopleResponse[]};
}) => ({
  peopleList: state.favoriteReducer.peopleList,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoriteScreen);
