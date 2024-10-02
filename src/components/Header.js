import React, { useState } from 'react';

const Header = ({ grouping, setGrouping, ordering, setOrdering }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleGroupingChange = (e) => {
    setGrouping(e.target.value);
  };

  const handleOrderingChange = (e) => {
    setOrdering(e.target.value);
  };

  return (
    <div className="header">
      <div className="dropdown">
        <button 
          className="dropbtn" 
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Display ▼
        </button>
        {showDropdown && (
          <div className="dropdown-content">
            <div className="dropdown-option">
              <label htmlFor="grouping">Grouping</label>
              <select
                id="grouping"
                value={grouping}
                onChange={handleGroupingChange}
              >
                <option value="Status">Status</option>
                <option value="User">User</option>
                <option value="Priority">Priority</option>
              </select>
            </div>
            <div className="dropdown-option">
              <label htmlFor="ordering">Ordering</label>
              <select
                id="ordering"
                value={ordering}
                onChange={handleOrderingChange}
              >
                <option value="Priority">Priority</option>
                <option value="Title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
