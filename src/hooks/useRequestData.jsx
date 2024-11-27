//fetch
//axios brug npm i axios
import axios from "axios";
import { useState } from "react";

const useRequestData =() =>{

  //usestate - opbevaring af data
  
  //loader - venter på svar
  const [isLoading, setIsLoading] = useState(false) //True eller false
  
  //success = data
  const [data, setData] = useState(null) //data enten {} eller []
  
  //error = ingen data
  const [error, setError] = useState(false)

  /* const makeRequest = async ( url, method = 'GET', headers = null, parent = null ) => {

  } */


  //ring op api'et - modtager en url (fx til swapi)
  const makeRequest = async (url, method ="GET", headers = null, params = null )=> {

    let response;

    setIsLoading(true) //der loades - ventes på data/svar


    /* await new Promise(resolve => setTimeout(resolve, 700))  */ //3 s forsinkelse


    try {

      if ( method === "GET"){

        
        response = await axios.get(url, {headers: headers, params: params})
      } else {
         throw new Error("for metode - indtil vider er kun GET accepteret")
      }

      setData(response.data)
      setError(false)

    } catch (error) {

      setError(true)
      setData(null)
      console.log(error)

    } finally {

      setIsLoading(false)

    }
  }




  return { makeRequest, isLoading, data, error}




}

export default useRequestData