import React, { useState } from 'react';

const FormList = (props) => {
  const { informationList } = props;

  return (
    <div>
      {informationList.map((info) => (
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
