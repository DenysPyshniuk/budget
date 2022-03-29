
import { useState } from 'react';
import {Container} from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';

function App() {
  const [entries, setentries] = useState(initialEntries)
  return (
    <Container>
      <MainHeader title='Budget' />
      <DisplayBalance size='small' title='Your Balance:' value='2,550.53' />
      <DisplayBalances />
      <MainHeader type='h3' title='History' />

      <EntryLines entries={entries} />

      <MainHeader type='h3' title='Add new transaction'/>
      <NewEntryForm />
    </Container>
  );
}

export default App;

const initialEntries = [
  {
    description: "Work Income",
    value: "$1000,00",
    isExpense: false
  },
  {
    description: "Water bill",
    value: "$20,00",
    isExpense: true
  },
  {
    description: "Rent",
    value: "$300,00",
    isExpense: true
  },
  {
    description: "Power bill",
    value: "$50,00",
    isExpense: true
  },
  {
    description: "Meat",
    value: "$10,00",
    isExpense: true
  },
  {
    description: "Deposit",
    value: "$125,00",
    isExpense: false
  },
  {
    description: "Coffee",
    value: "$5,00",
    isExpense: true
  },
]
