import { useEffect, useRef } from 'react';
import L from 'leaflet';
import PropTypes from 'prop-types';

export default function PanelContainer({ children }) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      L.DomEvent.disableClickPropagation(ref.current);
      L.DomEvent.disableScrollPropagation(ref.current);
    }
  });

  return <div ref={ref}>{children}</div>;
}

PanelContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
