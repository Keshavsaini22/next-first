"use client"
import axios from 'axios'
import React, { useState } from 'react'

function Third() {

    const handleclick = () => {
        setTimeout(async () => {
            const data = await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(data.data[0])

        }, 2000);
    }
    return (
        <>
            This is loading<button onClick={handleclick}> Loading</button>

        </>
    )
}

export default Third