import { fromJS } from 'immutable';
import { actionType } from '.';

const defaultState = fromJS({
    collapsed: false,
    // visibel: false,
    menuList: [
        {
            title: 'file',
            key: 'file',
            children: [
                {
                    title: 'base',
                    key: 'base'
                }, {
                    title: 'Fill Color',
                    key: 'Fill Color'
                }, {
                    title: 'Stroke Color',
                    key: 'Stroke Color'
                }, {
                    title: 'Stroke Width',
                    key: 'Stroke Width'
                }, {
                    title: 'Height',
                    key: 'Height'
                },
            ]
        }
    ],
    headIcon: [
        {
            iconfont: '&#xe63e;',
            popover: 'Share',
        },
        {
            iconfont: '&#xe61e;',
            popover: 'Bug Report',
            href: 'https://github.com/keplergl/kepler.gl/blob/master/docs/user-guides/a-introduction.md'
        },
        {
            iconfont: '&#xe600;',
            popover: 'User Guide',
            href: 'https://github.com/keplergl/kepler.gl/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBug%5D'

        }
    ],
    fileList: [],
    data: {},
    name: '',
    // sampleList: [],
    // url: '', 
    // center: [],
    toggleEye: true,
    arcLayerData: [],
    scenegraphLayerData: [],
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.TOG_NAV:
            return state.set('collapsed', !state.get('collapsed'))
        case actionType.MOD_ITEM:
            return state.set('visible', true)
        case actionType.HANDLE_CANCEL:
            return state.set('visible', false)
        case actionType.ON_CHANGE:
            // console.log(action.fileList)
            return state.set('fileList', action.fileList)
        case actionType.ARCLAYER:
            // return state.set('data', action.data)
            return state.merge({
                'data': action.data,
                'name': action.name
            })
        case actionType.LAYERDELE:
            return state.merge({
                'name': '',
                'data': {},
                'fileList': [],
                'url': '',
                'center': []
            })
        case actionType.TOG_EYE:
            return state.set('toggleEye', !state.get('toggleEye'))
        case actionType.ARCLAYER_DATA:
            return state.set('arcLayerData', action.arcLayerData)
        case actionType.SCENEGRAPHLAYER_DATA:
            return state.set('scenegraphLayerData', action.scenegraphLayerData)

    }
    return state
}