import { React, useState, useEffect } from 'react';
import '../App.css'
import Header from '../components/Header';
import db from '../firebase.config'
import Card from '../components/Card'
import GoalInput from '../components/GoalInput';

function TodoScreen() {
    const [todos, setTodos] = useState([])
    const todosRef = db.collection('todos')

    useEffect(() => {
        return todosRef.onSnapshot(querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
                const { title, date, month, year } = doc.data();
                list.push({
                    id: doc.id,
                    title,
                    date,
                    month,
                    year
                });
            });

            setTodos(list);
        });
    }, []);


    return (
        <div>
            <Header />
            <div className='container'>
                {todos.map(todo => {
                    return (
                        <Card item={todo}/>
                    )
                })}
            </div>
            <GoalInput />
        </div>
    )
}

export default TodoScreen
