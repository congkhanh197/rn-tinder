import {getPeopleInfo} from '../peopleInfoSaga';
import {runSaga} from 'redux-saga';
import * as C from '../../constants';
import Api from '../../../api';

jest.mock('../../../api');

const getPeopleInfoMock = Api.getPeopleInfo as jest.Mock<any>
describe('Test people info saga', () => {
  test('get people data', async () => {
    const dispatched: any[] = [];
    const action = {
      type: C.GET_PERSON_INFO_REQUEST,
    };
    getPeopleInfoMock.mockImplementation(() =>
      Promise.resolve({
        data: {
          results: [
            {
              user: 'testData',
            },
          ],
        },
      }),
    );
    await runSaga(
      {
        dispatch: (action: {type: string; payload: any}) =>
          dispatched.push(action),
      },
      getPeopleInfo,
      action,
    ).done;
    expect(Api.getPeopleInfo).toHaveBeenCalled();
    expect(dispatched).toStrictEqual([
      {
        payload: 'testData',
        type: C.GET_PERSON_INFO_SUCCESS,
      },
    ]);
    getPeopleInfoMock.mockRestore()
  });
  test('get people data with error', async () => {
    const dispatched: any[] = [];
    const action = {
      type: C.GET_PERSON_INFO_REQUEST,
    };
    getPeopleInfoMock.mockImplementation(() => Promise.reject('error'));
    await runSaga(
      {
        dispatch: (action: {type: string; payload: any}) =>
          dispatched.push(action),
      },
      getPeopleInfo,
      action,
    ).done;
    expect(Api.getPeopleInfo).toHaveBeenCalled();
    expect(dispatched).toStrictEqual([
      {
        payload: 'error',
        type: C.GET_PERSON_INFO_FAILURE,
      },
    ]);
  });
});
