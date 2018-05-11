console.log('App.js is running');

// if statements
// ternary operators
// logical and operator

// only render the subtitle (and p tag) if subtitle actually exist - logical and operators
// render new p tag - options.lenght > 0 'Here are your options', 'no options'
 
// create app object title/subject
// user title/subtitle in the template
// render template
const app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: []
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

// reference the function instead of calling it
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = ' ';
        render();
    }
};

// create removeAll button above list
// on click -> wipe the array -> rerender
const onRemoveAll = () => {
    app.options = [];
    render();
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 100];

// challenge
// create a render function that renders the new jsx
// call it right away
// call it after options array added to
const render = () => {
    // JSX - Javascript syntax extension - Javascript XML
    // You can only have one single root element
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'There are no options'}</p>
            {/*<p>{app.options.length}</p> This is how you comment*/}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option)=> <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
            
        </div>
    );

    // ReactDOM
    ReactDOM.render(template, appRoot);

}

render();

