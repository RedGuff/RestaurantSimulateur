class Ingredients {
  constructor(listIngredient){
    this.listIngredient = listIngredient;
  }

  addIngredient (id, value){
    if (! this.listIngredient[id]) {
      return false;
    }

    this.listIngredient[id].nb += value;

    return true;
  }


  removeIngredient (id, value){

    if (! this.listIngredient[id] && ! this.listIngredient[id].nb) {
      return false;
    }

    this.listIngredient[id].nb -= value;

    return true;
  }


  get listIngredient(){
    return this._listIngredient;
  }


  set listIngredient(listIngredient){
    this._listIngredient = listIngredient;
  }
}

//-----------------------ingrediant-----------------------------
const listIngredient = {
  'viande':{
    'price' : 1.20,
    'nb' : 0
  },
  'poisson':{
    'price' : 2.2,
    'nb' : 0
  },
  'salade':{
    'price' : 2.2,
    'nb' : 0
  },
  'pain':{
    'price' : 2.2,
    'nb' : 0
  },
  'yahourt':{
    'price' : 2.2,
    'nb' : 0
  },
  'eau':{
    'price' : 2.2,
    'nb' : 0
  }
};



class Plat{
  constructor(){
    this._listPlat = {};
  }

  addPlat(plat) {
    if (typeof plat != 'object') {
      return false;
    }

    Object.assign(this._listPlat, plat);

    return true;
  }

  removePlat (name) {
    if (! name && ! name.length) {
      return false;
    }

    delete this._listPlat[name];

    return true;
  }

  get listPlat(){
    return this._listPlat;
  }


  set listPlat(listPlat){
    this._listPlat = listPlat;
  }
}

//-------------------------------plats---------------------------
const hamburgers = {
  'hamburgers' : {
    'ingredient1' : 'viande',
    'ingredient2' : 'pain',
    'ingredient3' : 'salade'
  }
};

const sandwichs = {
  'sandwichs': {
    'ingredient1' : 'viande',
    'ingredient2' : 'pain',
    'ingredient3' : 'salade'
  }
};

let plats = new Plat();
/* plats.addPlat(hamburgers);
 plats.addPlat(sandwichs);
 plats.removePlat('hamburgers');
 console.log(plats._listPlat);

*/


//---------------------------------------
class Employee{
  constructor(){
    this._listEmployees = {};
  }

  addEmploye(employee) {
    if (typeof employee != 'object') {
      return false;
    }

    Object.assign(this._listEmployees, employee);
    return true;
  }

  removeEmployee (name) {
    if (! name && ! name.length) {
      return false;
    }

    delete this._listEmployees[name];
    return true;
  }

  updateRole(name,newRole){
    if (! name && ! name.length) {
      return false;
    }

    this._listEmployees[name].role = newRole;
    return true;
  }
  increaseTotalOrderReceive(name){
    
    console.log(this._listEmployees[name].role);
    this._listEmployees[name].totalOrderReceived ++;
    return true;
  }
  
  get listEmployee(){
    return this._listEmployees;
  }


  set listEmployee(listEmployees){
    this._listEmployees = listEmployees;
  }
}

//--------------------employee-----------------------
const Toto = {
  'Toto' : {
    'name' : 'Toto',
    'role' : 'Cuisinier',
    'totalOrderReceived' : 2
  }
};

const Sophie = {
  'Sophie' : {
    'name' : 'Sophie',
    'role' : 'Serveuse',
    'totalOrderReceived' : 2
  }
};




//--------------------------------------------------------------Menu-------------------------------


class Menu{
  constructor(){
    this._listMenu = {};
  }

  addMenu(plat) {
    if (typeof plat != 'object') {
      return false;
    }

    Object.assign(this._listMenu, plat);

    return true;
  }

  removeMenu (name) {
    if (! name && ! name.length) {
      return false;
    }

    delete this._listMenu[name];

    return true;
  }

  get listMenu(){
    return this._listMenu;
  }


  set listMenu(listMenu){
    this._listMenu= listMenu;
  }
}

const Enfant = {
  'Enfant' : {
    'name' : 'Enfant',
    'plat': sandwichs
  }
};

const Truc = {
  'truc' : {
    'name' : 'Truc',
    'plat' : hamburgers
  }
};

//----------------------------------------------------------Order--------------------------------------------------


class Order{
  constructor(){
    this._listOrder = {};
  }

  addOrder(order) {
    if (typeof order != 'object') {
      return false;
    }

    Object.assign(this._listOrder, order);

    return true;
  }

