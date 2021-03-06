import React from 'react';
import Tr from './tr';
import PropTypes from 'prop-types';

const Tbody = (props) => {
  const rows = props.picArray.map((item, i) => {
    return <Tr key={i} pic={item}/>;
  });

  return (
    <tbody>
    {rows}
    </tbody>
  );
};

Tbody.prototypes = {
  picArray: PropTypes.array,
};

export default Tbody;
