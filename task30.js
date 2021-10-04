function tailAndHead(arr){
  const array=[];
  for(let i=0;i<arr.length-1;i++)
    array.push(arr[i]%10+Number((arr[i+1]+'')[0]))
  return array.reduce((a,b)=>a*b)
}
