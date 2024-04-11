import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='whole'>
      <div className='one'>
        <div className='five'>
          <div className='six'>
            <h1>clearlydecoded/<span>html-css-</span> </h1>
            <h1><span>javascript-tutorial</span></h1>
          </div>
          <h3>Example code for HTML,CSS, and Javascript for  </h3>
          <h3>Web Developers Coursera Course</h3>
        </div>
        <div>
          <img src="src\assets\face.jpg" alt="" />
        </div>
      </div>
      <div className='two' >
        <div className='three'>
          <div className='four'>
            <svg aria-hidden="true" height="28" viewBox="0 0 16 16" version="1.1" width="28" data-view-component="true" class="octicon octicon-people">
              <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
            </svg>
            <div className='seven'>
              <p>0</p>
              <span2>Contributors</span2>
            </div>
          </div>
          <div className='four'>
            <svg aria-hidden="true" height="28" viewBox="0 0 16 16" version="1.1" width="28" data-view-component="true" class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline">
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
            </svg>
            <div className='seven'>
              <p>0</p>
              <span2>Issues</span2>
            </div>
          </div>
          <div className='four'>
            <svg aria-hidden="true" height="28" viewBox="0 0 16 16" version="1.1" width="28" data-view-component="true" class="octicon octicon-star d-inline-block mr-2">
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
            </svg>
            <div className='seven'>
              <p>5</p>
              <span2>Stars</span2>
            </div>
          </div>
          <div className='four'>
            <svg aria-hidden="true" height="28" viewBox="0 0 16 16" version="1.1" width="28" data-view-component="true" class="octicon octicon-repo-forked mr-2">
              <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
            </svg>
            <div className='seven'>
              <p>5</p>
              <span2>Forks</span2>
            </div>
          </div>
        </div>
        <div>
        <img src="src\assets\icone-github-grise.png" alt="" />
        </div>
      </div>
      <div className='box' >
      {/* <i class="fa-brands fa-github" style="color: #bfbfc0;"></i> */}
      </div>
      
    </div>
  )
}

export default App
