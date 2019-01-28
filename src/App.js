import React, {Component} from "react";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Link from "./components/Link/Link";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Logo animated/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <Link href="https://reactjs.org">Learn React</Link>
                </header>
            </div>
        );
    }
}

export default App;
