import * as WidgetActionType from './ActionConstants';

/**
 * 创建更新道路流动图Action
 * @param {*} currentTime 
 */
export const loadUIWidget=(widget)=>({
    type: WidgetActionType.LOAD_UI_WIDGET,
    widget:widget
});