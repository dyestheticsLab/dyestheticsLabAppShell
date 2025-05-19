import './App.css';
import { createUserForm } from 'provider';

const UserForm = createUserForm({})

const App = () => {
  return (
    <div className="content">
      <UserForm />
    </div>
  );
};

export default App;
