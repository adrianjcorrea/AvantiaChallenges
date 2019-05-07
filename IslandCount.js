//###ISLAND COUNT####

//Given a string representation of a 2d map, return the number of islands in the map.

//Land spaces are denoted by a zero.
//Water is denoted by a dot.
//Rows are denoted by newlines ('\n').
//Two land spaces are considered connected if they are adjacent (horizontal or vertical, but not diagonal).
//Too easy? Try solving it without recursion..


//##Example:

//You may be given the string ".0...\n.00..\n....0" as input.
//This correlates to a grid, like this:

//.0...
//.00..
//....0


//This would be an example of a map that contains two islands; one with 3 pieces of land, one with 1 piece of land.
//##More example:


//This is 5 islands:

//0...0
//..0..
//0...0

//This is 3 islands:

//..000.
//..000.
//..000.
//.0....
//..000.

function create2DMatrix(strMap){
  //Create an empty array as place holder for \n rows as a new array.
  let matrix = [];

  //Split string by \n split() to return an array with splitted values.
  //Using forEach method to iterate returned array of strMap.split(\n)
  strMap.split("\n").forEach( row =>
    //Splitting each row at index and pushing that returned array to matrix array.
    matrix.push(row.split(''))
  )

  //This function defines border of matrix
  function dfs(i, j, matrix) {
    //If it gets to edge of matrix it will change i and j value ( Changing starting point location)
    if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length || matrix[i][j] != '0')
     return;
       //Changes value of indexes to * since it has already been iterated thru and its checking if indexes are value 0.
       matrix[i][j] = '*';
       dfs(i-1, j, matrix);
       dfs(i+1, j, matrix);
       dfs(i, j-1, matrix);
       dfs(i, j+1, matrix);
  }
  //This is my counter
  let counter = 0;

  //Nested looping if
  for (let i = 0; i < strMap.length; i++) {
    for (let j = 0; j < strMap[0].length; j++) {
      //index in j position and i possition equal 0 incrementen counter by 1
      if (strMap[i][j] === '0') {
        counter += 1;
        //Run next function call of dfs until all 0 are changed with *
        dfs(i, j, strMap);
      }
    }
  }
  return counter;
}

create2DMatrix("..000.\n..000.\n..000.\n.0....\n..000.");
create2DMatrix("0...0\n..0..\n0...0");
create2DMatrix("0....\n.00..\n....0");
