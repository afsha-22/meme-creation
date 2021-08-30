const imagesEL = document.querySelectorAll('.image-search');

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

    const photos = [];

    response.photos.forEach(photo => {
        photos.push(photo.src.tiny);
    });

    return photos;
 
};

const renderSearch = async (search) => {
    const images = await (getImages(search));


    imagesEL.forEach((imageEL, index) => {
        imageEL.setAttribute('src', images[index]);
        imageEL.setAttribute('data-image-url', images[index]);
    });
  
};

renderSearch('funny');
