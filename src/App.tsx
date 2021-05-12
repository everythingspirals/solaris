import Main from './pages/Main';
import 'App.css';
import Header from './components/Header/Header';

export default function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <Main />
      </div>
    </div>
  );
}