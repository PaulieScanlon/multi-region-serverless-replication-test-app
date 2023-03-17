import React from 'react';
import PropTypes from 'prop-types';

const width = 105;

const SvgImage = ({ buildings }) => {
  const attributes = (type) => {
    switch (type) {
      case 'skyscraper':
        return {
          height: 280,
        };
      case 'condo':
        return {
          height: 180,
        };
      case 'office':
        return {
          height: 80,
        };
    }
  };

  return (
    <svg viewBox='0 0 533 300' role='presentation' className='bg-gray-50'>
      {buildings.map((building, index) => {
        const { type, color } = building;
        return (
          <rect
            key={index}
            width={width}
            x={width * index}
            y={300 - attributes(type).height}
            {...attributes(type)}
            style={{
              fill: color,
            }}
          />
        );
      })}
    </svg>
  );
};

SvgImage.propTypes = {
  /** Array of buildings */
  buildings: PropTypes.any,
};

export default SvgImage;
