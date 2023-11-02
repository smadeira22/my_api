const displayBtn = document.querySelector('#display')

displayBtn.addEventListener('click', fetchClothes)

function fetchClothes() {
  fetch("http://localhost:3000/clothes/")
  .then(resp => resp.json())
  .then(addClothing)
}
 
 
function addClothing(data) {
  //targets clothes list
  const clothesList = document.querySelector('#clothes') 
  //creates a variable for the argument passed
  const clothes = data
  //sets the ul list content to empty
  clothesList.textContent = ''
  //add clothing to the list
  clothes.forEach(clothing => {
    const li = document.createElement('li')
    li.textContent = clothing.name
    clothesList.appendChild(li)
  })
}

const form = document.getElementById('clothingForm')

form.addEventListener('submit', createClothing)

async function createClothing(e) {
  e.preventDefault()
  console.log(e.target.clothing.value)

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: e.target.clothing.value
    })
  }

  const response = await fetch("http://localhost:3000/clothes/", options)

  if (response.status == 201) {
    e.target.clothing.value = ''
  }
}