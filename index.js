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

const hideLoader = function () {
    const loader = document.querySelector('.loader');
    loader.className += ' hidden';
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

const createMainApp = function () {
    document.body.insertAdjacentHTML(
        'beforeend',
        `
            <main id="app">
                <header id="app-description">
                    <h1 id="app-title">Web App Calculator</h1>
                    <p id="app-text">Untuk operasi dasar perhitungan matematika.</p>
                </header>
                <section id="app-action">
                    <input type="number" id="input-number" placeholder="Angka . . .">
                    <div id="calculator-action">    
                        <button type="button" id="btn-add">+</button>        
                        <button type="button" id="btn-sub">-</button>        
                        <button type="button" id="btn-mul">*</button>        
                        <button type="button" id="btn-div">+</button>        
                    </div>
                </section>
                <section id="app-result">
                    <h2 id="current-calculation">Perhitungan Saat Ini</h2>
                    <p>=</p>
                    <h2 id="current-result">0</h2>
                </section>
            </main>
        `,
    );
};


const initPage = function () {
    createLoader();
    hideLoader();
    createHeader();
    createMainApp();
};

window.addEventListener('load', initPage);
