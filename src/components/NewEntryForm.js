import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';
import {useState} from 'react';
import { addEntryRedux } from '../actions/entries.actions';
import { useDispatch } from 'react-redux';

function NewEntryForm() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const dispatch = useDispatch();

  function addEntry() {
    dispatch(addEntryRedux({
      id: 9,
      description,
      value,
      isExpense
    }))
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  return (
    <Form untrackable="true">
      <EntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ButtonSaveOrCancel
        addEntry={addEntry}
        />

      </Form>
  )
}

export default NewEntryForm