import {
  retrieveFavoritePeopleData,
  saveFavoritePeopleData,
} from '../favoritePeopleSaga';
import {runSaga} from 'redux-saga';
import * as C from '../../constants';
import {retrieveData, storeData} from '../../../utils/persistUtils';

jest.mock('../../../utils/persistUtils.ts', () => ({
  storeData: jest.fn(),
  retrieveData: jest.fn(),
}));
describe('Test favorite people saga', () => {
  test('retrieve favorite people data', async () => {
    const dispatched:any[] = [];
    const action = {
      type: C.RETRIEVE_FAVORITE_PEOPLE_DATA,
    };
    retrieveData.mockImplementation(() =>
      Promise.resolve(
        JSON.stringify({
          [C.FAVORITE_DATA]: 'testData',
        }),
      )
    );
    await runSaga(
      {
        dispatch: (action: {type: string; payload: any}) =>
          dispatched.push(action),
      },
      retrieveFavoritePeopleData,
      action
    ).done;
    expect(retrieveData).toHaveBeenCalledWith(C.FAVORITE_DATA);
    expect(dispatched).toStrictEqual([
      {
        payload: 'testData',
        type: C.ADD_PERSON_FAVORITE,
      },
    ]);
  });
  test('retrieve favorite people data with error', async () => {
    const dispatched = [];
    const action = {
      type: C.RETRIEVE_FAVORITE_PEOPLE_DATA,
    };
    retrieveData.mockImplementation(() => Promise.reject(null));
    await runSaga(
      {
        dispatch: (action: {type: string; payload: any}) =>
          dispatched.push(action),
      },
      retrieveFavoritePeopleData,
      action,
    ).done;
    expect(retrieveData).toHaveBeenCalledWith(C.FAVORITE_DATA);
  });
  test('save favorite people data', async () => {
    const dispatched = [];
    const action = {
      type: C.ADD_PERSON_FAVORITE,
      payload: 'testData',
    };
    storeData.mockImplementation(() => Promise.resolve(true));
    await runSaga({}, saveFavoritePeopleData, action).done;
    expect(storeData).toHaveBeenCalledWith(
      C.FAVORITE_DATA,
      JSON.stringify({
        [C.FAVORITE_DATA]: action.payload,
      }),
    );
  });
  test('save favorite people data with error', async () => {
    const action = {
      type: C.ADD_PERSON_FAVORITE,
      payload: 'testData',
    };
    storeData.mockImplementation(() => Promise.reject());
    await runSaga({}, saveFavoritePeopleData, action).done;
    expect(storeData).toHaveBeenCalledWith(
      C.FAVORITE_DATA,
      JSON.stringify({
        [C.FAVORITE_DATA]: action.payload,
      }),
    );
  });
});
