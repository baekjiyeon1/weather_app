// number.addEventListener('click', function () {
//   number.style.color = 'red';
// });

// overcast.addEventListener('mouseenter', function () {
//   overcast.style.fontSize = '30px';
// });

/**
 *
 * @param {NodeList} elmts selected elements from HTML to add events
 * @param {string} event event type e.g. 'click', 'mouseenter'...
 * @param {Function} callback callback funtion to be executed when event is triggered
 */
export function eventOnElmts(elmts, event, callback) {
  for (const elmt of elmts) {
    elmt.addEventListener(event, callback);
  }
}

// 함수의 파라미터로 또 함수를 쓰는것 : 콜백함수
// 데이터타입 : "문자", 숫자, 불리언(true, false)
