import React, { useReducer } from 'react';

const reducerFn = (nameState, action) => {
  if (action.type === 'onNameChange') {
    return { name: action.payload };
  }

  return nameState;
};

const reducerFn2 = (cityNameState, action) => {
  if (action.type === 'onCityNameChange') {
    return { cityName: action.payload };
  }

  return cityNameState;
};

const Form = (props) => {
  const [nameState, dispatchFn] = useReducer(reducerFn, { name: '' });
  const [cityNameState, dispatchFn2] = useReducer(reducerFn2, { cityName: '' });

  const onNameChange = (event) => {
    dispatchFn({ type: 'onNameChange', payload: event.target.value });
  };

  const onCityNameChange = (event) => {
    dispatchFn2({ type: 'onCityNameChange', payload: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.onAdd(nameState.name, cityNameState.cityName);
    dispatchFn({ type: 'onNameChange', payload: '' });
    dispatchFn2({ type: 'onCityNameChange', payload: '' });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input
          id="name"
          label="Name"
          type="name"
          value={nameState.name}
          onChange={onNameChange}
        />
        <label>City Name</label>
        <input
          id="cityName"
          label="cityName"
          type="cityName"
          value={cityNameState.cityName}
          onChange={onCityNameChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
