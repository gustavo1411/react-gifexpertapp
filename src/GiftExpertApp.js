import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {

    // const categories = ['hulk', 'linter', 'maverick', 'robinson']

    const [categories, setcategories] = useState(['hulk']);



    return(
        <>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategories={setcategories}/>
        <hr/>

        <ol>
            {
                categories.map( category => (
                    <GifGrid 
                        key={category}
                        category={category}
                        />
                ))
            }
        </ol>

        </>
        )
};









 // const handleAdd = () =>{
    //    setcategories( [...categories, 'HunterX'] )
    //    setcategories( cats => [...categories, 'Hunterx'])  // esta forma se usa para comunicar los componentes
    // }