import React from "react";
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
    return (
        <label>
            Find contacts by Name
            <input type='text' value={value} onChange={onChange} />
        </label>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Filter;






/*const Filter = ({}) => {
    return (
       <label>
          Find contacts by Name
          <input type='text' value={filter} onChange={this.changeFilter}/>
        </label> 
    )
}*/