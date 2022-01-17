import React from 'react';
import { Modal } from 'react-native';
import PropTypes from 'prop-types';

const MyModal = ({children, transparent, visible, onRequestClose, style}) => {
    return (
        <Modal
          animationType="slide"
          transparent={transparent}
          visible={visible}
          onRequestClose={onRequestClose}
          style={style}
        >
          {children}
        </Modal>
    )
}

export default MyModal;

MyModal.propTypes = {
  children:PropTypes.any,
  transparent:PropTypes.bool,
  visible:PropTypes.bool,
  onRequestClose:PropTypes.func,
  style:PropTypes.any,
};

MyModal.defaultProps = {
  children:null,
  transparent:false,
  visible:false,
  onRequestClose:() => {},
  style:{},
};