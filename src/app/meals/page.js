import React from 'react';
import MovieCard from '../components/MovieCard';
const getData = async()=>{
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await res.json();
    return data.categories;
}
const Page = async () => {
   
    let meals = await getData();
    return (
        <div className='grid gap-5 grid-cols-3 justify-center'>
            {
                meals.map(meal=><MovieCard key={meal.idCategory} {...meal}></MovieCard>)
            }
        </div>
    );
};

export default Page;