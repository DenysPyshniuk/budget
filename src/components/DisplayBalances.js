import React from 'react';
import {Segment, Grid} from 'semantic-ui-react';
import DispalyBalance from './DisplayBalance';

function DisplayBalances({ incomeTotal, expenseTotal}) {
  return (
    <div>
      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DispalyBalance size='tiny' color='green' style={{textAlign: 'left'}} title='Income:'
                value={incomeTotal} />
            </Grid.Column>
            <Grid.Column>
              <DispalyBalance size='tiny' color='red' style={{textAlign:'left'}} title='Expenses:' value={expenseTotal} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  )
}

export default DisplayBalances