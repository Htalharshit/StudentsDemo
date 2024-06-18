import './App.css';
import Home from './components/Home';
import { PageStateProvider } from './context/PageContext';




function App() {
  return (
    <div className="App">
      <PageStateProvider>
        <Home />
      </PageStateProvider>
    </div>
  );
}

export default App;
