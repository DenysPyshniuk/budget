
import {Container, Header, Statistic, Grid, Segment, Icon} from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>

      <Header as="h1">Budget</Header>

      <Statistic size='small'>
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2,550.53</Statistic.Value>
      </Statistic>

      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>

            <Grid.Column>
              <Statistic size='tiny' color='green'>
                <Statistic.Label style={{textAlign:'left'}}>Income:</Statistic.Label>
                <Statistic.Value>1,045.50</Statistic.Value>
              </Statistic>
            </Grid.Column>

            <Grid.Column>
              <Statistic size='tiny' color='red'>
                <Statistic.Label style={{textAlign:'left'}}>Expenses:</Statistic.Label>
                <Statistic.Value>623.50</Statistic.Value>
              </Statistic>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>History</Header>

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

    </Container>
  );
}

export default App;
