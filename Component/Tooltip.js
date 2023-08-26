import React from 'react';
import styles from './Tooltip.module.css';

const Tooltip = ({ target, position, style, text, image }) => {
  const tooltipStyle = {
    ...style,
    top: position === 'bottom' ? 'calc(100% + 10px)' : '-110%',
    left: position === 'right' ? 'calc(100% + 10px)' : position === 'left' ? '-110%' : '50%',
    transform: position === 'top' || position === 'bottom' ? 'translateX(-50%)' : '',
  };

  return (
    <div className={styles.tooltip} style={tooltipStyle}>
      {image && <img src={image} alt="Tooltip Image" />}
      <p>{text}</p>
    </div>
  );
};

export default Tooltip;
