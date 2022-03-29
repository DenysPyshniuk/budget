
import {Container} from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
      <MainHeader title='Budget' />
      <DisplayBalance size='small' title='Your Balance:' value='2,550.53' />
      <DisplayBalances />
      <MainHeader type='h3' title='History' />

      <EntryLine description='Meat' value='10,00' isExpense/>
      <EntryLine description='Deposit' value='125,00' />
      <EntryLine description='Expense' value='125,00' isExpense />
      <EntryLine description='Coffee' value='5,00' isExpense/>

      <MainHeader type='h3' title='Add new transaction'/>
      <NewEntryForm />
    </Container>
  );
}

export default App;
