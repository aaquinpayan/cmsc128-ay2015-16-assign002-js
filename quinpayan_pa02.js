/*
	Author: Alchelle Rose A. Quinpayan
	Date: March 12, 2016
*/

//returns number of inversions per character
function getHammingDistance(str1, str2){
	if(str1.length <= 0 || str2.length <=0) return "String must not be empty!";	//return if either of strings is empty
	else if(str1.length != str2.length) return "Error! Strings are not equal!";	//return if length of strings are not equal
	else{
		var ctr = 0;
		for(var i=0;i<str1.length;i++){
			if(str1.charAt(i) != str2.charAt(i)) ctr++;	//increments ctr if str1[i] and str2[i] are different
		}
		return ctr;
	}
}

//counts the number of occurrences of str2 in str1
function countSubstrPattern(str1 , str2){
	if(str1.length <= 0 || str2.length <=0) return "String must not be empty!";	//return if either of strings is empty
	else{
		var n=0, i=0, step=1; 

	    while(true){	//counts the occurrences of str2 and assigns it to n
	        i = str1.indexOf(str2, i);
	        if(i >= 0){
	            n++;
	            i += step;
	        }else break;
	    }
   		return n;

	}
}

function isValidString(str1,str2){
	if(str1.length <= 0 || str2.length <=0) return "String must not be empty!"; //return if either of strings is empty
	else{
		for(var i =0;i<str1.length;i++){
			if(str2.search(str1.charAt(i)) < 0) {
				return false;
			} 
		} return true; 

	}
}

//returns true if the string is a valid  string based on the letters of the alphabet
function getSkew(str1, n){
	if(str1.length <= 0) return "String must not be empty!";	//return if either of strings is empty
	else{
		var g = 0, c = 0;
		for(var i=0;i<n;i++){
			if(str1.charAt(i) === 'G') g++;
			else if(str1.charAt(i) === 'C') c++;
		}
		console.log( g-c);
	}
}

var X = 0;
//returns the max number of Gs minus the number of Cs in the first n nucleotides (q>=n)
function getMaxSkewN(str1,n){
	if(str1.length <= 0) return "String must not be empty!"; //return if either of strings is empty
	else{
		
		var g=0 , c=0;
		for(var i=0;i<n;i++){
			if(str1.charAt(i) === 'G') g++;
			else if(str1.charAt(i) === 'C') c++;
		}
		if(X<(g-c)) X = g-c;
		
		return X;
	}
}
//returns the min number of Gs minus the number of Cs in the first n nucleotides (q>=n)
function getMinSkewN(str1, n){
	if(str1.length <= 0) return "String must not be empty!"; //return if either of strings is empty
	else{
		var g=0 , c=0;
		for(var i=0;i<n;i++){
			if(str1.charAt(i) === 'G') g++;
			else if(str1.charAt(i) === 'C') c++;
		}
		if(X>(g-c)) X = g-c;
		
		return X;
	}
}

