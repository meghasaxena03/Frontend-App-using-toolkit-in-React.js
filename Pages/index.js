import React, { useState } from 'react';
import Tooltip from '../components/Tooltip';
import styles from '../styles/Home.module.css';

const positions = ['top', 'right', 'bottom', 'left'];

export default function Home() {
  const [tooltipData, setTooltipData] = useState(null);

  const handleTooltip = (target, position, style, text, image) => {
    setTooltipData({ target, position, style, text, image });
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        {positions.map((position) => (
          <button
            key={position}
            className={styles.button}
            onClick={() =>
              handleTooltip(
                position,
                position,
                { backgroundColor: '#FFD700', color: 'black' },
                'Tooltip Text',
                '/path/to/your/image.png'
              )
            }
          >
            {position} Button
          </button>
        ))}
      </div>
      {tooltipData && (
        <Tooltip
          target={tooltipData.target}
          position={tooltipData.position}
          style={tooltipData.style}
          text={tooltipData.text}
          image={tooltipData.image}
        />
      )}
    </div>
  );
}
