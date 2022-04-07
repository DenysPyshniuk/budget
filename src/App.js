import { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import {useSelector} from 'react-redux';


function App() {
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const isOpen = useSelector(state => state.modals.isOpen);
  const entries = useSelector(state => state.entries);

  useEffect(() => {}, [isOpen]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if(entry.isExpense) {
        return (totalExpenses += Number(entry.value));
      }
      return (totalIncomes += Number(entry.value));
    });

    setTotal(totalIncomes - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncomes);
  }, [entries]);

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance size="small" title="Your Balance:" value={total} />
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal}/>
      <MainHeader type="h3" title="History" />

      <EntryLines entries={entries} />

      <MainHeader type="h3" title="Add new transaction" />
      <NewEntryForm />
      <ModalEdit
        isOpen={isOpen}
      />
    </Container>
  );
}

export default App;
