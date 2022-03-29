import React from 'react';
import {Form} from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

function NewEntryForm() {
  return (
    <Form untrackable>
        <Form.Group>
          <Form.Input icon='tags' width={12} label='Description' placeholder='New shinny thing' />
          <Form.Input icon='dollar' iconPosition='left' width={4} label='Value' placeholder='100.00' />
        </Form.Group>

        <ButtonSaveOrCancel />

      </Form>
  )
}

export default NewEntryForm