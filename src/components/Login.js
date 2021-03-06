import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
// import history from '../history';
import { withRouter } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  Link,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    //push to server

    const response = await axios.post(
      `http://${process.env.REACT_APP_SERVER_URL}/login?email=${this.state.email}&password=${this.state.password}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    localStorage.setItem('token', response.data.token);
    this.props.history.push('/home');
    //reset state
    this.setState({
      email: '',
      password: '',
    });
  }

  render() {
    return (
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="500px"
        borderRadius={10}
        textAlign="center"
        boxShadow="lg"
        bg="white"
      >
        <Box p={4}>
          <Box textAlign="center">
            <Heading>Login</Heading>
          </Box>
          <Box my={8} textAlign="left">
            <form onSubmit={this.handleSubmit}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={(event) =>
                    this.setState({ email: event.target.value })
                  }
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  onChange={(event) =>
                    this.setState({ password: event.target.value })
                  }
                />
              </FormControl>
              <Box mt="20px">
                <Button type="submit">Submit</Button>
              </Box>
              <Stack isInline justifyContent="space-between" mt={4}>
                <Box>
                  <Link as={RouterLink} to="/register">
                    Don't have an acccount?
                  </Link>
                </Box>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withRouter(Login);
