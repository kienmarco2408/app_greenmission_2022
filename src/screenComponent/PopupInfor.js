import { View, Text, Modal, Animated, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Entypo, Feather } from '@expo/vector-icons';
import Slider from './Slider';

const PopupInfor = ({ visible, children }) => {
  const [showModal, setShowModal] = React.useState(visible);

  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };
  return (
    <Modal transparent visible={true}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={styles.modalcontainer}>
          <View style={{ marginTop: 110 }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                lineHeight: 27,
                color: '#3D7944',
                fontWeight: '700',
              }}
            >
              Nhựa
            </Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: 28, height: 28 }}>
                <Entypo name="check" />
              </View>
              <View>
                <Text>Các loại nhựa có thể tái chế</Text>
                <Text>Các loại nhựa có thể tái chế</Text>
              </View>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Feather name="x-circle" size={30} color="grey" />
            </View>
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
            shadowOpacity: 1,
            borderRadius: 20,
            position: 'absolute',
            bottom: 350,
          }}
        >
          <Slider />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalcontainer: {
    width: '70%',
    backgroundColor: 'white',
    height: 362,
    borderRadius: 20,
    marginTop: '50%',
  },
});
export default PopupInfor;
