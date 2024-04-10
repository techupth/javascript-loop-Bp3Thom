// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
let min = scores[0] //100
for (let i = 0; i<4; i= i+1){
    if(scores[i] < min){
        minScore = scores[i]
    }
}

console.log(minScore);
