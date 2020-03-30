import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

//Styling for the edit incident screen.
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // picker: {
  //   marginVertical: height / 100,
  //   marginHorizontal: width / 30,
  // },
  urgencypicker: {
    marginVertical: height / 100,
    marginHorizontal: width / 30,
    width: width / 4,
  },
  title: {
    marginLeft: width / 20,
    fontWeight: 'bold',
    fontSize: 25,
    color: '#fff',
  },
  avatarContainer: {
    backgroundColor: '#63a4ff',
    alignItems: 'center',
    paddingVertical: height / 30,
  },
  image: {
    height: height / 2.7,
    width: width * 0.95,
  },
  imageText: {
    marginLeft: width / 80,
    paddingBottom: height / 50,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  imageChangeText: {
    marginLeft: width / 80,
    paddingTop: height / 40,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  // textInput: {
  //   width: width * 0.9,
  //   marginLeft: width / 20,
  //   paddingTop: height / 300,
  // },
  textInputHeadingContainer: {
    marginLeft: width / 20,
    paddingTop: height / 40,
    paddingBottom: height / 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputHeading: {
    color: '#555',
    fontWeight: 'bold',
    fontSize: 17,
  },
  updateButton: {
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: width / 30,
    marginHorizontal: width / 3,
    marginVertical: height / 30,
    borderRadius: 17,
  },
  updateText: {
    color: 'white',
  },
  itemsRow: {
    flex: 10,
    flexDirection: 'row',
    paddingTop: height / 25,
    marginHorizontal: width / 20,
    alignItems: 'center',
  },
  // buttonView: {
  //   flexDirection: 'row',
  // },
  textInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    margin: 20,
  },
  // row: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  // },
  // name: {
  //   height: height / 20,
  //   width: width / 4.5,
  //   borderColor: 'black',
  //   borderWidth: 1,
  //   paddingLeft: width / 50,
  //   paddingTop: width / 50,
  // },
  checkbox: {
    flex: 1,
    // marginTop: 10,
  },
  checkboxTitle: {
    fontFamily: 'ProductSans-Regular',
    color: '#464646',
    marginLeft: 8,
    flex: 6,
  },
  itemName: {
    flex: 4,
    alignSelf: 'flex-start',
  },
  itemUnits: {
    flex: 3,
    alignContent: 'flex-end',
  },
  units: {
    height: height / 20,
    width: width / 4,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: width / 60,
    paddingTop: 6,
    fontSize: 16,
    flex: 1,
  },
});
