var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

var modalNoButton = document.querySelector('.modal-action-negative');
var selectAvailable = document.querySelectorAll('.available-packages button');
var selectPackage = document.querySelectorAll('.detail-applies button');

var toggleButton = document.querySelector('.toggle-button');
var mobileNavigations = document.querySelector('.mobile-navigations');

for (var i = 0; i < selectAvailable.length; i++) {
    selectAvailable[i].addEventListener('click', function () {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
        setTimeout(() => {
            backdrop.classList.toggle('open');
            modal.classList.toggle('open');
        }, 200);
    });
}

for (var i = 0; i < selectPackage.length; i++) {
    selectPackage[i].addEventListener('click', function () {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
        setTimeout(() => {
            backdrop.classList.toggle('open');
            modal.classList.toggle('open');
        }, 200);
    });
}

toggleButton.addEventListener('click', function () {
    backdrop.style.display = 'block';
    mobileNavigations.style.display = 'block';
    setTimeout(() => {
        mobileNavigations.classList.toggle('open');
        backdrop.classList.toggle('open');
    }, 200);
});

backdrop.addEventListener('click', closeModal);
if (modal) {
    modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
    setTimeout(() => {
        backdrop.classList.remove('open');
        if (mobileNavigations) {
            mobileNavigations.classList.remove('open');
        }
    }, 200);

    if (modal) {
        modal.classList.remove('open');
        modal.style.display = 'none';
    }
    mobileNavigations.style.display = 'none';
    backdrop.style.display = 'none';
}
