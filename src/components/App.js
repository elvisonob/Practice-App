import React, { useState } from 'react';
import Form from './Form.js';
import FormList from './FormList.js';

const App = () => {
  const [informationList, setInformationList] = useState([]);

  const onAdd = (name, cityName) => {
    setInformationList((prevList) => {
      return [...prevList, { name, cityName }];
    });
  };
  return (
    <div>
      <Form onAdd={onAdd} />
      <FormList informationList={informationList} />
    </div>
  );
};

export default App;
