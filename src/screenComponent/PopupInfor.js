import { View, Text, Modal, Animated, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
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
          <View
            style={{
              shadowOpacity: 1,
              borderRadius: 20,
              position: 'absolute',
              bottom: 256,
              alignItems: 'center',
            }}
          >
            <Slider />
          </View>
          <View>
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
          <View style={{ marginTop: 'auto', alignItems: 'center' }}>
            <Feather name="x-circle" size={30} color="grey" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalcontainer: {
    width: '70%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    height: 362,
    borderRadius: 20,
    elevation: 20,
    marginTop: 200,
  },
});
export default PopupInfor;
