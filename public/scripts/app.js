'use strict';

var isHidden = false;

var toggleDisplay = function toggleDisplay() {
    isHidden = !isHidden;
    render();
};
var appRoot = document.getElementById('app');

var render = function render() {
    // JSX - Javascript syntax extension - Javascript XML
    // You can only have one single root element
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleDisplay },
            !isHidden ? 'Show details' : 'Hide details'
        ),
        isHidden && React.createElement(
            'p',
            null,
            'Show some details'
        )
    );

    // ReactDOM
    ReactDOM.render(template, appRoot);
};

render();
