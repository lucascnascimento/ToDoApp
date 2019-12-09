import React from 'react'

const About = () => {
  return (
    <div className="card">
      <div className="row">
        <div className="col m4 hide-on-small-only center-align">
          <img className="responsive-image circle avatar-width margin-top-sm" src="https://avatars3.githubusercontent.com/u/43356441?s=460&v=4"/>
        </div>
        <div className="col m6">
          <h3>About</h3>
          <p className='justify-text'>
            Hi, I'm Lucas. I'm a mecathronics engineer student who has recently discovered a huge interest in web development. What you are seeing and using is my first React application - Ok I've made other simpler ones but, for me, that is the one that counts as the first one. This little project (the classical ToDo application) helped me ground some basics of react and challenged me to go beyond of what was my field of knowledge. And what exactly was my goal with this project? I was aiming to understand better the Context API so to do that I designed this app to have a global state that would hold all the todos the user added. The app has basically four components, the navbar which provides the links to the other pages of the aplication, the createTodo.js that is responsible for creating the todo and validating the user input, the listOfItems.js which sorts and render the last component, the todoItem.js, which renders the info of each individual todo that is stored in the global state array. All of the graphical part of this project was done using MaterializeCSS (first time using it as well). This was a project that I really enjoyed doing and I'm planning in the future to add a option to edit the todo and maybe the option to add a pomodoro timer to track each task.
          </p>
          <p className='justify-text'>
            Don´t forget to check out my LinkedIn and my github repo ;)
          </p>
        </div>
      </div>
        <div className="row">
          <div className="divider">
  
          </div>
        </div>
        <div className="row">
          <div className='center-align'>
            <a href="https://github.com/lucascnascimento" className="col s6 right-align">
              <i class="fab fa-github-square fa-3x black-text"></i>
            </a>
            <a href="https://www.linkedin.com/in/lucas-nascimento-36aaaa14b/" className="col s6 left-align">
              <i class="fab fa-linkedin fa-3x black-text"></i>
            </a>
          </div>
        </div>
        <div className="row">

        </div>
    </div>
  )
}

export default About
