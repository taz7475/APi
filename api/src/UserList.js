import React, {useState,useEffect} from 'react'
import axios from 'axios'

export const UserList = () => {
    const [list ,setList] = useState([])
    useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/users')
.then(res => {
    console.log(res)
    setList(res.data)
})
.catch(err =>{
    console.log(err)
},[])
    })
    return (
        <div>
            <ul>
                {
                    list.map(list => <li key={list.id}>{list.name}</li>)
                }
            </ul>
        </div>
    )
}
