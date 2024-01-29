import React, { useContext } from 'react';
import { ContextTesting } from '../store/context.js';

const FormList = (props) => {
  const Context = useContext(ContextTesting);

  return (
    <div>
      {Context.map((info) => (
        <div key={info.name}>
          <li>
            {info.name} {info.cityName}
          </li>
        </div>
      ))}
    </div>
  );
};

export default FormList;
