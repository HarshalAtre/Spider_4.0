import React from 'react'
import "../Styles/Video.css"
function Video() {
  return (
   <>
   <div className="main-container">
    
   <div className="vid-container">
   <div className="head">
            <div className="bar"></div>
        <h1 >#PhirSeZiddKar</h1>
            </div>
     <div className="main-vid">
        {/* <img className='main-img' src="https://img.youtube.com/vi/PibLurC2PTU/0.jpg" alt="" /> */}
     <iframe width="100%" height="100%" src="https://www.youtube.com/embed/PibLurC2PTU?si=Wu1yj-8UzZ3wgf0P"  frameborder="0"  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     </div>
     <div className="small-vid">
       <div className="vid"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/xwKbRWl9OHE?si=ewqxuRfsxGRqGvxu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
       <div className="vid"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/CpOSq4Yi7-4?si=FJJ40Kay0wcrD6S4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
       <div className="vid"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/rzubNgrEhtI?si=Bk7Y1EbMWOgujAyQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
     </div> 
   </div>
   </div>
   </>
  )
}

export default Video