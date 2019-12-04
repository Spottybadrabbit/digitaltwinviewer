
import config from '../../config';
import * as AppEvent from '../AppEvent';
import EventManager from '../managers/EventManager';
import {TrafficStrikeHandler,TrafficHeatmapEffectHandler,PopulationMobilityEffectHandler,CityCongestionZoneHandler,CityIllegalStatistica} from '../../support/creators/simulators/TrafficEventHandlerCreator';
import {CityContourDataHandler} from '../../support/creators/simulators/CityEnvironmentEventHandlerCreator';

/**
 * 
 */
export default class SimulatorManager{

    /**
     * 获取当前需要加载的场景模拟器
     */
    static findTriggerEventParmeters(){
        return config.simulator.filter((item)=>{
            return item.isTrigger;
        });
    }

    static fetchTargetParmeters(parmeters,field){
        return parmeters.map((item)=>{
            return item[field];
        });
    }

    /**
     * 事件模拟
     * @param {*} eventParameters 
     */
    static registerSimulateEvents(eventType){
        switch(eventType){ 
            //交通事故
            case AppEvent.EMERGENCY_ACCIDENT_TRAFFIC_EVENT:
                EventManager.addEventListener(eventType,TrafficStrikeHandler);
                break;
            //地铁人口热力图
            case AppEvent.EMERGENCY_TRAFFIC_HEATMAP_EVENT:
                EventManager.addEventListener(eventType,TrafficHeatmapEffectHandler);
                break;
            //峰时人口流动
            case AppEvent.EMERGENCY_POPULATION_MOBILITY_EVENT:
                EventManager.addEventListener(eventType,PopulationMobilityEffectHandler);
                break;
            case AppEvent.MAP_LOAD_CITY_CONTOUR_EVENT:
                EventManager.addEventListener(eventType,CityContourDataHandler);
                break;
            case AppEvent.EMERGENCY_CITY_CONGESTION_ZONE_EVENT:
                EventManager.addEventListener(eventType,CityCongestionZoneHandler.bind(this));
                break;
            case AppEvent.BREAK_RULES_EVENT:
                EventManager.addEventListener(eventType,CityIllegalStatistica);
                break;
            default:
                break;
        }
    }

    static triggerEvent(eventType,eventParameters){
        EventManager.dispatchEvent(eventType,eventParameters);
    }
}