  removeOrder (idOrder) {
    if (! idOrder && ! idOrder.length) {
      return false;
    }

    delete this._listOrder[idOrder];

    return true;
  }
  
  updateState(name,){
    if (! name && ! name.length) {
      return false;
    }
    
    if (this._listOrder[name].state){
      this._listOrder[name].state = false;
    }
    else{
      this._listOrder[name].state = true;
    }
    
    return true;
  }

  get listOrder(){
    return this._listOrder;
  }


  set listOrder(listOrder){
    this._listOrder = listOrder;
  }
}

//-------------------------------order---------------------------

const Order1 = {
  'Order1':{
    'clientId'  : 1,
    'employeeId': 2,
    'date'    : new Date("December 17, 1995 03:24:00"),
    'totalPrice': 23,
    'state'   : true,   
    'menu' : Enfant
  }
}
const Order2 = {
  'Order2':{
    'clientId'  : 3,
    'employeeId': 2,
    'date'    : new Date("December 18, 1995 03:24:00"),
    'totalPrice': 54,
    'state'   : false,   
    'state'   : false, 
    'menu' : Truc
  }
}

class Client{
  constructor(){
	  this._listClient = {};
  }

  addClient(name) {
    if (typeof name != 'object') {
      return false;
    }

  Object.assign(this._listClient, name);

    return true;
  }

  removeClient (name) {
    if (! name && ! name.length) {
      return false;
    }

    delete this._listClient[name];

    return true;
  }


  decreaseSold(client,sold) {
    
    this._listClient[client].sold -= sold;
    return true;
  }


  get listClient(){
    return this._listClient;
  }


  set listClient(listClient){
    this._listClient= listClient;
  }
}


const GUILLAUME= {
  'Guillaume' : {
     'id' : 1,
    'name' : 'Guillaume',
    'sold': 50
  }
};


const MARTY = {
  'Marty' : {
    'id' : 2, 
	'name' : 'Marty',
    'sold': 10
	}
};


const Restaurant = class Restaurant {
	constructor(name, city, numberSit){
		this._name=name;
		this._city=city;
		this._numberSit= numberSit;
		this._listEmployees = new Employee();
		this._menuList= new Menu();
		

	}
  

addRestaurantMenu(menu) {
  
    this._menuList.addMenu(menu);
  
  }
removeRestaurantMenu (name) {
  
    this._menuList.removeMenu(menu);
  
  }
  addRestaurantEmployees(employee) {
    
   this._listEmployees.addEmploye(employee);
    
  }
  removeRestaurantEmployees (employee) {
    this._listEmployees.removeEmployee(employee);
  }



  set name(name){
    this._name = name;
  }
	get name(){
		return this._name;
	}

  set city(city){
    this._city = city;
  }
	get city(){
		return this._city;

	}

  set numberSit(numberSit){
    this._numberSit = numberSit;
  }
	get numberSit(){
		return this._numberSit;
	}
	restaurantToString(){
		console.log('nom : ' + this._name);
		console.log(', city : '+ this._city);
		console.log('numberSit : '+this._numberSit);
		console.log(', listEmployee : ');
		console.log(this._listEmployees);
		console.log(', listMenu : ');
		console.log(this._menuList);
		
	}
}
/*
let menus = new Menu();
menus.addMenu(Enfant);
menus.addMenu(Truc);
menus.removeMenu('truc');
console.log(menus._listMenu);
*/
/*
let orders = new Order();
orders.addOrder(Order1);
orders.addOrder(Order2);
orders.removeOrder('Order2');
orders.updateState('Order1');
console.log(orders._listOrder);
*/
/*
let plats = new Plat();
plats.addPlat(hamburgers);
plats.addPlat(sandwichs);
plats.removePlat('hamburgers');
console.log(plats._listPlat);
*/
 /*
let employes = new Employee();
employes.addEmploye(Toto);
employes.addEmploye(Sophie);
employes.removeEmployee('Sophie');
employes.updateRole('Toto','cuistot');
employes.increaseTotalOrderReceive('Toto');
console.log(employes._listEmployees);
 */
/*
let clients = new Client();
clients.addClient(MARTY);
clients.addClient(GUILLAUME);
clients.removeClient('Marty');
clients.decreaseSold('Guillaume',10)
console.log(clients._listClient);
*/
 /*
let mcdo = new Restaurant("mcdo","paris",150);
mcdo.addRestaurantMenu(Enfant);
mcdo.addRestaurantEmployees(Sophie);
console.log(mcdo.restaurantToString());
 */
