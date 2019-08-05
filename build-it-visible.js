console.log('build-it-visible is running');

const toggleVisibility = () => {
    visibility = !visibility;
    renderIt();
};

let visibility = false;

const renderIt = () => {
    const templateOne = (
        <div>
            <h1>Visible Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>These are some details!</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(templateOne, document.getElementById('app'));
};
renderIt();