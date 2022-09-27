import { View, Text, Modal, Animated, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

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
          alignItems: 'center ',
        }}
      >
        <View style={styles.modalcontainer}></View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalcontainer: {
    width: '80%',
    backgroundColor: 'white',
  },
});
export default PopupInfor;
