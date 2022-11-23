import Header from '../Components/layout/Header'
import Sideposter from '../Components/layout/Sideposter'
import Footer from '../Components/layout/Footer'
import { FetchsettingApi } from '../Components/FetchApi'
import React, {useEffect, useState} from 'react'
import { useQuery } from 'react-query'
import MarkdownPreview from '@uiw/react-markdown-preview';

const Quizrules = () => {

  
  const [quizrulesdata, setquizrulesdata] = useState('');    
  const { data, error, isError, isLoading } = useQuery('setting', FetchsettingApi); 
  

  useEffect(()=>{         
      setquizrulesdata(data.data[0].quizrules);             
  },[]);


  return (
    <div className='md:flex'>
        <div className='left-cotaniner 
        bg-[#111827] overflow-x-hidden h-screen overflow-y-auto 
        md:max-w-[500px] md:w-[500px] min-w-[360px] w-full xs:w-full'>
            <Header /> 
            <div className='content mt-[20%] mx-3'>

                {(quizrulesdata) ? 
                    <MarkdownPreview source={quizrulesdata} />                   
                :""}

            </div>
            <Footer/>
        </div>
        <Sideposter /> 
    </div>
  )
}

export default Quizrules  