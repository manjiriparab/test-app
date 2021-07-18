import React from 'react';
import GoogleLogin from 'react-google-login';
import './App.css';
import { Button } from 'react-bootstrap';

export class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {'email':'', 'password':''};
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.myRef = React.createRef();
  }

  handleChange(e) {
    this.setState({[e.target.name]:e.target.value});
    console.log("value", this.myRef.current.value);
  }

  login() {
    console.log('email',this.state.email);
    console.log('password', this.state.password);
  }

  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  }
  render() {
    return (
      <div className="App-header">
        <div>Test Project</div>
        <br/>
        <div> <input type="text" name="email" placeholder="Email" className="input_box" ref={this.myRef} onChange={this.handleChange}/> </div>
        <div> <input type="password" name="password" placeholder="Password" ref={this.myRef} className="input_box" onChange={this.handleChange} /> </div>
        <div>
          <button type="button" className="submit_btn" onClick={this.login}>Login</button> 
        </div>
        <div className="label">or</div>
        <div>
          <GoogleLogin
            clientId="949894065632-je92cejsr4kab7oi85gfn0f5cs13rham.apps.googleusercontent.com"
            buttonText="Sign up with google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
        <div className="label">click <a href="#">here</a> if you don't have account</div>
      </div>
    )
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users',{
      method:"GET",
      body:JSON.stringify(this.state)
    }
    ).then((resp)=>{
      resp.json().then((result) => {
        console.warn(result.data);
      })
    })
  }
}

export default App