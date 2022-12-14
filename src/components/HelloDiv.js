const HelloDiv = () => {
    const name = "AYENEW WALLE"
    return(
        <div>
            <h1>Hello! My name is {name}</h1>
            <ul>
                <li>What is Babel? And what role does it play in converting JSX into vanilla JavaScript?
 Babel is a JavaScript compiler. It takes next generation JavaScript (ES6/ES7/ES8) and compiles it down to widely supported ES5 JavaScript code. It also compiles JSX code down to regular JavaScript functions that browsers can understand. Developers can also extend the JavaScript syntax and add on their own features, and share them with others in the form of a Babel plugin</li>
                <li>What is the significance of { } curly braces in JSX?
The { } single curly braces inside of JSX work similarly to the {{ }} double curly braces in handlebars: they allow us to pass values and expressions into our view
 </li>
                <li>What is a component prop?
  prop is essentially a function argument that's passed into our component from outside and can be used inside of it. For example, we could write a component for a button that renders different types of buttons depending on the prop it's passed.
</li>

            </ul>
        </div>
    )
};

export default HelloDiv;
