import React from 'react'
import lang from '../Utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    const currentLanguage = useSelector(store => store.config.lang)

    const handleSearchMOvie = (e) => {
      e.preventDefault()
    }
  return (
    <div className='p-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12'>
            <input type='text' className='p-2 m-4 col-span-9' placeholder={lang[currentLanguage].gptPlaceholder} />
            <button onClick={handleSearchMOvie} className='bg-red-700 text-white col-span-3 rounded-lg p-2 m-4'>{lang[currentLanguage].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar