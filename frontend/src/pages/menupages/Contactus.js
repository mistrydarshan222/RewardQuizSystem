import React from 'react'
import Header from '../Components/layout/Header'
import Sideposter from '../Components/layout/Sideposter'
import Footer from '../Components/layout/Footer'
import Backendurl from '../Helper/Backendurl'
import { useEffect , useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


const Contactus = () => {  


    async function getdetails(e) {  
      e.preventDefault();
      const url = await Backendurl(); 
      const email = e.target.email;
      const subject = e.target.subject;
      const message = e.target.message;
      
      const res = await fetch(`${url.backend_url}/api/sendmail`,
      {            
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify(
              {
                  "email": email.value, 
                  "subject":subject.value,
                  "message":message.value
              }
          )
      } )
      if(res.status == 200){
        toast.success('Mail Send...', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
            });
        email.value = "";
        subject.value = "";
        message.value = "";
      }

    }

  

  return (
    <div className='md:flex'>
      <div className='left-cotaniner 
      bg-[#111827] overflow-x-hidden h-screen overflow-y-auto 
      md:max-w-[500px] md:w-[500px] min-w-[360px] w-full xs:w-full'>
          <Header /> 
            <section className="bg-[#111827] mt-[10%]">
              <div className="lg:py-16 p-8 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <form method="POST" onSubmit={getdetails} className="space-y-8">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                    <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">Subject</label>
                    <input type="text" name="subject" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
                    <textarea id="message" name="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." defaultValue={""} />
                  </div>
                  <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#1a2f77]  hover:bg-[#1a2f55]">Send message</button>
                </form>
              </div>
            </section>
          <Footer/>
        </div>
      <Sideposter /> 
    </div>
  )
}

export default Contactus