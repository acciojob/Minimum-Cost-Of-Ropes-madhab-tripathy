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
    let ans = []
    ans.push(sortedArray[0]+sortedArray[1])
    let j = 0, sum = 0, n = sortedArray.length;
    for(let i = 2; i < n; i++){
        if(ans[j] <= sortedArray[i]){
            ans.push(ans[j] + sortedArray[i])
            j++;
        }else if(ans[j] <= sum){
            ans.push(sum)
            sum = 0;
            j++;
        }else{
            sum += sortedArray[i];
        }
    }
    if(sum !== 0){
        ans.push(sum)
        j++;  
    } 
    ans.push(ans[j] + ans[j-1])	
	let minimumCost = 0
    for(let i in ans) minimumCost += ans[i]; 
	result.innerHTML = minimumCost
}  
