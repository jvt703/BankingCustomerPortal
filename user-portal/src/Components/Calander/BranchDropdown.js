import React from 'react';

const Dropdown = ({ branchId, setBranchId }) => {
  const handleDropdownChange = (event) => {
    const selectedBranchId = event.target.value;
    setBranchId(selectedBranchId);
  };

  return (
    <div>
      <label htmlFor="branch">Select Branch:</label>
      <select id="branch" value={branchId} onChange={handleDropdownChange}>
        <option value="">Select...</option>
        <option value="1">Branch 1</option>
        <option value="2">Branch 2</option>
        <option value="3">Branch 3</option>
      </select>
    </div>
  );
};

export default Dropdown;