import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux } from "../actions/entries.actions";
import { v4 as uuidv4 } from "uuid";
import {updateEntryRedux} from "./../actions/entries.actions";
import {closeEditModal} from "./../actions/modals.actions";

function useEntryDetails(desc = "", val = "", isExp = true) {
  const [description, setDescription] = useState(desc);
  const [value, setValue] = useState(val);
  const [isExpense, setIsExpense] = useState(isExp);
  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(desc);
    setValue(val);
    setIsExpense(isExp);
  }, [desc, val, isExp]);

  function updateEntry(id) {
    dispatch(
      updateEntryRedux(id, {
        id,
        description,
        value,
        isExpense,
      })
    );
    dispatch(closeEditModal());
  }

  function addEntry() {
    dispatch(
      addEntryRedux({
        id: uuidv4(),
        description,
        value,
        isExpense,
      })
    );
    setDescription("");
    setValue("");
    setIsExpense(true);
  }
  return {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
    updateEntry,
  };
}

export default useEntryDetails;
