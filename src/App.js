import './App.css';
import Example from "./components/Example.js";
import Avatar from "./components/Avatar.js";

function App() {
  return (
    <div>
    <Example />
    <Avatar name='Homer Simpson' src='https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png' />
    <Avatar name='Bart Simpson' src='https://www.stickees.com/files/cartoon/the-simpsons/2241-bart-simpson-scare.png' />
    </div>
  )}

export default App;
