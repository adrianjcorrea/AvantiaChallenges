//###SUB SETS && SUPER SETS####

//###Playing with Sets : Sup/Sub####

//Set objects are new JavaScript built-in objects defined since ECMAScript 2015.
//A Set lets you store unique values of any type. It comes with some useful methods like .add, .clear, .has . . . BUT some "Set operations" are missing, like . . .

//Subset and Superset

//....................
//.               B  .
//.                  .
//.                  .
//.                  .
//.  ..........      .
//.  .        .      .
//.  .      A .      .
//.  ..........      .
//....................

//If every member of set A is also a member of set B, then A is said to be a subset of B, written A ⊆ B (also pronounced "A is contained in B").
// Equivalently, we can write B ⊇ A, read as "B is a superset of A", "B includes A", or "B contains A".

//Example:
//  {1, 3} ⊆ {1, 2, 3, 4}.
//  {1, 2, 3, 4} ⊆ {1, 2, 3, 4}.
//
//  {1, 2, 3, 4} ⊇ {1, 3}.
//  {1, 2, 3, 4} ⊇ {1, 2, 3, 4}.

//Task
//Create 2 functions:
//
//isSubsetOf getting 2 sets as arguments and returning true if 2d set contains all elements of 1st one.
//
//isSupersetOf getting 2 sets as arguments and returning true if 1st set contains all elements of 2d one.
//
//Examples:
//A = new Set([1,2]);
//B = new Set([1,2,3]);
//
//isSubsetOf(A,B) // -> true
//isSubsetOf(B,A) // -> false
//
//isSupersetOf(A,B) // -> false
//isSupersetOf(B,A) // -> true

//Using constructor method new to create sets.
const set1 = new Set([1, 2, 'hello']);
const set2 = new Set([1, 2, 3, 'hello']);


//This function will check if first paramater(A) set is subSet of second parameter(B).
function isSubset(a, b){
  //Convert Sets to arrays.
  a = Array.from(a);
  b = Array.from(b);

  //Checks if values of parameter(a) are all contained in parameter(b).
  //If condicion is true automatically parameter (a) is subSet of parameter(b).
  //If it dosent the is not a subSet
  return a.every(val => b.indexOf(val) !== -1 )
}

//Invoking function to be runned
isSubset(set1, set2), //Should return TRUE.
isSubset(set2, set1), //Should return FALSE.

//This function will check if first paramater(A) set is superSet of second parameter(B).
function isSuperSet(a, b){
  //Cnvert Sets into an arrays.
  a = Array.from(a);
  b = Array.from(b);

  //Checks if parameter(b) contains all values of parameter(a).
  //Checking indexof value of parameter(a) with val of parameter(b).
  //Checking parameter (a) with value of parameter(b) to not equal -1 for if its -1
  //Then automatically value dosent exist in parameter(b) and condicion is true.
  //If condicion is true automatically parameter (a) is SuperSet of parameter(b)
  return b.every(val => a.indexOf(val) !== -1)

}

isSuperSet(set1, set2) //Should return FALSE. set1 is NOT superSet of set2.
isSuperSet(set2, set1) //Should return TRUE. set2 is superSet of set1.
