import {useState} from 'react'
import { AddCategory,GifGrid} from './components'


/* Api key: RnBKyKOPsMwhD6tS4O371Ofb168zvJFH */

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (newCategory) =>{

    if( categories.includes(newCategory)) return

    setCategories(cat => [newCategory,...categories])

  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
      onNewCategory = { value => onAddCategory(value)}
      />

      {
        categories.map( category => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }

    </>
  )
}
