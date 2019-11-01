import React, {Component} from 'react';
import DiscoverView from './Discover.view';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';

import {getPersonInfoAction} from '../../store/actions';
import {addFavoritePeopleAction} from '../../store/actions/favoriteAction';
import {IPeopleResponse} from '../../store/reducers/peopleInfoReducer';

interface IProps {
  loading: boolean;
  error: any;
  infos: IPeopleResponse[];
  favoriteList: IPeopleResponse[];
  addFavoritePeopleAction: any;
  getPersonInfoAction: any;
}
class DiscoverScreen extends Component<IProps> {
  static navigationOptions = {
    header: null,
  };
  constructor(props: any) {
    super(props);
    props.getPersonInfoAction();
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <DiscoverView
          infos={this.props.infos}
          favoriteList={this.props.favoriteList}
          addFavoritePeopleAction={this.props.addFavoritePeopleAction}
          getPersonInfoAction={this.props.getPersonInfoAction}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: {
  peopleInfoReducer: {loading: boolean; error: any; infos: IPeopleResponse[]};
  favoriteReducer: {peopleList: IPeopleResponse[]};
}) => {
  return {
    loading: state.peopleInfoReducer.loading,
    error: state.peopleInfoReducer.error,
    infos: state.peopleInfoReducer.infos,
    favoriteList: state.favoriteReducer.peopleList,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getPersonInfoAction: () => dispatch(getPersonInfoAction()),
  addFavoritePeopleAction: (peopleInfo: IPeopleResponse) =>
    dispatch(addFavoritePeopleAction(peopleInfo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiscoverScreen);
