import Header from "./components/Header.jsx";
import Todo from "./components/Todo.jsx";
function App() {
  return (
    <>
      <div className="bg-stone-900 grid py-4 min-h-screen">
        <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-6 min-h-[550px] rounded-xl">
          <Header />
          <Todo />
        </div>
      </div>
    </>
  );
}

export default App;
