import React from 'react';
import { Button, Icon, Grid, Divider } from 'semantic-ui-react';


class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <Divider />
      <Grid centered columns={2}>
        <Grid.Row>
          <Button color='facebook' className='socialLogin'>
            <Icon name='facebook' /> Login with Facebook 
          </Button>
        </Grid.Row>
        <Grid.Row>
          <Button color='twitter' className='socialLogin'>
            <Icon name='twitter' /> Login with Twitter
          </Button>
        </Grid.Row>
        <Grid.Row>
          <Button color='google plus' className='socialLogin'>
            <Icon name='google plus' /> Login with Google
          </Button>
        </Grid.Row>
      </Grid> 
    </div> 
    );
  }
}


export default Login;