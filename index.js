const root = document.getElementById('root');

const createLoader = function () {
    document.body.insertAdjacentHTML(
        'beforeend',
        `
            <div class="loader">
                <image src='assets/gifs/loading.gif' alt='loading...'/>
            </div>
        `,
    );
};

const createHeader = function () {
    document.body.insertAdjacentHTML(
        'beforeend',
        `
            <header class="head">
                  <div class="head-logo">
                        <img class="head-logo-image"
                             src="favicon_io/android-chrome-192x192.png"
                             alt="01.satu">
                        <h1 class="head-logo-label">satu</h1>
                  </div>
            </header>
    `,
    );
};

const hideLoader = function (){
    const loader = document.querySelector('.loader');
    loader.className += ' hidden';
};

const initPage = function () {
    createLoader();
    hideLoader();
    createHeader();
};

window.addEventListener('load', initPage);
