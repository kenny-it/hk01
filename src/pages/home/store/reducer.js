import { fromJS } from "immutable";

const defaultState = fromJS({
    swiperList: [{
        id: 1,
        desc: '美國連月施壓　Facebook取消申請興建連通香港海底光纖電纜',
        selective: true,
        time: ' 突發  7小時前',
        srcUrl: 'https://cdn.hk01.com/di/media/images/dw/20210311/446677608248119296680429.jpeg/VpnePqPgbd-nV-f7JetJBWj3I7z2ZQbNkh5CUJIeQlA?v=w1600r16_9'
    },{
        id: 2,
        desc: '美國連月施壓　Facebook取消申請興建連通香港海底光纖電纜',
        selective: true,
        time: ' 突發  7小時前',
        srcUrl: 'https://cdn.hk01.com/di/media/images/dw/20210310/446388582488215552726013.jpeg/YHlt6sz6noWhp2iyue817TAmKjhQmgi4w7bB-cO2wfk?v=w1920r16_9'
    },{
        id: 3,
        desc: '美國連月施壓　Facebook取消申請興建連通香港海底光纖電纜',
        selective: false,
        time: ' 突發  7小時前',
        srcUrl: 'https://cdn.hk01.com/di/media/images/dw/20210303/443761447479021568582017.jpeg/CjMmW5YIGUM4P6X0asKa_XhvatPiwc3A33UlPt91JT4?v=w1120r16_9'
    },{
        id: 4,
        desc: '美國連月施壓　Facebook取消申請興建連通香港海底光纖電纜',
        selective: true,
        time: ' 突發  7小時前',
        srcUrl: 'https://cdn.hk01.com/di/media/images/dw/20210310/446287994145214464732986.jpeg/4zRpsMU-B5aJlZvCLY2RY583bA0aFZUJJ699Px2vfT8?v=w1600r16_9'
    }]
})

function Reducer(state = defaultState, action) {
    return state
}

export default Reducer