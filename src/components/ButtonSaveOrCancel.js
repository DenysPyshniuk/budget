import React from 'react';
import {Button} from 'semantic-ui-react';

function ButtonSaveOrCancel({addEntry, description, value}) {
  return (
    <div><Button.Group style={{marginTop: 20, marginBottom: 40}}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary onClick={() => addEntry(description, value)}>Ok</Button>
        </Button.Group></div>
  )
}

export default ButtonSaveOrCancel