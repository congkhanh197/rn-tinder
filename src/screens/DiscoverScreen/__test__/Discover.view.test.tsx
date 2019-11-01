import React from 'react';
import Discover, {IProps} from '../Discover.view';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
describe('Test discover view', () => {
  const props: IProps = {
    addFavoritePeopleAction: jest.fn(),
    favoriteList: [
      {
        dob: 'testDob',
        location: {
          street: 'test',
        },
        md5: 'testMd5',
        name: {
          first: 'mr',
          last: 'test',
          title: 'name',
        },
        password: 'test',
        phone: '0124',
        picture: 'test',
      },
    ],
    infos: [
      {
        dob: 'testDob',
        location: {
          street: 'test',
        },
        md5: 'testMd5',
        name: {
          first: 'mr',
          last: 'test',
          title: 'name',
        },
        password: 'test',
        phone: '0124',
        picture: 'test',
      },
    ],
    getPersonInfoAction: jest.fn(),
  };
  test('should render', () => {
    const tree = renderer.create(<Discover {...props} />);
    expect(tree).toMatchSnapshot();
  });
  test('should change choose icon', () => {
    const wrapper = shallow(<Discover {...props} />);
    wrapper
      .find('CardStack')
      .props()
      .onSwipedRight();
    expect(wrapper.find('CardStack').length).toEqual(1);
  });
});
