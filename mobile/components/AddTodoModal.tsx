import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Modal, Portal, Title } from 'react-native-paper';
import { globalStyles } from '../theme/theme';
import AddInputs from './AddInputs';

const AddTodoModal = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={globalStyles.containerStyle}
        >
          <Title>Create Todo</Title>
          <View>
            <AddInputs />
          </View>
          <Button onPress={hideModal}>Close</Button>
        </Modal>
      </Portal>
      <Button onPress={showModal}>+</Button>
    </>
  );
};

export default AddTodoModal;
