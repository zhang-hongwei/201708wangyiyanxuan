
import * as types from '../action-type';
import {getList} from '../../api/list';

export default {

    getlists() {
        return dispatch => {
            getList().then(list=> {
                dispatch({
                    type: types.FET_LISTS,
                    payload: { list }

                })
            })

        }

    }

}

