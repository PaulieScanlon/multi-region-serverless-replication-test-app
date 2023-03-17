import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BuildingBlock = ({
  id,
  type,
  color,
  onCreate,
  onUpdate,
  onRemove,
  removeIsLoading,
  updateIsLoading,
  createIsLoading,
}) => {
  const [colorValue, setColorValue] = useState(color);
  const [typeValue, setTypeValue] = useState(type);

  return (
    <div className='flex gap-2 items-end'>
      <div className='flex flex-col grow'>
        <label htmlFor='type'>Type</label>
        <select name='type' value={typeValue} onChange={(event) => setTypeValue(event.target.value)}>
          <option hidden value='choose'>
            choose type
          </option>
          <option value='skyscraper'>skyscraper</option>
          <option value='condo'>condo</option>
          <option value='office'>office</option>
        </select>
      </div>
      <div>
        <label htmlFor='color'>Color</label>
        <input
          className='p-0 h-9'
          name='color'
          type='color'
          value={colorValue}
          onChange={(event) => setColorValue(event.target.value)}
        />
      </div>
      <div className='flex grow gap-2 justify-end'>
        <button
          type='button'
          className={`${
            id
              ? 'border border-blue-600 text-blue-600  disabled:border-gray-200'
              : 'bg-green-500 text-white disabled:bg-gray-200'
          }  p-2 rounded   disabled:text-gray-400 disabled:cursor-not-allowed`}
          disabled={createIsLoading || updateIsLoading || typeValue === 'choose type' || !colorValue}
          onClick={() => {
            id ? onUpdate(id, typeValue, colorValue) : onCreate(typeValue, colorValue);
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d={
                id
                  ? 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
                  : 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
              }
            />
          </svg>
        </button>
        <button
          type='button'
          className='border border-red-500 text-red-600 p-2 rounded disabled:border-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed'
          disabled={removeIsLoading}
          onClick={() => {
            onRemove(id);
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

BuildingBlock.defaultProps = {
  id: null,
  type: 'choose type',
  color: '#F7F7F7',
};

BuildingBlock.propTypes = {
  /** The id of the block */
  id: PropTypes.string,
  /** The type of the building */
  type: PropTypes.string,
  /** The color of the building */
  color: PropTypes.string,
  /** Create a current block */
  onCreate: PropTypes.func.isRequired,
  /** Update a current block */
  onUpdate: PropTypes.func,
  /** Removes the current block */
  onRemove: PropTypes.func.isRequired,
  /** The status of the create mutation */
  createIsLoading: PropTypes.bool,
  /** The status of the update mutation */
  updateIsLoading: PropTypes.bool,
  /** The status of the create mutation */
  removeIsLoading: PropTypes.bool.isRequired,
};

export default BuildingBlock;
