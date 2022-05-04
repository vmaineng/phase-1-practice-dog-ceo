//console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch (imgUrl).then(r => r.json()) //gets a json-ify data
.then (doggyData => {   //added {}; keeps seeing the data 
    renderImages(doggyData.message)
})


const dogContainer = document.querySelector('#dog-image-container')

const renderImages = (doggyArray) => {
    //console.log(doggyArray);
    //use forEach bc it goes through everything and run some type of behavior for this array
    //forEach passes a callback function, then one at a time, one elment goes through the callback function, and runs its own entirety
    
    doggyArray.forEach( (dogImage)=> {
        //callback function receives each image once at a time
        const image = document.createElement('img')
        //hey element, create this new image
        image.src = dogImage
        //it's already an image URL and not an object
        dogContainer.append(image)
    });
}

} );