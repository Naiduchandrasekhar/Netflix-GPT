import React, { useRef } from 'react'
import lang from '../Utils/languageConstants'
import { useSelector } from 'react-redux'
import openai from "../Utils/openai"

const GptSearchBar = () => {
    const searchText = useRef(null)
    const currentLanguage = useSelector(store => store.config.lang)

    const handleSearchMOvie = async (e) => {
      console.log(searchText.current.value)
      e.preventDefault()
    
      //Make an API call to GPT API and get movie results
      // const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query" + searchText.current.value + "only give me names of 5 movies, comma seperated"
      // const gptMovieList = await openai.chat.completions.create({
      //   messages: [{ role: 'user', content: gptQuery }],
      //   model: 'gpt-3.5-turbo',
      // });
      // console.log(gptMovieList.choices)
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