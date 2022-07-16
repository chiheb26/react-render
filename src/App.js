import './App.css';
import { ChildA } from './components/Context/ContextChildrenOne';
import { ContextParentOne } from './components/Context/ContextParentOne';

function App() {
  return (
    <div className="App">
        <ContextParentOne>
          <ChildA />
        </ContextParentOne>
    </div>
  )
}

export default App;
