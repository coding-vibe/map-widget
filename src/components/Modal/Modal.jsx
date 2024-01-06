import { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import LocationContext from 'contexts/LocationContext';

const INITIAL_FORM_VALUES = {
  name: '',
  description: '',
};

const VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string().required('Required'),
  description: yup.string().required('Required'),
});

export default function Modal({ coordinates, isOpen, onClose }) {
  const { handleAddItem } = useContext(LocationContext);
  const handleSubmit = (values, { setSubmitting }) => {
    handleAddItem({ coordinates, ...values });
    setSubmitting(false);
    onClose();
  };

  return (
    <Dialog open={isOpen}>
      <DialogTitle>Подати оголошення</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={INITIAL_FORM_VALUES}
          onSubmit={handleSubmit}
          validationSchema={VALIDATION_SCHEMA}>
          {() => (
            <Form>
              <Field
                component={TextField}
                label='Назва'
                name='name'
              />
              <Field
                component={TextField}
                label='Опис'
                name='description'
              />
              <Button
                type='submit'
                variant='contained'>
                Відправити
              </Button>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}

Modal.defaultProps = {
  coordinates: null,
};

Modal.propTypes = {
  coordinates: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
