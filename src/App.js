import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Button variant={"primary"} size={"lg"} onClick={testPopup}>Test</Button>
      </header>
    </div>
  );
}

function testPopup(){
    window.alert("test");
}

export default App;
