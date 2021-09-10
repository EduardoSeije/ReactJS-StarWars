import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import requisitionPlanets from '../services/serviceAPI';

export const PlanetContext = createContext();

const PlanetProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [numericFilter, setNumericFilter] = useState([]);
  const [usedFilter, setUsedFilter] = useState([]);
  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });

  useEffect(() => {
    requisitionPlanets().then((response) => {
      response.forEach((planet) => delete planet.residents);
      setPlanets([...response]);
    });
  }, []);

  const dropdownOrders = planets[0] || [];

  const filters = {
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: numericFilter,
      order,
    },
  };

  const context = {
    planets,
    ...filters,
    setName,
    setNumericFilter,
    usedFilter,
    setUsedFilter,
    setOrder,
    dropdownOrders,
  };

  return (
    <PlanetContext.Provider value={ context }>
      { children }
    </PlanetContext.Provider>
  );
};

PlanetProvider.propTypes = {
  children: PropTypes.arrayOf({}).isRequired,
};

export default PlanetProvider;