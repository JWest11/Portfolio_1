function openModal(modalId) {
    document.getElementById(`${modalId}`).classList.add('active');
    document.getElementById('modal_overlay').classList.add('active');
};

function closeModal(modalId) {
    document.getElementById(`${modalId}`).classList.remove('active');
    document.getElementById('modal_overlay').classList.remove('active');
};

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(function (element) {
        element.classList.remove('active');
    });    
    document.getElementById('modal_overlay').classList.remove('active');
};