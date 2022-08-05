const defalutState = {
  customers: [],
};

export const customerReducer = (state = defalutState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return { ...state, customers: [...state.customers, action.payload] };
    case "REMOVE_CUSTOMER":
      return {
        ...state,
        customers: state.customers.filter(
          customer => customer.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
