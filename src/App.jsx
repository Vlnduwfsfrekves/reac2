import './App.css';
import Greeting from './components/Greeting';
import Message from './components/Message';
import Button from './components/Button';
function App() {
  const fun = () =>{
    console.log('click')
  }
  return (
    <div>
      <Greeting name='Vlad'/>
      <Message text='just text'/>
      <Button onClick={fun}/>
    </div>
  );
}

export default App;
