import { actionType } from ".";


export const togAct = () => {
    return {
        type: actionType.TOG_NAV
    }
}
export const modalAct = () => {
    return {
        type: actionType.MOD_ITEM
    }
}
export const okAct = () => {
    return {
        type: actionType.HANDLE_OK
    }
}
export const cancelAct = () => {
    return {
        type: actionType.HANDLE_CANCEL
    }
}
export const onChangeAct = (fileArr) => {
    // console.log(fileArr)
    return {
        type: actionType.ON_CHANGE,
        fileList: fileArr
    }
}
export const arcLayerAct = (data) => {
    return {
        type: actionType.ARCLAYER,
        data: data.arcData,
        name: data.arcName
    }
}
export const layerDele = () => {
    return {
        type: actionType.LAYERDELE,
    }
}
export const arcLayerDataAct = (item) => {
    // console.log(item)
    return {
        type: actionType.ARCLAYER_DATA,
        arcLayerData: item
    }
}
export const scenegraphLayerDataAct = (item) => {
    // console.log(sampleList)
    return {
        type: actionType.SCENEGRAPHLAYER_DATA,
        scenegraphLayerData: item
    }
}
export const togEyeAct = () => {
    return {
        type: actionType.TOG_EYE,
    }
}
