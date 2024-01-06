import { useState } from 'react';
import PropTypes from 'prop-types';
import LocationContext from 'contexts/LocationContext';

export default function LocationProvider({ children }) {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems((prevState) => [...prevState, newItem]);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LocationContext.Provider value={{ items, handleAddItem }}>
      {children}
    </LocationContext.Provider>
  );
}

LocationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
