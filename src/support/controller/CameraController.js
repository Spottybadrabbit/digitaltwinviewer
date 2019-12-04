
/**
 * 摄像机控制器
 */
export default class CameraController{

    constructor(map){
        this._map=map;
    }

    /**
     * 围绕地图中心点旋转视角
     * @param {*} timestamp 
     */
    rotateAtPoint(timestamp){
        this._map.rotateTo((timestamp / 600) % 360, {duration: 0});
        this._animationFrame=window.requestAnimationFrame(this.rotateAtPoint.bind(this));
    }

    /**
     * 取消旋转视角动画
     */
    stopRotateAnimation(){
        this._map.stop();
    }

}