import React, {Component} from 'react';
import DiscoverView from './Discover.view';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';

import {getPersonInfoAction} from '../../store/actions';
import {addFavoritePeopleAction} from '../../store/actions/favoriteAction';

interface IProps {}

export class DiscoverScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    props.getPersonInfoAction();
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <DiscoverView {...this.props} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    loading: state.peopleInfoReducer.loading,
    error: state.peopleInfoReducer.error,
    infos: state.peopleInfoReducer.infos,
    favoriteList: state.favoriteReducer.peopleList,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getPersonInfoAction: () => dispatch(getPersonInfoAction()),
  addFavoritePeopleAction: (peopleInfo) =>
    dispatch(addFavoritePeopleAction(peopleInfo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiscoverScreen);
