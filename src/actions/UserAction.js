import * as types from '../constants';
const usersData = require('../assets/data/Users.json');

export function selectDeselectUser(params) {
    return {
        type: types.SELECT_USER,
        payload: new Promise(function (resolve, reject) {
            const { users } = usersData[params.index];
            let country_viewable = false;
            users.map(data => {
                if (data.name === params.user) data.selected = params.checked;
            })
            users.map(data => {
                if (data.selected) country_viewable = true;
            })

            if (country_viewable)
                usersData[params.index].view = true;
            else
                usersData[params.index].view = false;

            resolve(usersData);
        })
    };
}