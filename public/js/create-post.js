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

    const imageURL = imageEL.getAttribute('src');

    const requestBody = {
        image_caption: caption,
        image_url: imageURL,
        image_position: selectedPostion
    };

    console.log(requestBody);
 
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