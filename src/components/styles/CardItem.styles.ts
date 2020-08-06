import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const viewWidth = width * 0.8;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: width * 0.1,
    width: viewWidth,
    backgroundColor: 'white',
    borderRadius: 4,
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#f9f9f9',
    width: viewWidth - 2,
    height: 100,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  borderAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 25,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    width: 110,
    height: 110,
    borderRadius: 55,
    zIndex: 1,
  },
  defaultAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 30,
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    zIndex: 2,
  },
  avatarWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 30,
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    zIndex: 3,
  },
  avatar: {width: 100, height: 100, borderRadius: 50},
  infoTextWrapper: {marginTop: 60, marginBottom: 30, alignItems: 'center'},
  chooseButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  button: {
    borderTopWidth: 2,
    width: 35,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: 'gray',
    fontSize: 20,
  },
  detailText: {
    color: 'black',
    fontSize: 25,
  },
});
export default styles;
