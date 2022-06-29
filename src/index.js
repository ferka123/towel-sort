
// You should implement your task here.module.exports = 

module.exports = function towelSort (matrix) {
  return matrix ? matrix.map((item,index)=>index%2 ? item.reverse() : item).flat() : [];
}
