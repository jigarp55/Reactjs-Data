
import Weather from './weather';
import Login from './Login';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const user = useSelector((state) => state.user.userInfo);

  return (
    <div className="App d-flex justify-content-center flex-column align-items-center my-5">
      <h1>Weather App</h1>
      {!user ? <Login /> : <p>Welcome, {user.displayName}</p>}
      <Weather />
    </div>
  );
}

export default App;
