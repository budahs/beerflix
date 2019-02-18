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
        const currentDate = new Date();
        const newComment = ` <div class="comment">"${quoteInput.value}"<span>${currentDate.getFullYear()}-${(currentDate.getMonth() + 1) < 10 ? '0' + (currentDate.getMonth() + 1): currentDate.getMonth()}-${currentDate.getDate() < 10 ? '0' + currentDate.getDate(): currentDate.getDate()}</span></div>`
        const existComments = document.getElementById('printComments').innerHTML;
        document.getElementById('printComments').innerHTML = newComment + existComments;
    }catch(e){
        console.error(e);
    }
})
