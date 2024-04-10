// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
for (let index = companyName.length -1; index >= 0; index--){
    reversedCompanyName += companyName.charAt(index);
}
console.log(reversedCompanyName);
