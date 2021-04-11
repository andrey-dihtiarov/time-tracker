import React from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogActions, DialogContent, DialogContentText } from '@material-ui/core'

import { DialogTitle, CloseButton, AgreementButton } from './Modal.styles'

const Modal = ({ isOpened, onClose, onSuccess, title, message, showAgreementButton }) => (
  <Dialog open={isOpened} onClose={onClose} fullWidth>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{message}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <CloseButton onClick={onClose} color="primary">
        Close
      </CloseButton>
      {showAgreementButton && (
        <AgreementButton onClick={onSuccess} color="primary">
          OK
        </AgreementButton>
      )}
    </DialogActions>
  </Dialog>
)

Modal.propTypes = {
  isOpened: PropTypes.bool,
  showAgreementButton: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

Modal.defaultProps = {
  isOpened: false,
  showAgreementButton: false,
}

export default Modal
