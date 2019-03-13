module.exports = function getZerosCount(number, base) {
 // your implementation
 let n = number;
 let num = 2;
 let arr = [];
 
 function getEasyBase (b) {
	 if (b === 1) {
			 return
			 }
			if (b < num) {
			 return
			 }else if(b % num === 0){
		arr=[...arr, num];
		b = b / num;
		getEasyBase(b);
		}else if(b > num){		
		 num++;
		 getEasyBase(b);
	 }	
 return arr
}
let easyBase = getEasyBase(base);

function getSum(easyBase){
let all=[];
let repeat=1;
for (let i=0; i<easyBase.length; i++){
	let sum = 0;
	if(easyBase[i]==easyBase[i+1]){
		repeat++
	}else{ 
		repeat=1;
	}
	for (let j=1; n>=Math.pow(easyBase[i],j);j++){    
		sum = sum + Math.floor(n/Math.pow(easyBase[i],j));       
		}       
		var result=Math.floor(sum/repeat);			
		all=[...all, result]		 
	}return all
}
let allSum=getSum(easyBase);
		
let minZero=Math.min.apply(null, allSum)
return minZero
}
