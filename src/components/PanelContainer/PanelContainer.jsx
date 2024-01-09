import { useEffect, useRef } from 'react';
import L from 'leaflet';
import PropTypes from 'prop-types';

function PanelContainer({ children, className }) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      L.DomEvent.disableClickPropagation(ref.current);
      L.DomEvent.disableScrollPropagation(ref.current);
    }
  });

  return (
    <div
      className={className}
      ref={ref}>
      {children}
    </div>
  );
}

PanelContainer.defaultProps = {
  className: null,
};

PanelContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default PanelContainer;
