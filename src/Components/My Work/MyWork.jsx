import React from 'react'
import './MyWork.css'
import myWorkImg  from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import showMoreImg from '../../assets/arrow_icon.svg'

const MyWork = () => {
return (
  <div id='portfolio' className='myWork'>
        <div className="myWork-title">
          <h1>My Latest Work </h1>
          <img src={myWorkImg} alt="" />
        </div>

          <div className="myWork-container">
          {mywork_data.map((work, index) => {
              return <img key={index} src={work.w_img} />
          })}
        </div>
    
        
        <div className="mywork-showmore">
          <p>Show More</p>
          <img src={showMoreImg} alt="" />
  </div> 
      </div>
)
}

export default MyWork