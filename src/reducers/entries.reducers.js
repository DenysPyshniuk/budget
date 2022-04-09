import entriesTypes from '../actions/entries.actions';

const reducer = (state = initialEntries, action) => {
  let newEntries;
  switch (action.type) {
    case entriesTypes.ADD_ENTRY:
      newEntries = state.concat({ ...action.payload });
      return newEntries;
    case entriesTypes.REMOVE_ENTRY:
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;
    case entriesTypes.UPDATE_ENTRY:
      newEntries = [...state];
      const index = newEntries.findIndex(entry => entry.id === action.payload.id);
      newEntries[index] = {...action.payload.entry};
      return newEntries;
    default:
      return state;
  }
}

export default reducer;

const initialEntries = [
  {
    id: 1,
    description: "Work Income",
    value: 1000.0,
    isExpense: false,
  },
  {
    id: 2,
    description: "Water bill",
    value: 20.0,
    isExpense: true,
  },
  {
    id: 3,
    description: "Rent",
    value: 300.0,
    isExpense: true,
  },
  {
    id: 4,
    description: "Power bill",
    value: 50.0,
    isExpense: true,
  },
  {
    id: 5,
    description: "Meat",
    value: 10.0,
    isExpense: true,
  },
  {
    id: 6,
    description: "Deposit",
    value: 125.0,
    isExpense: false,
  },
  {
    id: 7,
    description: "Coffee",
    value: 5.0,
    isExpense: true,
  },
];