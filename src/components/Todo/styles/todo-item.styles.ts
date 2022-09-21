import { StyleSheet } from 'react-native';

export const todoItem = StyleSheet.create({
  block: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#8f8f8f',
    marginBottom: 5,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    flex: 0,
  },
  btns: {
    flexDirection: 'row',
  },
  completed: {
    position: 'absolute',
    top: 20,
    height: 3,
    width: '100%',
    backgroundColor: '#8f8f8f',
  },
  text: {
    marginHorizontal: 15,
    color: '#000000',
  },
  completedBtn: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#841584',
    height: 30,
    padding: 5,
  },
  removeBtn: {
    width: 30,
    height: 30,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#841584',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  editContainer: {
    flexDirection: 'row',
  },
  editInput: {
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#841584',
    marginRight: 15,
    height: 40,
  },
  editBtn: {
    height: 40,
    backgroundColor: '#841584',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editBtnText: {
    color: '#ffffff',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});
