console.log('%c HI', 'color: firebrick')


function fetchFourDogs(){
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res=>res.json())
    .then(data=>downloadImages(data))
}
fetchFourDogs()

function fetchDogBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res=>res.json())
    .then(data=>downloadBreeds(data))
}
fetchDogBreeds()

function downloadImages(data){
    for (let link of data.message){
    let card = document.getElementById('dog-image-container')
    let imgTag = document.createElement('img')
    imgTag.src = link
    card.append(imgTag)
    }
}

function downloadBreeds(data){
    for (let dogBreed in data.message){
    let newUi = document.getElementById('dog-breeds')
    let newLi = document.createElement('li')
    newLi.textContent = dogBreed
    newUi.append(newLi)
    newLi.addEventListener('click',()=>{
        newLi.style.color = 'red'
    })
    }
}

// let breedSelection = document.getElementById('breed-dropdown')
// breedSelection.addEventListener('change',(e)=>{
//     let newValue = e.target.value
//     if (newValue === 'c'){console.log(downloadBreeds())}
// }
// )
