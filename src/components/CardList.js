import { getUsers } from "../store/actions/usersActions";
import React, { Component, useRef } from "react";
import { connect } from "react-redux";
import "./CardList.css";

const gotoRepo = () => {

}

class CardList extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props.users;

    return (
      <div className="sec-listrepo">
        {users.map((user) => (
          <div className="card" onClick={() => window.open(user.html_url, '_blank')}>
            <div className="head">
              <div className="name">{user.name}</div>
              <div className="status">
                <span>{user.visibility}</span>
              </div>
            </div>
            <div className="body">
              {user.description !== null ? user.description : 'Tidak ada Deskripsi'}
            </div>
            <div className="footer">
              <div className="status">
                <span>{user.language}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ users: state.users });

export default connect(mapStateToProps, { getUsers })(CardList);
