'use client'
import {useState, useEffect} from 'react'

interface TodoItem {
  id: number;
  value: string;
}

export default function Todo() {
  const [newItem, setNewItem] = useState<string>("");
  const [items, setItems] = useState<TodoItem[]>([]);

  useEffect(() => {
    const storedTask: TodoItem[] = Object.entries(localStorage).map(
      ([id, value]) => ({ id: parseInt(id), value: value as string })
    );
    setItems(storedTask);
  }, []);

  const addItem = () => {
    if (!newItem) {
      alert("You have to add an item");
      return;
    }
    const newTask: TodoItem = {
      id: Math.floor(Math.random() * 100),
      value: newItem,
    };
    setItems((prevItems) => [...prevItems, newTask]); 
    window.localStorage.setItem(newTask.id.toString(), newTask.value);
    setNewItem(""); 
  }

  const deleteItem = (id: number) => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
    window.localStorage.removeItem(id.toString());
  };


  return (
    <main className='w-full h-screen flex justify-center items-center'>
      <section className='w-[80%] h-[80%] bg-clearBlue shadow-xl rounded-xl'>
        <div className='w-[90%] h-36 flex flex-col justify-center items-center gap-2 mt-4'>
          <h2 className='text-white text-4xl'> Todo-list</h2>
          <input 
          type="text" 
          placeholder="Enter a task" 
          className='w-72 h-10 p-2 mt-2 rounded-xl'
          value={newItem || ''}
          onChange={(e) => setNewItem(e.target.value)}
          />
          <button type="submit" 
          className='mt-2 bg-secondary text-white border border-tertiary p-2 rounded-xl'
          onClick={() => addItem()}
          >Add Task</button>
        </div>
        <div className='flex flex-col justify-center items-center h-auto w-[90%] mt-6'>
        <ul className="mt-14 text-white">
          {items.map((item) => (
            <li key={item.id} className=' w-[700px] p-2 flex justify-between bg-primary shadow-xl mt-2 rounded-xl'>
              {item.value}{" "}
              <button
                className="ml-5 cursor-pointer bg-secondary text-2xl px-2 rounded-xl"
                onClick={() => deleteItem(item.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
        </div>

      </section>
      
    </main>
  )


}
