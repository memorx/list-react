let getSubtitle = (subtitle) => {
    if (subtitle) {
        return <p>{subtitle}</p>
    }
}

// Create a templateTwo var JSX expression
// div
//  h1 -> Guillermo Sanchez
//      p -> Age: 33
//      p -> Location: Philadelphia
// Render template 2 

const user = {
    name: 'Guillermo Sanchez',
    age: '33',
    location: 'Canada'
}

// javascript expression, not statements.
let getLocation = (location) => { 
    if (!location) {
        return undefined;
    }
    return <p>Location: {location}</p>;
};


let userName = 'Guillermo Sanchez';
let userAge = '33'
let userLocation = 'Vancouver, BC. Canada';
const templateTwo = (
    <div>
        <h1> {user.name ? user.name : 'Anonymous'} </h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age} </p>}
        {getLocation(user.location)}
    </div>
);

const addOne = () => {
    count ++; 
    renderCounterApp();
}

// Challenge 
// Make button "-1" - setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function - log reset
const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};

let count = 0;
// you can do this as well onClick{() => {}}
// JSX does not have data binding 

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>        
            <button onClick={minusOne}>-1</button>        
            <button onClick={reset}>reset</button>        
        </div>
    );

    // ReactDOM
    ReactDOM.render(templateThree, appRoot);

}

renderCounterApp();