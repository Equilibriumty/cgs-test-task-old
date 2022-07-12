import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Modal, Portal, Title } from 'react-native-paper';
import { globalStyles } from '../theme/theme';
import { ITodo } from '../types/types';
import EditInputs from './EditInputs';

interface IEditTodoModal {
  todo: ITodo;
}


const EditTodoModal: React.FC<IEditTodoModal> = ({ todo }) => {
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
          <Title>Edit Todo</Title>
          <View>
            <EditInputs todo={todo} />
          </View>
          <Button onPress={hideModal}>Close</Button>
        </Modal>
      </Portal>
      <Button onPress={showModal}>Edit</Button>
    </>
  );
};

export default EditTodoModal;
