console.log('%c HI', 'color: firebrick')

function fetchDogs() {
    const dogImageContainer = document.getElementById('dog-image-container');
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
    json.message.forEach(function(imageUrl) {
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl
    dogImageContainer.appendChild(imgElement)
    })
    })
}
fetchDogs();

function fetchBreeds() {
    const dogBreedContainer = document.getElementById('dog-breeds');
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        const breeds = json.message
        for (const breed in breeds) {
        const liElement = document.createElement('li');
        liElement.textContent = breed
        dogBreedContainer.appendChild(liElement)
        liElement.addEventListener('click', function() {
            liElement.style.color = "Red"
        })
        }
    });
}
fetchBreeds()

function dropDownFilter() {
    const breedFilter = document.getElementById('breed-dropdown');
    breedFilter.addEventListener('change', function() {
      const selectedLetter = breedFilter.value;
      filterBreeds(selectedLetter);
    });
  }
  
  dropDownFilter();
  
  function filterBreeds(selectedLetter) {
    const breedItems = document.querySelectorAll('#dog-breeds li');
    breedItems.forEach(function(item) {
      const breedName = item.textContent.toLowerCase();
      if (breedName.startsWith(selectedLetter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  filterBreeds(breedFilter.value);