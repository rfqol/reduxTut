import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const addCash = cash => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = cash => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = name => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch({ type: "ADD_CUSTOMER", payload: customer });
  };

  const removeCustomer = customer => {
    dispatch({ type: "REMOVE_CUSTOMER", payload: customer.id });
  };

  return (
    <div className="App">
      <h1>{cash}</h1>
      <button onClick={() => addCash(Number(prompt()))}>Top up balance</button>
      <button onClick={() => getCash(Number(prompt()))}>
        Withdraw balance
      </button>
      <button onClick={() => addCustomer(prompt())}>Add Client</button>
      <button onClick={() => getCash(Number(prompt()))}>Remove Client</button>
      {customers.length ? (
        <div>
          {customers.map(customer => (
            <h2 key={customer.id} onClick={() => removeCustomer(customer)}>
              {customer.name}
            </h2>
          ))}
        </div>
      ) : (
        <h2>No Clients</h2>
      )}
    </div>
  );
}
