import React, { useRef } from 'react'
import lang from '../Utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const searchText = useRef(null)
    const currentLanguage = useSelector(store => store.config.lang)

    const handleSearchMOvie = async (e) => {
      console.log(searchText.current.value)
      e.preventDefault()
      alert("oops! GPT API is paid so not implemented")
    }

  return (
    <div className='sm:pt-[25%] md:pt-[10%] flex justify-center'>
        <form className='bg-black sm:w-auto md:w-1/2 grid grid-cols-12'>
            <input ref={searchText} type='text' className=' p-2 m-4 col-span-9' placeholder={lang[currentLanguage].gptPlaceholder} />
            <button onClick={handleSearchMOvie} className='bg-red-700 text-white col-span-3 rounded-lg p-2 m-4'>{lang[currentLanguage].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar