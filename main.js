//console.log(API_KEY)

// this value is going to come from the selector aka drop down box
const muscleType=["abdominals","biceps","triceps"]

for (let muscle of muscleType){
  fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&X-Api-Key=${API_KEY}`)
.then(response => response.json())
.then(data => {
   console.log(data);
})
.catch(error => {
    console.error('Error fetching data:', error);
});}


