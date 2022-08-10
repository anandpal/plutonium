router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    let n = arr.pop()
    let missingNumber = ((n*(n+1))/2)-sum

    ///LOGIC WILL GO HERE 
    res.send(  { data: missingNumber  }  );
})