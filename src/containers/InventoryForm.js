import React from 'react';
import PropTypes from 'prop-types';
import SelectInput from '../common/SelectInput';
//import TextInput from '../common/TextInput';

const InventoryForm = ({inventory, allItems, allMeasurements, allPrices,  onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Inventory</h1>
      

      <SelectInput
        name="items"
        label="item"
        value={inventory.items}
        defaultOption="Select ITEM"
        options={allItems}
        onChange={onChange}
        error={errors.items}/>

        <SelectInput
        name="measurements"
        label="measure"
        value={inventory.measurements}
        defaultOption="Select MEASUREMENT"
        options={allMeasurements}
        onChange={onChange}
        error={errors.measurements}/>

        <SelectInput
        name="prices"
        label="price"
        value={inventory.prices}
        defaultOption="Select PRICE"
        options={allPrices}
        onChange={onChange}
        error={errors.prices}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

InventoryForm.propTypes = {
  
  inventory: PropTypes.object.isRequired,
  allItems: PropTypes.array.isRequired,
  allMeasurements: PropTypes.array.isRequired,
  allPrices: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default InventoryForm;