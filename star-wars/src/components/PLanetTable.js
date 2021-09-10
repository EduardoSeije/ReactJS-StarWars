import React, { useContext } from 'react';
import { PlanetContext } from '../Context/PlanetProvider';

const PlanetTable = () => {
  const {
    planets,
    filters,
    usedFilter,
    setUsedFilter,
    setNumericFilter,
    dropdownOrders,
  } = useContext(PlanetContext);
  const { filterByName: { name }, filterByNumericValues, order } = filters;
  const { column: dropdownOrder, sort } = order;

  const filtersCombine = (firstValue, secondValue, comparingValue) => {
    if (
      typeof (firstValue) === 'number' || typeof (secondValue) === 'number'
    ) return false;
    firstValue = parseInt(firstValue, 10);
    secondValue = parseInt(secondValue, 10);
    if (
      comparingValue === 'maior que'
    ) return firstValue > secondValue;
    if (
      comparingValue === 'menor que'
    ) return firstValue < secondValue;
    if (
      comparingValue === 'igual a'
    ) return firstValue === secondValue;
    return true;
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            {
              Object.keys(dropdownOrders)
                .map((topName) => <th key={ topName }>{topName}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            filterByNumericValues
              .reduce((accumulator, { dropdown, value, comparison }) => accumulator
                .filter((planet) => (
                  filtersCombine(planet[dropdown], value, comparison))), planets)
              .filter((planet) => (planet.name).includes(name))
              .sort((firstElement, secondElement) => {
                let first = firstElement[dropdownOrder];
                let second = secondElement[dropdownOrder];
                if (!Number.isNaN(Number(first))) {
                  first = Number(first);
                  second = Number(second);
                }
                if (first > second) {
                  return sort === 'ASC' ? 1 : +'-1';
                }
                if (first < second) {
                  return sort === 'ASC' ? +'-1' : 1;
                }
                return 0;
              })
              .map((planet, index) => (
                <tr key={ index }>
                  {
                    Object.entries(planet)
                      .map(([key, info]) => (
                        <td
                          data-testid={ key === 'name' ? 'planet-name' : null }
                          key={ info }
                        >
                          {info}
                        </td>
                      ))
                  }
                </tr>
              ))
          }
        </tbody>
      </table>
      <div>
        { filterByNumericValues.map(({
          dropdown,
          value,
          comparison,
        }) => (
          <div
            key={ dropdown }
            data-testid="filter"
          >
            <p>{`${dropdown} ${comparison} ${value}`}</p>
            <button
              type="button"
              onClick={ () => {
                setNumericFilter(filterByNumericValues
                  .filter((filter) => filter.dropdown !== dropdown));
                setUsedFilter(usedFilter.filter((filterUsed) => filterUsed !== dropdown));
              } }
            >
              X
            </button>
          </div>
        )) }
      </div>
    </>
  );
};

export default PlanetTable;