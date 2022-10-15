let nums = [1,2,3,4,5]
let resultadonums =[]

//console.log(nums)
resultadonums[0]=nums[0]
for(let cont=0;cont<nums.length; cont++){
console.log("Posicion "+cont+":"+nums[cont])
let valorAcumulado = resultadonums[cont-1];
resultadonums[cont]=valorAcumulado + nums[cont];
}

console.log(nums,resultadonums)