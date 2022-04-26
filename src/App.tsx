import { People } from './reducers/People';
import { ChangeEvent, useState} from 'react';

const App = () => {     
    const[list, dispatch] = People();
    const[nameInput, setInput] = useState('');


    const HandleInputName = () => {
        if(nameInput) {
          dispatch({
            type: 'ADD',
            payload: {
              name: nameInput
            }
          })
          setInput('');
        }
    }
    const img = <img src="" alt="" />

    const HandleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
         setInput(e.target.value);
    }

    const deletePerson = (id:string) =>{
      dispatch({
        type: 'DEL',
        payload: {id}
      });
    }

    const HandleOrdernar = () => {
      dispatch({
        type: 'ORDER'
      })
    }
    return (
        <div className='p-3  bg-green-500 w-80 mt-20 m-auto'>
          <input type="text" className='border-2  mr-2' value={nameInput} onChange={HandleInputChange}/>
          <button className='border-1 p-1 ml-6 bg-green-200 hover:text-white hover:bg-green-600 duration-500' onClick={HandleInputName}>Adicionar</button>
     
          <button className='text-green-300 hover:text-white'onClick={HandleOrdernar}>Ordenar</button>
            <h1 className='block text-green-100 text-2xl mb-3'>Lista de tarefas:</h1>
            <ul>
              {list.map((item, index) => (
                <li className='p-1' key={index}>{item.name}
                <button className='text-right text-red-600 pl-16' onClick={() => deletePerson(item.id)}>[ Deletar ]</button>
                </li>
              ))}
            </ul>

        </div>
    )    

   
}

export default App;