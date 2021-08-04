import { React, useState, useEffect } from 'react';
import '../App.css'
import Header from '../components/Header';
import db from '../firebase.config'
import Card from '../components/Card'
import GoalInput from '../components/GoalInput';
import Loader from '../components/Loader';

const date = new Date().getDate(); //To get the Current Date
const month = new Date().getMonth() + 1; //To get the Current Month
const year = new Date().getFullYear(); //To get the Current Year


function TodoScreen() {
    const [todos, setTodos] = useState([])
    const [title, setTitle] = useState("");
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


    async function pressHandler(title) {
        await todosRef.add({
            title: title,
            date: date,
            month: month,
            year: year
        });
    }

    async function deleteHandler(id) {
        await db.collection("todos").doc(id).delete()
    }
    console.log(todos)

    return (
        <div>
            <Header dateItem={date} />
            <div className='container'>
                {todos.length > 0 ? todos.map(todo => {
                    return (
                        <Card item={todo} deleteItem={deleteHandler} />
                    )
                }) :
                    <Loader />
                }
            </div>
            <GoalInput addHandler={pressHandler} deleteItem={deleteHandler} />
        </div>
    )
}

export default TodoScreen
