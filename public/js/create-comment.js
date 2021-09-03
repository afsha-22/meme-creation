const addComment = async (event) => {

    event.preventDefault();

    const selectedEL = event.target;
    const commentEL = $(selectedEL).closest('form').find('#comment');

    const post_id = selectedEL.getAttribute('data-post-id');
    const comment = commentEL.val().trim();

    const body ={
        comment,
        post_id
    };

    if (comment) {
        const response = await fetch(`/api/comment`, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            commentEL.closest('form').addClass('d-none');
            commentEL.val('');
        } else {
          alert(response.statusText);
        };
    };
       
};

const renderCommentBox = (event) => {
    const selectedEL = event.target;
    const formEL = $(selectedEL).closest('.card').find('form');

    if(formEL.hasClass('d-none')) {
        formEL.removeClass('d-none');
    }
    else {
        formEL.addClass('d-none');
    };

    
};

$('.add-comment').on('click', renderCommentBox);
$('.commentForm').on('submit', addComment);