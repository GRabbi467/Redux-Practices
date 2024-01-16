import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';
import Stats from './Components/Stats';

function App() {
    const [state,setState] = useState([
        {
            id:1,
            count:0
        },
        {
            id:2,
            count:0
        },


    ]);

    const totalCount = ()=>{
        const total =  state.reduce((total,next)=>
        total = total + next.count,0)
        return total;
    }

    const handleIncrement = (id) =>{
        const updatedCount = state.map(c =>{
            if(c.id === id){
                return{
                    ...c,
                    count: c.count + 1,
                }
            }
            return{...c}
        })
        setState(updatedCount);
    
     };
     const handleDecrement = (id) =>{
        const updatedCount = state.map(c =>{
            if(c.id === id){
                if(totalCount() === 0) return{
                    ...c
                };
                return{
                    ...c,
                    count: c.count - 1,
                }
            }
            return{...c}
        })
        setState(updatedCount);
     };
      

  return (
    <div className="App">
      <h1 className='text-4xl text-violet-800'>Redux Practices in React Js</h1>
      <div className="w-screen text-slate-700">
            <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application
            </h1>
      </div>

      {
        state.map(count =>(<Counter
        key = {count.id}
        id = {count.id}
        handleIncre = {handleIncrement}
        handleDec={handleDecrement}
        />
        ))
      }
    
      <Stats count={totalCount()}/>
    </div>
  );
}

export default App;
