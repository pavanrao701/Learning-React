import React from 'react';
import InventoryListRow from './InventoryListRow';
import PropTypes from 'prop-types';

const InventoryList = ({inventories}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Items</th>
        <th>Measurement</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
       
      {inventories.map(inventory =>
        <InventoryListRow key={inventory.id} inventory={inventory}/>
      )}
      </tbody>
    </table>
  );
};

InventoryList.propTypes = {
  inventories: PropTypes.array.isRequired
};



export default InventoryList;
