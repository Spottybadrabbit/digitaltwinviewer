import {combineReducers} from 'redux-immutable';
import {reducer as LayerReducer} from './layers/store';
import {reducer as WidgetReducer} from './dashboard/store';
import {reducer as TrafficFlowReducer} from './widgets/trafficFlow/store';
import {reducer as trafficLightTimeReducer} from './widgets/trafficLightTime/store';
import {reducer as trafficControlCenterReducer} from './widgets/trafficControlCenter/store';
import {reducer as TrafficWidgetReducer} from './widgets/trafficWidget/store';
import {reducer as PeopleStreamMonitoringReducer} from './widgets/peopleStreamMonitoring/store';
import {reducer as navLeftReducer} from '../components/navLeft/store/index.js';

export default combineReducers({
	layer: LayerReducer,
	widget: WidgetReducer,
	trafficFlow:TrafficFlowReducer,
	trafficLightTime:trafficLightTimeReducer,
	trafficControlCenter:trafficControlCenterReducer,
	TrafficWidget:TrafficWidgetReducer,
	PeopleStreamMonitoring:PeopleStreamMonitoringReducer,
	navLeft: navLeftReducer
});
