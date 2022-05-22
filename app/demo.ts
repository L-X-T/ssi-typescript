function forEach(ary, action) {
  for (var i = 0; i < ary.length; i++) {
    action(ary[i]);
  }
}

function showAlert(item) {
  alert(item);
}

const myIntegers = [1, 2, 3];

function Person(id, vorname, nachname) {
  this.vorname = vorname;
  this.nachname = nachname;

  this.vollerName = function () {
    return id + ': ' + this.vorname + ' ' + this.nachname;
  };
}

class PersonClass {
  id;
  vorname;
  nachname;

  constructor(id, vorname, nachname) {
    this.id = id;
    this.vorname = vorname;
    this.nachname = nachname;
  }

  vollerName() {
    return this.id + ': ' + this.vorname + ' ' + this.nachname;
  }
}

export function run() {
  // classic
  // forEach(myIntegers, showAlert);

  // pass a function as parameter
  /*forEach(myIntegers, function (item) {
    alert(item);
  });*/

  // pass a function as lambda
  // forEach(myIntegers, (item) => alert(item));

  var rudi = new Person(47, 'Rudolf', 'Rentier');
  // var rudi = new PersonClass(47, 'Rudolf', 'Rentier');
  /*console.log(rudi.vorname);
  console.log(rudi.nachname);
  console.log(rudi.vollerName());*/

  forEach(myIntegers, function (item) {
    console.debug(this); // Aufrufer (= forEach kann this festlegen)
  });

  var that = this;
  forEach(myIntegers, function (item) {
    console.debug(that);
  });

  forEach(myIntegers, (item) => {
    console.debug(this);
  });
}
