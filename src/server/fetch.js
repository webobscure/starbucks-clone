import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore'

function Fetch() {

    //for storing the data when we fetch all the docs
    const [allDocs, setAllDocs] = useState([])
    const docsCollectionRef = collection(db, "menu")
    useEffect(() => {
        const getMenu = async () => {
            const data = await getDocs(docsCollectionRef)
            setAllDocs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getMenu()
    }, [docsCollectionRef])

  

    return (
        <>
                {allDocs.map((document) => {
                    return (
                        <div key={document.id} className='menu-column'>
                            <h1 className='menu-column_name'>{document.name}</h1>
                            <img src={document.imgSrc} alt="menu" className="menu-column_img" />
                            <h2 className='menu-column_price'>{document.price} $</h2>
                            <button className="btn btn-dark-outline"> buy </button>
                        </div>
                    )
                })}
        </>
    )
}


export default Fetch;