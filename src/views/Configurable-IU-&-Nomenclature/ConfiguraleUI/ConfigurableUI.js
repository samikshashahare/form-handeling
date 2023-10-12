import React from 'react';
import './ConfigurableUI.css';
import Config from './../../../components/utils/config.json';

function ConfigurableUI() {
  return (
    <div>
      <div className='text-center'>
        <h2>{Config.title}</h2>
        <h4>{Config.description}</h4>
      </div>
      <div>
        {/* <h4>{Config.sweets[0].title}</h4>
        <p>{Config.sweets[0].description}</p> */}
      </div>


      <div className='main-div'>
      {
        Config.sweets.map((sweets, index) => {
          const { title, image, description } = sweets
          return (
            <>
              <div>
                <div className='card' key={index}>
                  <div className='sweets-card'>
                    <h3 className='sweets-title'>{title}</h3>
                    <img src={image} className='sweets-img'></img>
                    <p className='sweets-text'>{description}</p>
                  </div>
                </div >
              </div>
            </>
          )
        })
      }
      </div>

    </div>
  )
}

export default ConfigurableUI

