import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
const WIDTH = Dimensions.get('window').width;
const Popup_ingredient = () => {
  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.textView}>
          <Text style={styles.text}>Sample modal header</Text>
          <Text style={styles.text}>Sample modal description</Text>
        </View>
      </View>
      <View style={styles.buttonsView}>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsView}>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>Ok</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    height: 150,
    width: WIDTH - 80,
    paddingTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  text: {
    margin: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  touchableOpacity: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  textView: {
    flex: 1,
    alignItems: 'center',
  },
  buttonsView: {
    width: '100%',
    flexDirection: 'row',
  },
});
export default Popup_ingredient;
