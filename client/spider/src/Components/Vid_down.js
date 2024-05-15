import React from 'react'
import "../Styles/Vid_Down.css"
function Vid_Down() {
  return (
    <>
    <div className="con">
        <div className="all">
            <div className="head">
            <div className="bar"></div>
        <h1 >Authenticate Your Product</h1>
            </div>
            <div className="vid-1"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/Bm8g8g_txxw?si=L2ChSxkHm7BIqAEk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            <div className="form">
                <input className='t-1' placeholder="Enter Unique Code" type="text" />
                <input className="t-2" placeholder="Enter number" type="text" />
                <button className='btn-1'>AUTHENTICATE NOW</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Vid_Down