import { StyleSheet } from 'react-native';

export const todoForm = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  input: {
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#841584',
    marginRight: 15,
    height: 40,
  },
  button: {
    height: 40,
    backgroundColor: '#841584',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});
