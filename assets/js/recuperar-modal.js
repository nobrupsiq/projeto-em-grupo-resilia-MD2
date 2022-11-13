const btn = document.querySelector('.recuperar-btn');
const modal = document.querySelector('.login-modal');
const fecharModal = document.querySelector('.closeModal');

function openModal(event) {
    event.preventDefault();
    modal.classList.add('active');
}

btn.addEventListener('click', openModal);

function exitModal() {
    modal.classList.remove('active');
}

fecharModal.addEventListener('click', exitModal);
