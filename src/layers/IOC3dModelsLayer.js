import mapboxgl from 'mapbox-gl';
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader';
const THREE = require('three');

/**
 * 3D模型图层
 * 格式：GLTF
 */
export default class IOC3dModelsLayer {

    /**
     * 构造
     * @param {*} map 
     * @param {*} models 
     */
    constructor(map) {
        this._map = map;
        this.camera = new THREE.Camera();
        this.scene = new THREE.Scene();
    }

    /**
     * 添加模型到地图渲染
     * @param {*} options 
     */
    addModelToMap(options) {
        options.forEach(element => {
            //显示坐标
            var modelOrigin = element.position;
            //贴地高度
            var modelAltitude = element.altitude;
            //旋转角度
            var modelRotate = element.rotate;
            //缩放比例
            var modelScale = element.scale;
            //位置信息
            var modelTransform = {
                translateX: (mapboxgl.MercatorCoordinate.fromLngLat(modelOrigin, modelAltitude).x) + element.offsets[0],
                translateY: (mapboxgl.MercatorCoordinate.fromLngLat(modelOrigin, modelAltitude).y) + element.offsets[1],
                translateZ: (mapboxgl.MercatorCoordinate.fromLngLat(modelOrigin, modelAltitude).z) + element.offsets[2],
                rotateX: modelRotate[0],
                rotateY: modelRotate[1],
                rotateZ: modelRotate[2],
                scale: modelScale
            };
            //通过mapbox自定义图层呈现模型
            
            var customLayer = {
                id: '3d-model',
                type: 'custom',
                renderingMode: '3d',
                //图层加载回调
                onAdd: (map, gl) => {
                    //灯光
                    var directionalLight = new THREE.DirectionalLight(0xffffff);
                    directionalLight.intensity = 5.0;
                    this.scene.add(directionalLight);
                    var loader = new GLTFLoader();
                    loader.load(element.url, (function (gltf) {
                        this.scene.add(gltf.scene);
                    }).bind(this));
                    this.map = map;
                    //使用MapboxGLMapCanvas
                    this.renderer = new THREE.WebGLRenderer({
                        canvas: this.map.getCanvas(),
                        context: gl,
                        antialias: true
                    });
                    this.renderer.autoClear = false;
                },
                render: (gl, matrix) => {
                    var rotationX = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(1, 0, 0), modelTransform.rotateX);
                    var rotationY = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 1, 0), modelTransform.rotateY);
                    var rotationZ = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 0, 1), modelTransform.rotateZ);
                    var m = new THREE.Matrix4().fromArray(matrix);
                    var l = new THREE.Matrix4().makeTranslation(modelTransform.translateX, modelTransform.translateY, modelTransform.translateZ)
                        .scale(new THREE.Vector3(modelTransform.scale, -modelTransform.scale, modelTransform.scale))
                        .multiply(rotationX)
                        .multiply(rotationY)
                        .multiply(rotationZ);
                    this.camera.projectionMatrix.elements = matrix;
                    this.camera.projectionMatrix = m.multiply(l);
                    this.renderer.state.reset();
                    this.renderer.render(this.scene, this.camera);
                    this.map.triggerRepaint();
                }
            };
            // console.log(customLayer)
            this._map.addLayer(customLayer);
            
        });
    }
    addModelyhgj(options) {
        options.forEach(element => {
            //显示坐标
            var modelOrigin = element.position;
            //贴地高度
            var modelAltitude = element.altitude;
            //旋转角度
            var modelRotate = element.rotate;
            //缩放比例
            var modelScale = element.scale;
            //位置信息
            var modelTransform = {
                translateX: (mapboxgl.MercatorCoordinate.fromLngLat(modelOrigin, modelAltitude).x) + element.offsets[0],
                translateY: (mapboxgl.MercatorCoordinate.fromLngLat(modelOrigin, modelAltitude).y) + element.offsets[1],
                translateZ: (mapboxgl.MercatorCoordinate.fromLngLat(modelOrigin, modelAltitude).z) + element.offsets[2],
                rotateX: modelRotate[0],
                rotateY: modelRotate[1],
                rotateZ: modelRotate[2],
                scale: modelScale
            };
            //通过mapbox自定义图层呈现模型
            var yhgjmodel = {
                id: 'mapbox-scenegraphLayer-build',
                type: 'custom',
                renderingMode: '3d',
                //图层加载回调
                onAdd: (map, gl) => {
                    //灯光
                    var directionalLight = new THREE.DirectionalLight(0xffffff);
                    directionalLight.intensity = 5.0;
                    this.scene.add(directionalLight);
                    var loader = new GLTFLoader();
                    loader.load(element.scenegraph, (function (gltf) {
                        this.scene.add(gltf.scene);
                    }).bind(this));
                    this.map = map;
                    //使用MapboxGLMapCanvas
                    this.renderer = new THREE.WebGLRenderer({
                        canvas: this.map.getCanvas(),
                        context: gl,
                        antialias: true
                    });
                    this.renderer.autoClear = false;
                },
                render: (gl, matrix) => {
                    var rotationX = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(1, 0, 0), modelTransform.rotateX);
                    var rotationY = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 1, 0), modelTransform.rotateY);
                    var rotationZ = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 0, 1), modelTransform.rotateZ);
                    var m = new THREE.Matrix4().fromArray(matrix);
                    var l = new THREE.Matrix4().makeTranslation(modelTransform.translateX, modelTransform.translateY, modelTransform.translateZ)
                        .scale(new THREE.Vector3(modelTransform.scale, -modelTransform.scale, modelTransform.scale))
                        .multiply(rotationX)
                        .multiply(rotationY)
                        .multiply(rotationZ);
                    this.camera.projectionMatrix.elements = matrix;
                    this.camera.projectionMatrix = m.multiply(l);
                    this.renderer.state.reset();
                    this.renderer.render(this.scene, this.camera);
                    this.map.triggerRepaint();
                }
            };
            this._map.addLayer(yhgjmodel);
        });
    }
    addModelyhgj7Floor(options) {
        options.forEach(element => {
            //显示坐标
            var modelOrigin = element.position;
            //贴地高度
            var modelAltitude = element.altitude;
            //旋转角度
            var modelRotate = element.rotate;
            //缩放比例
            var modelScale = element.scale;
            //位置信息
            var modelTransform = {
                translateX: (mapboxgl.MercatorCoordinate.fromLngLat(modelOrigin, modelAltitude).x) + element.offsets[0],
                translateY: (mapboxgl.MercatorCoordinate.fromLngLat(modelOrigin, modelAltitude).y) + element.offsets[1],
                translateZ: (mapboxgl.MercatorCoordinate.fromLngLat(modelOrigin, modelAltitude).z) + element.offsets[2],
                rotateX: modelRotate[0],
                rotateY: modelRotate[1],
                rotateZ: modelRotate[2],
                scale: modelScale
            };
            //通过mapbox自定义图层呈现模型
            var yhgj7Floormodel = {
                id: 'scenegraphLayer-7floor',
                type: 'custom',
                renderingMode: '3d',
                //图层加载回调
                onAdd: (map, gl) => {
                    //灯光
                    var directionalLight = new THREE.DirectionalLight(0xffffff);
                    directionalLight.intensity = 5.0;
                    this.scene.add(directionalLight);
                    var loader = new GLTFLoader();
                    loader.load(element.scenegraph, (function (gltf) {
                        this.scene.add(gltf.scene);
                    }).bind(this));
                    this.map = map;
                    //使用MapboxGLMapCanvas
                    this.renderer = new THREE.WebGLRenderer({
                        canvas: this.map.getCanvas(),
                        context: gl,
                        antialias: true
                    });
                    this.renderer.autoClear = false;
                },
                render: (gl, matrix) => {
                    var rotationX = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(1, 0, 0), modelTransform.rotateX);
                    var rotationY = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 1, 0), modelTransform.rotateY);
                    var rotationZ = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 0, 1), modelTransform.rotateZ);
                    var m = new THREE.Matrix4().fromArray(matrix);
                    var l = new THREE.Matrix4().makeTranslation(modelTransform.translateX, modelTransform.translateY, modelTransform.translateZ)
                        .scale(new THREE.Vector3(modelTransform.scale, -modelTransform.scale, modelTransform.scale))
                        .multiply(rotationX)
                        .multiply(rotationY)
                        .multiply(rotationZ);
                    this.camera.projectionMatrix.elements = matrix;
                    this.camera.projectionMatrix = m.multiply(l);
                    this.renderer.state.reset();
                    this.renderer.render(this.scene, this.camera);
                    this.map.triggerRepaint();
                }
            };
            this._map.addLayer(yhgj7Floormodel);
        });
    }
}