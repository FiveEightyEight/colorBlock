// ------ Storage ------------------ >>


// ------ Global Variables ----->>>

const canvas = document.querySelector('.js-body');
const palette = document.querySelector('.js-color-palette');



// ----- Functions ------------------->>




// ------ Events ----------------->>>

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


    if (state.canvas > 0) {



    }

};