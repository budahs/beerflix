import api from './api';
const {createComment} = api();
const commentForm = document.getElementById('quote-form');
const quoteInput = document.getElementById('quote');
quoteInput.addEventListener('change', (evt) =>{
    quoteInput.value=evt.target.value;
    console.log(quoteInput.value);
});
commentForm.addEventListener('submit', async (evt) => {
    try{
        evt.preventDefault();
        let slug = 'comment';
        const [,id] = window.location.search ? 
        window.location.search.split('=') : [];
        const comment = await createComment(id,quoteInput.value,slug);
        console.log(comment);
    }catch(e){
        console.error(e);
    }
})
