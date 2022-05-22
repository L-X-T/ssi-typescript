function forEach(ary, action) {
  for (var i = 0; i < ary.length; i++) {
    action(ary[i]);
  }
}

function showAlert(item) {
  alert(item);
}

const myIntegers = [1, 2, 3];

export function run() {
  // classic
  forEach(myIntegers, showAlert);

  // pass a function as parameter
  /*forEach(myIntegers, function (item) {
    alert(item);
  });*/

  // pass a function as lambda
  // forEach(myIntegers, (item) => alert(item));
}
