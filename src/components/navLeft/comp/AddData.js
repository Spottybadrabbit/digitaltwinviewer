import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Tabs, Upload, Icon, message, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import { actionCreate } from '../store/index.js';
import config from '../../../config.js'
import EventManager from '../../../core/managers/EventManager';
import * as AppEvent from '../../../core/AppEvent';
import { ArcLayer, ScenegraphLayer } from 'deck.gl';
import { registerLoaders } from '@loaders.gl/core';
import { GLTFScenegraphLoader } from '@luma.gl/addons';
import IOC3dModelsLayer from '../../../layers/IOC3dModelsLayer';
import * as d3 from 'd3';
import {
    NavName,
    NavWrapper,
    SampleWrapper,
    SampleItem,
} from '../style.js';

const { TabPane } = Tabs
const { Dragger } = Upload


class AddData extends Component {

    beforeUpload = (file) => {
        // isGLTF file.type === ''
        const isGeoJson = file.type === ''
        const isJson = file.type === 'application/json'
        if (!(isGeoJson || isJson)) {
            message.error(`File ${file.name}  is not supported.`)
            return false
        }
        return isGeoJson || isJson
    }
    onChange = (info) => {
        console.log(info)
        const isGeoJson = info.file.type === ''
        const isJson = info.file.type === 'application/json'
        if (isGeoJson || isJson) {
            let fileArr = []
            fileArr.push(info.file)
            const action = actionCreate.onChangeAct(fileArr)
            this.props.disonChange(action)

            const { status } = info.file;
            if (status !== 'uploading') {
                // console.log(info.fileList[0].response);
                // console.log(info.fileList[0].name);

                const arcLayerEvent = new CustomEvent('arcLayer', {
                    detail: {
                        arcData: info.fileList[0].response,
                        arcName: info.fileList[0].name
                    }
                })
                window.dispatchEvent(arcLayerEvent)
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
                this.props.handleCancel()
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        }
    }
    sampledata() {
        const { handleCancel, sampleList } = this.props
        // console.log(data)
        return (<SampleWrapper>
            {config.layerData.map(item => {
                return (<Tooltip key={item.id} placement="bottomLeft" title={item.pop}>
                    <SampleItem onClick={() => this.clickLayerData(item)}>
                        <img alt='' src={item.url} onClick={handleCancel} />
                        <p className='title'>{item.title}</p>
                        <p className='title-content'>{item.content}</p>
                    </SampleItem>
                </Tooltip>)
            }
            )}
        </SampleWrapper>)
    }

    clickLayerData(item) {

        // EventManager.dispatchEvent(AppEvent.ARC_LAYER_ADD, arcLayer);

        console.log(item)
        let arcLayer
        let scenegraph = []
        switch (item.type) {
            case 'arcLayer1':
                arcLayer = new ArcLayer({
                    id: item.id,
                    data: item.data,
                    pickable: item.pickable,
                    getWidth: item.getWidth,
                    getSourcePosition: d => d.from.coordinates,
                    getTargetPosition: d => d.to.coordinates,
                    getSourceColor: d => [Math.sqrt(d.inbound), 140, 0],
                    getTargetColor: d => [Math.sqrt(d.outbound), 240, 0],
                });
                console.log(arcLayer)
                EventManager.dispatchEvent(AppEvent.ARC_LAYER_ADD, arcLayer);
                break;
            case 'arcLayer2':
                arcLayer = new ArcLayer({
                    id: item.id,
                    data: item.data,
                    pickable: item.pickable,
                    getWidth: item.getWidth,
                    getSourcePosition: d => d.from.coordinates,
                    getTargetPosition: d => d.to.coordinates,
                    getSourceColor: d => [255, 0, 0],
                    getTargetColor: d => [255, 0, 0],
                });

                console.log(arcLayer)
                EventManager.dispatchEvent(AppEvent.ARC_LAYER_ADD, arcLayer);
                break;
            case 'mapbox-scenegraphLayer-yhgj':
                scenegraph = [{
                    id: item.id,
                    position: item.position,
                    scenegraph: item.scenegraph,
                    altitude: item.altitude,
                    offsets: item.offsets,
                    rotate: item.rotate,
                    scale: item.scale,
                }];
                //     EventManager.dispatchEvent(AppEvent.ARC_LAYER_ADD, scenegraph);
                // EventManager.dispatchEvent(AppEvent.BUILDING_GLTF_YHGJ_ADD, scenegraph)
                EventManager.dispatchEvent(AppEvent.MAP_3D_MODELS_YHGJ_EMIT, scenegraph)
                break;
            case 'mapbox-scenegraphLayer-yhgj-7floor':
                scenegraph = [{
                    id: item.id,
                    position: item.position,
                    scenegraph: item.scenegraph,
                    altitude: item.altitude,
                    offsets: item.offsets,
                    rotate: item.rotate,
                    scale: item.scale,
                }];
                //     EventManager.dispatchEvent(AppEvent.ARC_LAYER_ADD, scenegraph);
                // EventManager.dispatchEvent(AppEvent.BUILDING_GLTF_YHGJ_ADD, scenegraph)
                EventManager.dispatchEvent(AppEvent.MAP_3D_MODELS_YHGJ_7FLOOR_EMIT, scenegraph)
                break;
            default:
                throw "未匹配的渲染图层对象，请检查配置文件是否正确配置!";
        }

    }
    render() {
        const { visible, showModal, handleCancel, fileList } = this.props
        // console.log(this.props.name)
        const props = {
            name: 'file',
            method: 'get',
            multiple: true,
            action: 'http://localhost:3000/upload/upload.json',
            accept: '.geojson, application/json, .gltf',
            fileList,
            beforeUpload: this.beforeUpload,
            onChange: this.onChange,
            showUploadList: false,
        };
        //   console.log(props)
        return <Fragment>
            <NavWrapper>
                <NavName>Layers</NavName>
                <Button type='danger' style={{ marginLeft: '10px' }} onClick={showModal}>Add Data</Button>
                <Modal
                    title="Add Data To Map"
                    visible={visible}
                    footer={null}
                    onCancel={handleCancel}
                    width={1000}
                >
                    <Tabs defaultActiveKey="1" >
                        <TabPane tab="Load Your Data" key="1">
                            <p>Upload GeoJson or saved map Json.
                            Read more about supported file formats.</p>
                            <div>
                                <Dragger {...props}>
                                    <p className="ant-upload-drag-icon">
                                        <Icon type="inbox" />
                                    </p>
                                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                    <p className="ant-upload-hint">
                                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                        band files
                                    </p>
                                </Dragger>
                            </div>
                        </TabPane>
                        <TabPane tab="Try sample data" key="2">
                            {this.sampledata()}
                        </TabPane>
                    </Tabs>

                </Modal>
            </NavWrapper>
        </Fragment>
    }
    componentDidMount() {
        //     this.props.layerData()
        window.addEventListener('arcLayer', (e) => this.props.addArcLayer(e))
    }
}
const mapStateToProps = (state) => {
    return {
        visible: state.getIn(['navLeft', 'visible']),
        fileList: state.getIn(['navLeft', 'fileList']),
        data: state.getIn(['navLeft', 'data']),
        sampleList: state.getIn(['navLeft', 'sampleList']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showModal() {
            dispatch(actionCreate.modalAct())
        },
        handleCancel() {
            dispatch(actionCreate.cancelAct())
        },
        disonChange(action) {
            dispatch(action)
        },
        addArcLayer(e) {
            dispatch(actionCreate.arcLayerAct(e.detail))
        },
        arcLayerData(item) {
            // console.log(item)
            dispatch(actionCreate.arcLayerDataAct(item))
        },
        scenegraphLayerData(item) {
            console.log(item)
            dispatch(actionCreate.scenegraphLayerDataAct(item))
        }
        // layerData() {
        //     // console.log(item)
        //     dispatch(actionCreate.layerDataAct())
        // }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddData)