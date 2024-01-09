import { useContext, useState } from 'react';
import { useMapEvents } from 'react-leaflet';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import ImageField from 'components/ImageField';
import AdvertisementContext from 'contexts/AdvertisementContext';

const INITIAL_FORM_VALUES = {
  name: '',
  description: '',
  image: '',
};

const VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string().required("Обов'язкове поле"),
  description: yup.string().required("Обов'язкове поле"),
  image: yup.string().required("Обов'язкове поле"),
});

export default function AddAdvertisement() {
  const { handleAddItem } = useContext(AdvertisementContext);
  const [coordinates, setCoordinates] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useMapEvents({
    click(e) {
      setIsOpen(true);
      setCoordinates(e.latlng);
    },
  });

  const handleSubmit = (values) => {
    handleAddItem({ coordinates, ...values });
    setIsOpen(false);
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
                multiline
                rows={4}
              />
              <Field
                component={ImageField}
                label='Зображення'
                name='image'
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
