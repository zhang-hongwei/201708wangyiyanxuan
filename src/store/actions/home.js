import * as types from '../action-type';

import {getSlider} from '../../api/home'
export default {
  
    getSliders() {
      
        return dispatch => {
            getSlider().then(sliders => {
               
                dispatch({
                    type: types.GET_SLIDERS,
                    payload: { sliders }
                });
            });
        }
    },
}