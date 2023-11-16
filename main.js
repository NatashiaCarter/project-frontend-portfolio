//console.log(API_KEY)

// this value is going to come from the selector aka drop down box
const muscleType=
fetch(
    `https://api.api-ninjas.com/v1/exercises?muscle=${muscleType}&X-Api-Key=${API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
// subjects
/*abdominals
abductors
adductors
biceps
calves
chest
forearms
glutes
hamstrings
lats
lower_back
middle_back
neck
quadriceps
traps
triceps
*/
