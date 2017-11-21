import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleSubmit(e) {
      e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
  }

  update(field) {
    return e => {
      this.setState(
        {[field]: e.currentTarget.value});
    };
  }

  navLink() {
    if (this.props.formType === "login") {
      return <Link to={'/signup'}>Go to Sign Up</Link>;
    } else {
      return <Link to={'/login'}>Go to Log In</Link>;
    }
  }

  render(){
    const {formType} = this.props;
    return (
      <div>
        <header>
          {formType} or {this.navLink()}
        </header>
          <form>
            <label>Username
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")} />
            </label>

            <label>Password
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")} />
            </label>

            <input type="submit" value={formType}/>
          </form>
      </div>
    );
  }
}

export default SessionForm;
