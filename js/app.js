// ------ Storage ------------------ >>


// ------ Global Variables ----->>>

const canvas = document.querySelector('.js-canvas');
const palette = document.querySelector('.js-color-palette');



// --- Legacy code ------->>>
 // StackOverflow: gblazex 

const scroll = (function () {
    const keys = {
        37: 1,
        38: 1,
        39: 1,
        40: 1
    };

    const preventDefault = (e) => {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }

    const preventDefaultForScrollKeys = (e) => {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    const disableScroll = () => {
        if (window.addEventListener) // older FF
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove = preventDefault; // mobile
        document.onkeydown = preventDefaultForScrollKeys;
    }

    const  enableScroll = () => {
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }

    return {
        disableScroll,
        enableScroll,
    }

})();



// ----- Helper Functions ------------------->>

const canvasGrid = () => {
    const arr = []
    for (let i = 0; i < 20; i++) {
        arr.push({
            0: {
                color: 'white',
            },
            1: {
                color: 'white',
            },
            2: {
                color: 'white',
            },
            3: {
                color: 'white',
            },
            4: {
                color: 'white',
            },
            5: {
                color: 'white',
            },
            6: {
                color: 'white',
            },
            7: {
                color: 'white',
            },
            8: {
                color: 'white',
            },
            9: {
                color: 'white',
            },
            10: {
                color: 'white',
            },
            11: {
                color: 'white',
            },
            12: {
                color: 'white',
            },
            13: {
                color: 'white',
            },
            14: {
                color: 'white',
            },
            15: {
                color: 'white',
            },
            16: {
                color: 'white',
            },
            17: {
                color: 'white',
            },
            18: {
                color: 'white',
            },
            19: {
                color: 'white',
            },
            20: {
                color: 'white',
            },
            21: {
                color: 'white',
            },
            22: {
                color: 'white',
            },
            23: {
                color: 'white',
            },
            24: {
                color: 'white',
            },
            25: {
                color: 'white',
            },
            26: {
                color: 'white',
            },
            27: {
                color: 'white',
            },
        });
    };

    return arr;
};


const canvasSection = (sectionNum, currentSection) => {
    const keys = Object.keys(currentSection);
    let section = ``;
    for (let i = 0; i < keys.length; i++) {
        const current = currentSection[keys[i]];
        section += `<div class='col bg-${current.color} js-block' style='height: 60px; width: 100px' data-col=${sectionNum} data-index=${i}></div>`
    };
    return section;
};



// ------ Events ----------------->>>

// canvas listener

canvas.addEventListener('touchstart', e => {

    if (e.target.matches('.js-block')) {
        const col = e.target.getAttribute('data-col')
        const block = e.target.getAttribute('data-index')
        state.canvas[col][block].color = state.color;
        render(state);
    }
});

canvas.addEventListener('touchmove', e => {

    if (e.target.matches('.js-block')) {
        const col = e.target.getAttribute('data-col')
        const block = e.target.getAttribute('data-index')
        state.canvas[col][block].color = state.color;
        render(state);
    }
});

canvas.addEventListener('click', e => {

    if (e.target.matches('.js-block')) {
        const col = e.target.getAttribute('data-col')
        const block = e.target.getAttribute('data-index')
        state.canvas[col][block].color = state.color;
        render(state);
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

palette.addEventListener('click', e => {
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

    for (let i = 0; i < state.canvas.length; i++) {
        const currentSection = state.canvas[i];
        innerHTML += `
        <div class='row js-section' data-cIndex=${i}>
        <div class='col ' style='height: 60px; width: 100px'></div>
        ${canvasSection(i, currentSection)}
        <div class='col ' style='height: 60px; width: 100px'></div>
        </div>
        `
    };

    canvas.innerHTML = innerHTML;

};
state.canvas = canvasGrid();
render(state);