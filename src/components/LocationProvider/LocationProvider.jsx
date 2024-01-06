import { useState } from 'react';
import PropTypes from 'prop-types';
import LocationContext from 'contexts/LocationContext';

export default function LocationProvider({ children }) {
  const [item, setItem] = useState();

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LocationContext.Provider value={{ item, setItem }}>
      {children}
    </LocationContext.Provider>
  );
}

LocationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
