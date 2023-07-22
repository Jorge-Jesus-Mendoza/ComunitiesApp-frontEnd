import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#e2191a',
  primaryDark: '#b51617',
  primaryLight: '#e2191a',
  secondary: '#e2191a',
  secondaryDark: '#b51617',
  secondaryLight: '#e2191a',
  error: '#dc3545',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // paddingTop: StatusBar.currentHeight,
    // justifyContent: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  cardTile: {
    marginTop: 10,
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    // fontStyle: 'italic',
  },
  cardDate: {
    marginHorizontal: 10,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    // fontStyle: 'italic',
  },
  cardContent: {
    marginTop: 5,
    marginHorizontal: 10,
    // fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic',
  },
  cardFirmContainer: {
    marginTop: 20,
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img_title: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  showMoreButton: {
    backgroundColor: 'white',
  },
  loginMenuContainerPortrait: {
    height: 150,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: 2,
  },
  loginMenuContainerLandscape: {
    height: 250,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 2,
  },
  loginMenuTitle: {
    marginHorizontal: 10,
    fontSize: 13,
    fontWeight: 'bold',
  },
  loginMenu: {
    flex: 1,
    alignItems: 'center',
    elevation: 5,
  },
  loginMenuTextContent: {
    textAlign: 'left',
    fontWeight: 'bold',
  },

  // Drawer Styles
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  bigButton: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  bigButtonText: {
    fontSize: 18,
    color: 'white',
  },
  avatarContainer: {
    alignItems: 'center',
    margin: 0,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  containerMenu: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
  buttonMenu: {
    marginVertical: 10,
  },
  textMenu: {fontSize: 25},
});
