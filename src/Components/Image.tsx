/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Properties } from '../App';
import "./Image.css";

export interface Pictures {
 
    albumId: number;
    id: number;
    thumbnailUrl: string;
    title: string;
    url: string;
}

const Image: React.FC<Properties> = ({colors, spots}) => {

    const [posts, setPosts] = useState<Pictures[] >()

    useEffect(() => {
        const fetchPosts = async () => {
          try{
            const response = await axios.get<Pictures[]>("https://jsonplaceholder.typicode.com/photos");
            setPosts(response.data)
            
          }
          catch (err){
            console.error("not good");
            
          }
        }
     fetchPosts();
      },[])

      
  return (
    <div className='image__mushrooms'>
            
    {posts?.filter((img) => {
     
    

      if (img.id == 4 && colors == 0 && spots == 0 ){
        return img
      }
      if (img.id == 1 && colors == 0 && spots == 3 ){
        return img
      }
      if (img.id == 3 && colors == 0 && spots == 4){
        return img
      }
      if (img.id == 2 && colors == 0 && spots == 5){
        return img
      }
      if (img.id == 6 && colors == 0 && spots == 7){
        return img
      }
      if (img.id == 5 && colors == 0 && spots == 9){
        return img
      }

      if (img.id == 7 && colors == 1 && spots == 1){
        return img
      }
      if (img.id == 10 && colors == 1 && spots == 3){
        return img
      }
      if (img.id == 9 && colors == 1 && spots == 3){
        return img
      }
      if (img.id == 8 && colors == 1 && spots == 6){
        return img
      }
      if (img.id == 11 && colors == 1 && spots == 6){
        return img
      }

      if (img.id == 13 && colors == 2 && spots == 1){
        return img
      }
      if (img.id == 12 && colors == 2 && spots == 2){
        return img
      }
      if (img.id == 14 && colors == 2 && spots == 8){
        return img
      }

      if (img.id == 20 && colors == 3 && spots == 1){
        return img
      }
      if (img.id == 15 && colors == 3 && spots == 2){
        return img
      }
      if (img.id == 19 && colors == 3 && spots == 5){
        return img
      }
      if (img.id == 16 && colors == 3 && spots == 6){
        return img
      }
      if (img.id == 21 && colors == 3 && spots == 6){
        return img
      }
      if (img.id == 18 && colors == 3 && spots == 7){
        return img
      }
      if (img.id == 17 && colors == 3 && spots == 8){
        return img
      }

      if (img.id == 1 && colors == 0 && spots == 100 ){
        return img
      }
      if (img.id == 2 && colors == 0 && spots == 100 ){
        return img
      }
      if (img.id == 3 && colors == 0 && spots == 100){
        return img
      }
      if (img.id == 4 && colors == 0 && spots == 100){
        return img
      }
      if (img.id == 5 && colors == 0 && spots == 100){
        return img
      }
      if (img.id == 6 && colors == 0 && spots == 100){
        return img
      }

      if (img.id == 7 && colors == 1 && spots == 100){
        return img
      }
      if (img.id == 8 && colors == 1 && spots == 100){
        return img
      }
      if (img.id == 9 && colors == 1 && spots == 100){
        return img
      }
      if (img.id == 10 && colors == 1 && spots == 100){
        return img
      }
      if (img.id == 11 && colors == 1 && spots == 100){
        return img
      }

      if (img.id == 12 && colors == 2 && spots == 100){
        return img
      }
      if (img.id == 13 && colors == 2 && spots == 100){
        return img
      }
      if (img.id == 14 && colors == 2 && spots == 100){
        return img
      }

      if (img.id == 15 && colors == 3 && spots == 100){
        return img
      }
      if (img.id == 16 && colors == 3 && spots == 100){
        return img
      }
      if (img.id == 17 && colors == 3 && spots == 100){
        return img
      }
      if (img.id == 18 && colors == 3 && spots == 100){
        return img
      }
      if (img.id == 19 && colors == 3 && spots == 100){
        return img
      }
      if (img.id == 20 && colors == 3 && spots == 100){
        return img
      }
      if (img.id == 21 && colors == 3 && spots == 100){
        return img
      }
     
    }).map((post) => {
      return(
        <div>
          <img className='image__image' src={post.url} alt='shroom' />
          </div>
      )
    })}

    </div>
  )
}

export default Image