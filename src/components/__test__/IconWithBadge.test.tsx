import React from 'react';
import IconWithBadge, { IProps } from '../IconWithBadge';
import renderer from 'react-test-renderer';
describe('Test Card Item', () => {
  test('should render', () => {
    const props: IProps = {
        name: "testName",
        badgeCount: 1,
        color: "blue",
        size: 23
    }
    const tree = renderer.create(<IconWithBadge {...props}/>);
    expect(tree).toMatchSnapshot();
  });
});
