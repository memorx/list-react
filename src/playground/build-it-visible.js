let isHidden = false;

const toggleDisplay = () => {
    isHidden = !isHidden; 
    render();
}
const appRoot = document.getElementById('app');

const render = () => {
    // JSX - Javascript syntax extension - Javascript XML
    // You can only have one single root element
    const template = (
        <div>
            <h1>Visibility toggle</h1>
            <button onClick={toggleDisplay}>
                {!isHidden? 'Show details' : 'Hide details'}
            </button>
            {isHidden && <p>Show some details</p>}
        </div>
    );

    // ReactDOM
    ReactDOM.render(template, appRoot);

}

render();

