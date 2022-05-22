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

function Dienstnehmer(id, vorname, nachname, abteilung) {
  Person.call(this, id, vorname, nachname);
  this.abteilung = abteilung;
}

Dienstnehmer.prototype = new Person(this.id, this.vorname, this.nachname);
Dienstnehmer.prototype.wechsle = function (neueAbteilung) {
  console.debug(this.vollerName() + ' wechselt zu ' + neueAbteilung);

  this.abteilung = neueAbteilung;
};

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

  /*forEach(myIntegers, function (item) {
    console.debug(this); // Aufrufer (= forEach kann this festlegen)
  });

  var that = this;
  forEach(myIntegers, function (item) {
    console.debug(that);
  });

  forEach(myIntegers, (item) => {
    console.debug(this);
  });*/

  // forEach('test', 'test');

  /*try {
    console.debug('trying...');
    forEach('test', 'test');
  } catch (e) {
    console.warn(e);
  } finally {
    console.debug('...finally done :-)');
  }*/

  var dn = new Dienstnehmer(1, 'Max', 'Muster', 'Management');
  /*console.debug('Dienstnehmer', dn);
  dn.wechsle('Dev');
  console.debug('Nach Wechsel', dn);*/

  const dn2 = { ...dn, vorname: 'Maria' };
  console.debug('Dienstnehmer 2', dn2);

  const myIntegersExtended = [...myIntegers, 4];
  console.debug(myIntegersExtended);
}
