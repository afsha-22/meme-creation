const createPost = async (event) => {
    event.preventDefault();

    const radioEL = document.querySelectorAll(".form-check-input");
    const captionEL = document.querySelector("#displayCaption");
    const imageEL = document.querySelector("#memeImage");

    let selectedPostion;

    radioEL.forEach(element => {
        if(element.checked) {
            selectedPostion = element.getAttribute('id');
        };
    });

    const caption = captionEL.textContent.trim();

    const imageTiny = imageEL.getAttribute('data-image-tiny');
    const imageMedium = imageEL.getAttribute('data-image-medium');

    const requestBody = {
        image_caption: caption,
        image_url_tiny: imageTiny,
        image_url_medium: imageMedium,
        image_position: selectedPostion
    };
 
    if (caption && imageTiny && imageMedium && selectedPostion) {
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