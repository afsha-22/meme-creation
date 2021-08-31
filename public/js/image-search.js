const getImages = async (query) => {

    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            'Content-Type': "application/json",
            'User-Agent': "Pexels/JavaScript",
            Authorization: '563492ad6f91700001000001cea8127e3f5644618411aeb584a36b4d',
        }
    };
      
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=12`;
    
    const request = await fetch(url, options);

    const response = await request.json();

    return response.photos;
 
};

const renderSearch = async (event) => {
    event.preventDefault();

    const imagesEL = document.querySelectorAll(".image-search");

    const searchQuery =  document.querySelector('#search').value.trim();

    const images = await (getImages(searchQuery));

    console.log(images);

    imagesEL.forEach((imageEL, index) => {
        imageEL.setAttribute('href', `/create-meme/${images[index].id}`);
        imageEL.firstElementChild.setAttribute('src', images[index].src.tiny);
    });
  
};

document
    .querySelector('#searchForm')
    .addEventListener('submit', renderSearch);