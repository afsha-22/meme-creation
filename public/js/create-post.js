const createPost = async (event) => {
    event.preventDefault();

    const radioEL = document.querySelectorAll(".form-check-input");
    const captionEL = document.querySelector("#caption");
    const imageEL = document.querySelector("#memeImage");

    let selectedPostion;

    radioEL.forEach(element => {
        if(element.checked) {
            selectedPostion = element.getAttribute('id');
        };
    });

    const caption = captionEL.value.trim();

    const imageURL = imageEL.getAttribute('src');

    const requestBody = {
        imageCaption: caption,
        image_url: imageURL,
        image_position: selectedPostion
    };
 
    if (caption && imageURL && selectedPostion) {
        const response = await fetch(`/api/post`, {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: { 'Content-Type': 'application/json' }
        });
     
        if (response.ok) {
            document.location.replace(`/`);
        } else {
            //add in error handling
            console.error(response);
        };
    }

};

document
    .querySelector("#postMemeForm")
    .addEventListener('submit', createPost);