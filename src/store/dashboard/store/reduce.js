import { fromJS } from 'immutable';
import * as WidgetActionType from './ActionConstants';

const defaultState=fromJS({
    LoadedUIWidgets:[]
});

export default (state=defaultState,action)=>{
    switch(action.type){
        case WidgetActionType.LOAD_UI_WIDGET:
            return state.set('LoadedUIWidgets',state.get('LoadedUIWidgets').concat(action.widget));
        default:
            return state;
    }
}