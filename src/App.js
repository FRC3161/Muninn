import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import './reactstrap.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <h1> Muninn </h1>
            <Button variant={"gold"} size={"lg"} onClick={testPopup}>Test</Button>
        </header>
    </div>
  );
}

function testPopup(){
    window.alert("test");
}

export default App;
