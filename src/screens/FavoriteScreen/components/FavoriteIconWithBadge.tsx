import React from 'react';
import {connect} from 'react-redux';
import IconWithBadge from '../../../components/IconWithBadge';
import {IPeopleResponse} from '../../../store/reducers/peopleInfoReducer';

interface IProps {
  name: string;
  color: string;
  size: number;
  peopleList: IPeopleResponse[];
}

const FavoriteIconWithBadge = (props: IProps) => {
  return <IconWithBadge {...props} badgeCount={props.peopleList.length} />;
};

const mapStateToProps = (state: {
  favoriteReducer: {peopleList: IPeopleResponse[]};
}) => ({
  peopleList: state.favoriteReducer.peopleList,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoriteIconWithBadge);
