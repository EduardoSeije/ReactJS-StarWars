import React, { useContext, useState } from 'react';
import { PlanetContext } from '../Context/PlanetProvider';

const dropdownColumns = ['population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisons = ['maior que', 'menor que', 'igual a'];

const PlanetsFilter = () => {
  const {
    filters,
    setName,
    setNumericFilter,
    usedFilter,
    setUsedFilter,
    dropdownOrders,
    setOrder,
  } = useContext(PlanetContext);
  const { filterByNumericValues } = filters;
  const [dropdown, setDropdown] = useState(dropdownColumns[0]);
  const [comparison, setComparison] = useState(comparisons[0]);
  const [value, setValue] = useState('');
  const [dropdownOrder, setDropdownOrder] = useState('name');
  const [sort, setSort] = useState('ASC');

  return (
    <>
    <div className='filterForm'>
        <input
          className='input_name'
          placeholder=' Busca por nome'
          data-testid="name-filter"
          onChange={ ({ target: { value: valueName } }) => setName(valueName) }
        />
        <select
          data-testid="column-filter"
          onChange={ ({ target: { value: valueColumn } }) => setDropdown(valueColumn) }
        >
          {dropdownColumns.filter((column) => !usedFilter.includes(column))
            .map((column) => <option value={ column } key={ column }>{ column }</option>)}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ ({ target: { value: valueComparison } }) => (
            setComparison(valueComparison)) }
        >
          {comparisons.map((comparis) => (
            <option value={ comparis } key={ comparis }>{ comparis }</option>))}
        </select>

        <input
          className="input_number"
          data-testid="value-filter"
          placeholder=" Digite um número"
          onChange={ ({ target: { value: valueNumber } }) => setValue(valueNumber) }
        />

        <button
        className='filterbtn'
          type="button"
          data-testid="button-filter"
          disabled={ !value }
          onClick={ () => {
            setNumericFilter([...filterByNumericValues,
              { dropdown, comparison, value }]);
            usedFilter.push(dropdown);
            setUsedFilter([...usedFilter]);
            setDropdown(dropdownColumns
              .filter((column) => !usedFilter.includes(column))[0]);
            } }
            >
          Filtrar
        </button>
      </div>
      
      <div className="ascDescForm">
        <select
          value={ dropdownOrder }
          data-testid="column-sort"
          onChange={
            ({
              target: { value: valueDropodownOrder },
            }) => setDropdownOrder(valueDropodownOrder)
          }
          >
          {Object.keys(dropdownOrders).map((dropdownOpt) => (
            <option value={ dropdownOpt } key={ dropdownOpt }>{dropdownOpt}</option>))}
        </select>
        <label htmlFor="asc" className='asc'>
          <input
          // https://www.w3schools.com/jsref/prop_checkbox_defaultchecked.asp
          defaultChecked
          className='input_asc'
          name="order"
          value="ASC"
          data-testid="column-sort-input-asc"
          type="radio"
          id="asc"
          onChange={ ({ target: { value: vASC } }) => setSort(vASC) }
          />
          Ascendente
        </label>
        <label htmlFor="desc" className='desc'>
          <input
            className='input_desc'
            name="order"
            value="DESC"
            data-testid="column-sort-input-desc"
            type="radio"
            id="desc"
            onChange={ ({ target: { value: vDESC } }) => setSort(vDESC) }
            />
          Descendente
        </label>
        <button
          className='filterbtn'
          type="button"
          data-testid="column-sort-button"
          onClick={ () => {
            setOrder({ column: dropdownOrder, sort });
          } }
          >
          Filtrar
        </button>
      </div>
      </>
  );
};

export default PlanetsFilter;