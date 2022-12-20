const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onBtnClickOpen);
refs.closeModalBtn.addEventListener('click', onBtnClickClose);
refs.backdrop.addEventListener('click', );


function onBtnClickOpen() {
    document.body.classList.add('show-modal')
};

function onBtnClickClose() {
    document.body.classList.remove('show-modal')
};