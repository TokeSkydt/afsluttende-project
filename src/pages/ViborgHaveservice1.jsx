import React, { useEffect } from 'react'
import Title from '../componets/Title'
import Loader from '../componets/Loader'
import Error from '../componets/Error'
import useRequestData from '../hooks/useRequestData'


const ViborgHaveservice1 = () => {


  const { makeRequest: aboutUsRequest, data: aboutUsData, isLoading, error} = useRequestData()
  const { makeRequest: servicesRequest, data: servicesData} = useRequestData()

  useEffect(()=>{

    aboutUsRequest("http://localhost:5023/aboutus")
    servicesRequest("http://localhost:5023/services")

  },[ ])

  return (
    <div className='container'>
        <Title titleText='ViborgHaveservice1'/>
        {isLoading && <Loader/>}
        {error && <Error/>}

        <div>
          { aboutUsData && 
            <div key={aboutUsData.id} className=''>
              <h2>{aboutUsData.title}</h2>
              <p>{aboutUsData.content}</p>
            </div>
          }
        </div>
        <div>
          { servicesData &&
              servicesData.map( s =>
                <div key={s.id}>
                  <h2>{s.title}</h2>
                  <p>{s.content}</p>
                  <img src={"http://localhost:5023/images/" + s.image} alt={s.title} />
                </div>
              )
          }
        </div>

    </div>
    )
  
}

export default ViborgHaveservice1