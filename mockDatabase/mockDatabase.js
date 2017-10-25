var ingredients = [

{
  'id'  : 1,
  'name'  : 'viande',
  'price' : 1,20
},

{
  'id'  : 2,
  'name'  : 'poisson',
  'price' : 2,2
},

{
  'id'  : 3,
  'name'  : 'salade',
  'price' : 0,8
}

{
  'id'  : 4,
  'name'  : 'pain',
  'price' : 0,9
}

{
  'id'  : 5,
  'name'  : 'yahourt',
  'price' : 0,9
}

{
  'id'  : 6,
  'name'  : 'eau',
  'price' : 0,9
}


];

var plats = [

{
  'id'  : 1,
  'name'  : 'Hamburger',
  'price' : 7
},

{
  'id'  : 2,
  'name'  : 'steak',
  'price' : 10
}

];

var menu = [

{
  'id'  : 1,
  'name'  : 'menu enfant',
  'platList' : {
    Plats[1], Ingredients[5], Ingredients[6]
  }
},

{
  'id'  : 2,
  'name'  : 'menu adulte',
  'platList' : {
    Plats[1], Ingredients[5], Ingredients[6]
  }
}

];



var employeeList = [

{
  'id'  : 1,
  'name'  : 'Toto',
  'role'  : 'Cuisinier',
  'totalOrderReceived': 2
}

{
  'id'  : 2,
  'name'  : 'Sophie',
  'role'  : 'Serveuse',
  'totalOrderReceived': 2
}

{
  'id'  : 3,
  'name'  : 'Arthur',
  'role'  : 'Caissier',
  'totalOrderReceived': 2
}

{
  'id'  : 4,
  'name'  : 'James',
  'role'  : 'Manageur',
  'totalOrderReceived': 0
}

];


var clientList = [

{
  'id'  : 1,
  'name'  : 'Guillaume',
  'solde' : 50
}

];


var Order = [

{
  'id'    : 1,
  'clientId'  : 1,
  'menuId'  : 1,
  'employeeId': 2,
  'date'    : new Date("December 17, 1995 03:24:00"),
  'totalPrice': 23,
  'state'   : true,   // permet de vérifier que la commande a été délivrer.
  'menuList' : {
    menu[1], menu[2]
  }
}

];
