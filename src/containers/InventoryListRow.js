import React from 'react';
//import { NavLink  } from 'react-router-dom';
import PropTypes from 'prop-types';

const InventoryListRow = ({inventory}) => {
  return (
    <tr>
      <td>{inventory.items}</td>
      <td>{inventory.measurements}</td>
      <td>{inventory.prices}</td>
    </tr>
  );
};

InventoryListRow.propTypes = {
  inventory: PropTypes.object.isRequired
};
export default InventoryListRow;