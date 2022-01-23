//Collection Functions (Arrays or Objects)
//did not work 
/*const standardizeInput = function (collection){
  return (typeof collection === object) ? Object.values(collection) : collection.slice()
}
*/

//their solution
const standardizeInput = function (collection){
  return (collection instanceof Array) ? collection.slice(): Object.values(collection) 
}

function myEach(collection, callback){
  const newCollection = standardizeInput(collection);

  //let callbackFunction = callback;
  //newCollection.forEach(element => callbackFunction(element));

  for (let i = 0; i < newCollection.length; i++){
    callback(newCollection[i])
  }

  return collection;
};

function myMap(collection, callback) {
  const newCollection = standardizeInput(collection);

 let newArray = newCollection.map(callback);

  return newArray;
};

function myReduce(collection, callback, acc) {
  //did not work orig because assigned as const but need let in order for if statement to reassign newCollection
  let newCollection = standardizeInput(collection);
  if(!acc){
    acc = newCollection[0];
    newCollection = newCollection.slice(1);
  };
  //let reduce = newCollection.reduce(callback, acc);
  //didn't understand what prompt was asking for and looked at solution for the below
  for(let i = 0; i < newCollection.length; i++){
    acc = callback(acc, newCollection[i], newCollection)
  };
  return acc;
};

function myFind(collection, predicate) {
  let newCollection = standardizeInput(collection);

  return newCollection.find(predicate);
};

function myFilter(collection, predicate) {
  let newCollection = standardizeInput(collection);

  return newCollection.filter(predicate);
};

function mySize(collection){
  let newCollection = standardizeInput(collection);
  return newCollection.length
};

//array functions
function myFirst(array, n){
  //didn't work when parameter was [n] and below condition was ([n])
  let returnVal = (n) ? array.slice(0, n) : array[0]; 
  return returnVal;
};

function myLast(array, n){
  let returnVal = (n) ? array.slice(-n) : array[array.length -1];
  return returnVal;
};

//Object Functions 
function myKeys(object){
  return Object.keys(object)
};

function myValues(object){
  return Object.values(object)
};