import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectDeselectUser } from "../actions/UserAction";
import { Checkbox } from 'antd';

const usersData = require('../assets/data/Users.json');


class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onChange = (e, index, user) => {
        this.props.selectDeselectUser({ user, index, checked: e.target.checked });
    }

    onRemove = (e, index, user) => {
        this.props.selectDeselectUser({ user, index, checked: false });
    }

    render() {
        return (
            <>
                <div className="main-div">
                    <div className="left-div">
                        <div className="card">
                            {
                                usersData.map((data, _index) => {
                                    const { country, users } = data;
                                    return <div key={_index}>
                                        <h4>{country}</h4>
                                        <ul>
                                            {users.map((user, index) => {
                                                return <li key={index} className="li-style">
                                                    <Checkbox
                                                        checked={user.selected}
                                                        onChange={e => this.onChange(e, _index, user.name)}>
                                                        {user.name}
                                                    </Checkbox>
                                                </li>
                                            })}
                                        </ul>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="right-div">
                        <div className="card">
                            {
                                usersData.map((data, _index) => {
                                    const { country, view, users } = data;
                                    return view && <div key={_index}>
                                        <h4>{country}</h4>
                                        <ul>
                                            {users.map((user, index) => {
                                                return user.selected && <div key={index} className="selected-user">
                                                    {user.name}<i onClick={e => this.onRemove(e, _index, user.name)} className="fa fa-times close-icon" aria-hidden="true"></i>
                                                </div>

                                            })}
                                        </ul>
                                    </div>
                                })
                            }</div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = dispatch => {
    return {
        selectDeselectUser: (params) => dispatch(selectDeselectUser(params))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
