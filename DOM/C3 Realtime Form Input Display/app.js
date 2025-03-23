const nameInput=document.getElementById("nameInput");
let nameDisplay=document.getElementById("nameDisplay")
console.log(nameDisplay.textContent)
console.log(nameInput)
nameInput.addEventListener("input", function(event) {
  console.log("Typed: ", event.target.value);
  nameDisplay.textContent=event.target.value;
});


const jobInput=document.getElementById("jobInput")
let jobDisplay=document.getElementById("jobDisplay")

jobInput.addEventListener("input", function(event){
  console.log(event.target.value)
  jobDisplay.textContent=(event.target.value)
})

const ageInput=document.getElementById("ageInput")
let ageDisplay=document.getElementById("ageDisplay")

ageInput.addEventListener("input", function(event){
  console.log(event.target.value)
  ageDisplay.textContent=(event.target.value)

})

const bioInput=document.getElementById("bioInput")
let bioDisplay=document.getElementById("bioDisplay")

bioInput.addEventListener("input", function(event){
  console.log(event.target.value)
  bioDisplay.textContent=(event.target.value)

})


