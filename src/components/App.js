import React, { useState, useContext } from 'react';
import Form from './Form.js';
import FormList from './FormList.js';
import { ContextTesting } from '../store/context.js';

const App = () => {
  const [informationList, setInformationList] = useState([]);

  const onAdd = (name, cityName) => {
    setInformationList((prevList) => {
      return [...prevList, { name, cityName }];
    });
  };
  return (
    <ContextTesting.Provider value={informationList}>
      <Form onAdd={onAdd} />
      <FormList />
    </ContextTesting.Provider>
  );
};

export default App;
