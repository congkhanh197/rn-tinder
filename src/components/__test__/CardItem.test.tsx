import React from 'react';
import CardItem, {IPeopleInfo} from '../CardItem';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
describe('Test Card Item', () => {
  test('should render', () => {
    const props: IPeopleInfo = {
      picture: 'test',
      info: [
        {
          title: 'testTitle',
          value: 'testValue',
          iconName: 'testIcon',
        },
      ],
    };
    const tree = renderer.create(<CardItem {...props} />);
    expect(tree).toMatchSnapshot();
  });
  test('should change choose icon', () => {
    const props: IPeopleInfo = {
      picture: 'test',
      info: [
        {
          title: 'testTitle',
          value: 'testValue',
          iconName: 'testIcon',
        },
        {
          title: 'testTitle1',
          value: 'testValue1',
          iconName: 'testIcon1',
        },
      ],
    };
    const wrapper = shallow(<CardItem {...props} />);
    wrapper
      .find('TouchableOpacity')
      .first()
      .props()
      .onPress();
    expect(wrapper.find('TouchableOpacity').length).toEqual(2);
  });
});
