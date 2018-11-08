import TouchSimulator from './utils/TouchSimulator';
import sleep from './utils/sleep';

import AnyTouch from '../src/main'
document.body.innerHTML = '<div id="box">box</div>';
const el = document.getElementById('box');
const at = new AnyTouch(el);

/**
 * 模拟PinchIn
 */
const simulatorPinchIn = () => {
    const ts = new TouchSimulator();
    ts.dispatchTouchStart(el, [{ x: 0, y: 0 }, { x: 200, y: 0 }]);
    ts.dispatchTouchMove(el, [{ x: 0, y: 0 }, { x: 100, y: 0 }]);
    ts.dispatchTouchMove(el, [{ x: 0, y: 0 }, { x: 40, y: 0 }]);
    ts.dispatchTouchEnd(el);
};

/**
 * 模拟PinchOut
 */
const simulatorPinchOut = () => {
    const ts = new TouchSimulator();
    ts.dispatchTouchStart(el, [{ x: 0, y: 0 }, { x: 50, y: 0 }]);
    ts.dispatchTouchMove(el, [{ x: 0, y: 0 }, { x: 100, y: 0 }]);
    ts.dispatchTouchMove(el, [{ x: 0, y: 0 }, { x: 170, y: 0 }]);
    ts.dispatchTouchEnd(el);
};


// test('pinchin是否触发?', (done) => {
//     at.on('pinchin', ({ type, scale, deltaScale }) => {
//         expect(type).toBe('pinchin');
//         done();
//     });
//     // 模拟touch触碰
//     simulatorPinchIn();
// });

test('pinchout是否触发?', (done) => {
    at.on('pinchout', ({ type, scale, deltaScale }) => {
        expect(type).toBe('pinchout');
        done();
    });
    // 模拟touch触碰
    // await sleep(100);
    setTimeout(() => {
        simulatorPinchOut();
    }, 1000)

});


test('pinch缩放是否正确?', (done) => {
    let index = 0;
    let expectScales = [1,0.5,0.2];
    at.on('pinch', ({scale, deltaScale }) => {
        expect(scale).toBe(expectScales[index]);
        index++;
        done();
    });
    simulatorPinchIn();
});