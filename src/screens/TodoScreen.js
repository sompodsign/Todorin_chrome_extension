import { React, useState, useEffect } from 'react';
import '../App.css'
import Header from '../components/Header';
import db from '../firebase.config'
import Card from '../components/Card'
import GoalInput from '../components/GoalInput';
import Loader from '../components/Loader';
import Message from '../components/Message';

const date = new Date().getDate(); //To get the Current Date
const month = new Date().getMonth() + 1; //To get the Current Month
const year = new Date().getFullYear(); //To get the Current Year



function TodoScreen() {
    
    const time = new Date().getTime(); // to sort list by time.

    const [todos, setTodos] = useState([])
    const [title, setTitle] = useState("");
    const [isLoading, setLoading] = useState(true)
    const todosRef = db.collection('todos')


    useEffect(() => {
        return todosRef.onSnapshot(querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
                const { title, time, date, month, year } = doc.data();
                list.push({
                    id: doc.id,
                    title,
                    time,
                    date,
                    month,
                    year
                });
            });

            const sortedList = list.sort((a,b) => { // sort array by time.
                return a.time - b.time
            })
            setTodos(sortedList)
            setLoading(false)
        });
    }, []);


    async function pressHandler(title) {
        await todosRef.add({
            title: title,
            time: time,
            date: date,
            month: month,
            year: year
        });
    }

    async function deleteHandler(id) {
        await db.collection("todos").doc(id).delete()
    }

    return (
        <div>
            <Header dateItem={date} />
            <div className='container'>
                {
                    isLoading ? <Loader /> :
                    todos.length === 0 && !isLoading && <Message /> 
                    ? <Message /> 
                    :
                    todos.map(todo => {
                    return (
                        <Card key={todo.id} item={todo} deleteItem={deleteHandler} />
                    )
                })
                }
            </div>
            <GoalInput addHandler={pressHandler} deleteItem={deleteHandler} />
        </div>
    )
}

export default TodoScreen
