/* eslint react/prop-types: 0 */

import React, { useState } from 'react';
import { StyledSearchBar } from './styles/ItemsGrid.styled';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <>
      <StyledSearchBar
        className="search"
        value={text}
        // onChange={(newValue) => onChange(newValue)}
        onChange={(newValue) => getQuery(newValue)}
      />
    </>
  );
};

export default Search;
