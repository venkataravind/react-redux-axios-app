import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../store/actions/usersActions';

class users extends Component {
    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        const { users } = this.props.users
        console.log(users)


        return (
            <div className="user-block">
                <h1>User Data</h1>
                <ul>
                    {users.map(u =>
                        <li key={u.id}>
                            <h4 >{u.name}</h4>
                        </li>
                    )}
                </ul>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({ users: state.users })

export default connect(mapStateToProps, { getUsers })(users)