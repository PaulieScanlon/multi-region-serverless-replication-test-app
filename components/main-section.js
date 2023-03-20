import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { useMutation } from '@tanstack/react-query';

import BuildingBlock from './building-block';
import SvgImage from './svg-image';

const MainSection = ({ data, region, api, type, callback, depth, options }) => {
  const [buildings, setBuildings] = useState([]);

  const create = useMutation({
    mutationKey: [`create-${region}`],
    mutationFn: async (variables) => {
      const { type, color } = variables;

      try {
        const response = await fetch(`${api}/create`, {
          method: 'POST',
          body: JSON.stringify({
            type: type,
            color: color,
            depth: depth,
          }),
        });

        const json = await response.json();

        if (!response.ok) {
          throw new Error();
        }

        return json;
      } catch (error) {
        throw new Error();
      }
    },
    onSuccess: async () => {
      setBuildings([]);
      callback();
    },
  });

  const update = useMutation({
    mutationKey: [`update-${region}`],
    mutationFn: async (variables) => {
      const { id, type, color } = variables;

      try {
        const response = await fetch(`${api}/update`, {
          method: 'POST',
          body: JSON.stringify({
            id: id,
            type: type,
            color: color,
          }),
        });

        const json = await response.json();

        if (!response.ok) {
          throw new Error();
        }

        return json;
      } catch (error) {
        throw new Error();
      }
    },
    onSuccess: async () => {
      callback();
    },
  });

  const remove = useMutation(
    async (id) => {
      try {
        const response = await fetch(`${api}/delete`, {
          method: 'DELETE',
          body: JSON.stringify({
            id: id,
          }),
        });

        const json = await response.json();

        if (!response.ok) {
          throw new Error();
        }

        return json;
      } catch (error) {
        throw new Error();
      }
    },
    {
      onSuccess: async () => {
        setBuildings([]);
        callback();
      },
    }
  );

  const handleAddBuilding = () => {
    setBuildings([...buildings, {}]);
  };

  const handleRemoveBuilding = (index) => {
    setBuildings([...buildings.slice(0, index), ...buildings.slice(index + 1)]);
  };

  const length = Object.values(data.buildings)
    .map((arr) => {
      return arr.filter((building) => options.includes(building.type)).map((building) => building).length;
    })
    .filter((item) => item)[0];

  return (
    <section className='flex flex-col gap-16'>
      <div className='flex flex-col gap-4 border border-gray-100 p-4 rounded h-screen'>
        <div>
          <small className='capitalize'>{type}</small>
          <h2 className='flex gap-2 m-0 capitalize'>
            <span>{data.provider.flag}</span>
            Create Building
          </h2>
          <strong>{data.region}</strong>
        </div>
        <div>{<SvgImage arr={data.buildings} />}</div>
        <div className='flex flex-col gap-2 h-96 overflow-auto'>
          <Fragment>
            {buildings.map((building, index) => {
              return (
                <BuildingBlock
                  key={index}
                  {...building}
                  onCreate={(type, color) => create.mutate({ type: type, color: color })}
                  onRemove={() => handleRemoveBuilding(index)}
                  createIsLoading={create.isLoading}
                  removeIsLoading={remove.isLoading}
                  options={options}
                />
              );
            })}
          </Fragment>

          {Object.values(data.buildings).map((arr) => {
            return arr
              .filter((building) => options.includes(building.type))
              .map((building, index) => {
                const { id, type, color } = building;

                return (
                  <BuildingBlock
                    key={index}
                    id={id}
                    type={type}
                    color={color}
                    onCreate={(type, color) => create.mutate({ type: type, color: color })}
                    onUpdate={(id, type, color) => update.mutate({ id: id, type: type, color: color })}
                    onRemove={(id) => remove.mutate(id)}
                    updateIsLoading={update.isLoading}
                    removeIsLoading={remove.isLoading}
                    options={options}
                  />
                );
              });
          })}
          {/* {data.buildings
            .filter((building) => options.includes(building.type))
            .map((building, index) => {
              const { id, type, color } = building;
              return (
                <BuildingBlock
                  key={index}
                  id={id}
                  type={type}
                  color={color}
                  onCreate={(type, color) => create.mutate({ type: type, color: color })}
                  onUpdate={(id, type, color) => update.mutate({ id: id, type: type, color: color })}
                  onRemove={(id) => remove.mutate(id)}
                  updateIsLoading={update.isLoading}
                  removeIsLoading={remove.isLoading}
                  options={options}
                />
              );
            })} */}
        </div>
        <div className='flex justify-end'>
          <button
            type='button'
            className='bg-blue-600 rounded-full shadow-lg text-white capitalize p-2  disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed'
            onClick={handleAddBuilding}
            disabled={length >= 5}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <div>
          <small className='capitalize'>{type}</small>
          <h2 className='flex gap-2 m-0 capitalize'>
            <span>{data.provider.flag}</span>
            read buildings
          </h2>
          <strong>{data.region}</strong>
        </div>
        <pre className='text-xs h-96 overflow-auto'>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </section>
  );
};

MainSection.defaultProps = {
  type: 'replica',
};

MainSection.propTypes = {
  /** The read data */
  data: PropTypes.any.isRequired,
  /** The region id to use for the query */
  region: PropTypes.string.isRequired,
  /** The API URL */
  api: PropTypes.string.isRequired,
  /** The type of region */
  type: PropTypes.oneOf(['primary', 'replica']),
  /** Reload the page */
  callback: PropTypes.func.isRequired,
  /** The depth of the svg paths */
  depth: PropTypes.number,
  /** The select options */
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MainSection;
