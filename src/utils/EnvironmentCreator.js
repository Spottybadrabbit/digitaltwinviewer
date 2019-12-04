import {PhongMaterial} from '@luma.gl/core';
import {AmbientLight, PointLight} from '@deck.gl/core';

/**
 * 创建建筑物材质
 * @param {*} materialParameters 
 */
export const createBuildingsMaterial=(materialParam)=>{
    return new PhongMaterial({
        ambient: materialParam.ambient,
        diffuse: materialParam.diffuse,
        shininess: materialParam.shininess,
        specularColor: materialParam.specularColor,
    });
}

/**
 * 创建场景环境光
 * @param {*} ambientParam 
 */
export const createSceneAmbientLight=(ambientParam)=>{
    return new AmbientLight({
        color: ambientParam.color,
        intensity: ambientParam.intensity
    });
}

/**
 * 
 * @param {*} ambientParam 
 */
export const createScenePointLight=(pointParam)=>{
    return new PointLight({
        color: pointParam.color,
        intensity: parseFloat(pointParam.intensity),
        position: pointParam.position
    });
}