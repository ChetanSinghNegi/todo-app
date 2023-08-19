import "./App.css";
import Form from "./util/Form";
import TodoList from "./pages/TodoList";
import Background from "./pages/Background";

function App() {
  return (
    <div className="app">
      <Background />
      <Form create />
      <TodoList />
    </div>
  );
}

export default App;
