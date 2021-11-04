const root = document.getElementById('root');

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

const initPage = function () {
    createHeader();
};

window.onload = initPage();
