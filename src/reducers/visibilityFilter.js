import { SHOW_ALL } from '../actions/actions';

function visibilityFilter(visibilty= SHOW_ALL,action){
    switch(action.type){
        case SHOW_ALL:
            return SHOW_ALL;
        default:
            return visibilty;    
    };

}

export default visibilityFilter;