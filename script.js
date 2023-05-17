/**
	[4, 2, 7, 6, 9] => 4 + 2 = 6          // 2 is minimum
	[6, 7, 6, 9]    => 6 + 6 = 12         // 6 is minimum
	[12, 7, 9]      => 7 + 9 = 16         // both 7 and 9 are minimum 
	[12, 16]        => 12 + 16 = 28       // 12 is minimum
	sum             => 6 + 12 + 16 + 28 = 63 (ans) 
*/
function calculateMinCost() {
  //your code here
	let text = document.getElementById("rope-lengths").value;
	let result = document.getElementById("result");
	let arr = text.split(",")
	let sortedArray = arr.map(Number).sort();
	let arr2 = [...sortedArray]
    let sum = 0, minCost = 0;
    for(let i = 0; i < sortedArray.length; i++){
        arr2 = arr2.sort((a,b)=>a-b);
        let a = arr2.shift();
        let b = arr2.shift();
        sum = a + b;
        if(sum) minCost += sum
        arr2.push(sum);
    }
	result.innerHTML = minCost
}  
