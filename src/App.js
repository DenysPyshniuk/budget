
import { useState } from 'react';
import {Container} from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';

function App() {
  const [entries, setEntries] = useState(initialEntries)

  function deleteEntry(id) {
    const result = entries.filter(entry => entry.id !== id);
    console.log("entries", entries);
    console.log("result", result);
    setEntries(result);

  }

  return (
    <Container>
      <MainHeader title='Budget' />
      <DisplayBalance size='small' title='Your Balance:' value='2,550.53' />
      <DisplayBalances />
      <MainHeader type='h3' title='History' />

      <EntryLines entries={entries} deleteEntry={deleteEntry} />

      <MainHeader type='h3' title='Add new transaction'/>
      <NewEntryForm />
    </Container>
  );
}

export default App;

const initialEntries = [
  {
    id: 1,
    description: "Work Income",
    value: "$1000,00",
    isExpense: false
  },
  {
    id: 2,
    description: "Water bill",
    value: "$20,00",
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: "$300,00",
    isExpense: true
  },
  {
    id: 4,
    description: "Power bill",
    value: "$50,00",
    isExpense: true
  },
  {
    id: 5,
    description: "Meat",
    value: "$10,00",
    isExpense: true
  },
  {
    id: 6,
    description: "Deposit",
    value: "$125,00",
    isExpense: false
  },
  {
    id: 7,
    description: "Coffee",
    value: "$5,00",
    isExpense: true
  },
]
