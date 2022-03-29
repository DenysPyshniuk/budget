
import {Container, Statistic, Grid, Segment, Icon} from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DispalyBalance from './components/DispalyBalance';

function App() {
  return (
    <Container>
      <MainHeader title='Budget' />

      <DispalyBalance size='small' title='Your Balance:' value='2,550.53' />

      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>

            <Grid.Column>
              <DispalyBalance size='tiny' color='green' style={{textAlign:'left'}} title='Income:'
                value='1,045.50' />
            </Grid.Column>

            <Grid.Column>
              <DispalyBalance size='tiny' color='red' style={{textAlign:'left'}} title='Expenses:' value='623.50' />
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader type='h3' title='History'/>

      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
          <Grid.Column width={10} textAlign='left'>Meat</Grid.Column>
          <Grid.Column width={3}>$10,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash' bordered></Icon>
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='green'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
          <Grid.Column width={10} textAlign='left'>Deposit</Grid.Column>
          <Grid.Column width={3}>$125,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash' bordered></Icon>
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
          <Grid.Column width={10} textAlign='left'>Coffee</Grid.Column>
          <Grid.Column width={3}>$5,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash' bordered></Icon>
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader type='h3' title='Add new transaction'/>

      <NewEntryForm />

    </Container>
  );
}

export default App;
