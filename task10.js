function pickIt(arr){
  const odd=[],even=[];
  for (var i=0; i<=arr.length-1; i++)
  { if(arr[i] % 2 == 0){
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return [odd,even];
}
