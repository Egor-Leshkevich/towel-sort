
// You should implement your task here.



module.exports = function towelSort (matrix) {
  if(matrix==undefined) {return [];}
  var i,j,row_to_rev;
  var end_arr=[]
  var arr=matrix;
  row_to_rev=matrix.length;
  if(row_to_rev%2!=0)
  row_to_rev=Math.floor(row_to_rev/2);
  else row_to_rev/=2;
  for(i=0,j=0;j<row_to_rev;i+=2,j++) {
  arr[i+1]=arr[i+1].reverse();  
  }
  end_arr=arr.flat();
  return end_arr;
}
