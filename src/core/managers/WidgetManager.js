//全局配置对象
import config from '../../config';

/**
 * UI组件管理器
 */
export default class WidgetManager{

    /**
     * 根据地图模拟场景获取ui元素配置
     * @param {*} simulatorIDs 
     */
    static findTriggerWidgetsParmeters(simulatorIDs){
        return config.widgets.filter((item)=>{
            return simulatorIDs.includes(item.simulatorID);
        })
    }
}