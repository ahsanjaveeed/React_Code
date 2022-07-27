import React, { useEffect, useState } from 'react'

export const Fetch = () => {

    const [data, setData] = useState('');

    
    useEffect( () =>{
        async function fetchdata(){
            await fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json() )
            .then(json => {
                setData(json)
            })
        }
        fetchdata()
    }, [])

  return (
    <div>{data.title}</div>
  )
}
