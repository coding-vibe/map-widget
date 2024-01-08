import { useState } from 'react';
import PropTypes from 'prop-types';
import AdvertisementContext from 'contexts/AdvertisementContext';
import advertisements from './advertisements';

export default function AdvertisementProvider({ children }) {
  const [items, setItems] = useState(advertisements);

  const handleAddItem = (newItem) => {
    setItems((prevState) => [...prevState, newItem]);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AdvertisementContext.Provider value={{ items, handleAddItem }}>
      {children}
    </AdvertisementContext.Provider>
  );
}

AdvertisementProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
