const addLike = async (event) => {

    event.preventDefault();

    const selectedEL = $(event.target);

    const post_id = selectedEL.attr('data-post-id');

    const body ={
        post_id
    };

    const response = await fetch(`/api/like`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        selectedEL.removeClass('bi-hand-thumbs-up');
        selectedEL.addClass('bi-hand-thumbs-up-fill');
    } else {
        alert(response.statusText);
    };

       
};

$('.add-like').on('click', addLike);