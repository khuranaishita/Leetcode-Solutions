/**
 * @param {character[][]} grid
 * @return {number}
 */

const numIslands = (grid) => {
  let solution = 0;
  for(let y = 0; y < grid.length; y++){
      for(let x = 0; x < grid[0].length; x++){
          if(grid[y][x] === '1'){
              solution++;
              convertIsland (y, x, grid);
          }
      }
  }
  return solution;
};

const convertIsland = (yCo, xCo, mapR) => {
  if(!mapR[yCo] || !mapR[yCo][xCo]) return;
  if(mapR[yCo][xCo] === '0') return;
    mapR[yCo][xCo] = '0';
    convertIsland(yCo+1, xCo, mapR);
    convertIsland(yCo-1, xCo, mapR);
    convertIsland(yCo, xCo+1, mapR);
    convertIsland(yCo, xCo-1, mapR);  

};