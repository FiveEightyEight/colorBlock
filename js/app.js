// ------ Storage ------------------ >>


// ------ Global Variables ----->>>

const canvas = document.querySelector('.js-canvas');
const palette = document.querySelector('.js-color-palette');



// ----- Helper Functions ------------------->>


const canvasSection = (sectionNum, color, squareIndex) => {
    let section = ``;

    for (let i = 0; i < 10; i++) {
        if (i === squareIndex) {
            section += `<div class='col bg-${color} border border-dark js-block' style='height: 60px; width: 100px' data-col=${sectionNum} data-index=${i}></div>`
        } else {
            section += `<div class='col border border-dark js-block' style='height: 60px; width: 100px' data-col=${sectionNum} data-index=${i}></div>`
        }
    };

    return section;
};



// ------ Events ----------------->>>

// canvas listener

canvas.addEventListener('touchstart', e => {

    if (e.target.matches('.js-block')) {
        const col = e.target.getAttribute('data-col')
        const block = e.target.getAttribute('data-index')
    }
});



// color selection
palette.addEventListener('touchstart', e => {
    if (e.target.matches('.js-primary')) {
        state.color = 'primary';
    } else if (e.target.matches('.js-secondary')) {
        state.color = 'secondary';
    } else if (e.target.matches('.js-success')) {
        state.color = 'success';
    } else if (e.target.matches('.js-danger')) {
        state.color = 'danger';
    } else if (e.target.matches('.js-white')) {
        state.color = 'white';
    } else if (e.target.matches('.js-warning')) {
        state.color = 'warning';
    } else if (e.target.matches('.js-light')) {
        state.color = 'light';
    } else if (e.target.matches('.js-dark')) {
        state.color = 'dark';
    } else if (e.target.matches('.js-info')) {
        state.color = 'info';
    }
});





// ------ State ----------------->>>

let state = {

    active: false,
    color: '',
    canvas: [],

};



// ------ Render ----------------->>>

const render = (state) => {

    let innerHTML = ``;

    for (let i = 0; i < 15; i ++) {
        innerHTML += `
        <div class='row js-section' data-cIndex=${i}>
        <div class='col ' style='height: 60px; width: 100px'></div>
        ${canvasSection(i)}
        <div class='col ' style='height: 60px; width: 100px'></div>
        </div>
        `
    };

    canvas.innerHTML = innerHTML;
    
};

render(state);