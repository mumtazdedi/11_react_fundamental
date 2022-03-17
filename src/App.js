import Navbar from './components/Navbar';
import Pills from './components/Pills';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const todos = [
  {
    id: 1,
    title: 'Mengerjakan Tugas',
    completed: true,
  },
  {
    id: 2,
    title: 'Membaca Buku',
    completed: false,
  },
]

function App() {
  return (
    <>
      <Navbar />
      {
        todos.map((todo, index) => {
          return <Pills key={index} item={todo} />
        })
      }
    </>
  );
}

export default App;
