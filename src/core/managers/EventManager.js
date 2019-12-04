const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

/**
 * 全局事件管理器
 */
export default class EventManager {

    /**
     * 事件派发
     * @param {*} eventType 
     * @param {*} data 
     */
    static dispatchEvent(eventType, data) {
        emitter.emit(eventType, data);
    }

    /**
     * 绑定事件监听
     * @param {*} eventType 
     * @param {*} callback 
     */
    static addEventListener(eventType, callback) {
        emitter.addListener(eventType, callback);
    }

    /**
     * 
     * @param {*} eventType 
     * @param {*} callback 
     */
    static removeEventListener(eventType,callback) {
        emitter.removeListener(eventType, callback);
    }

    /**
     * 
     * @param {*} eventType 
     */
    static removeAllListeners(eventType){
        emitter.removeAllListeners(eventType);
    }
}