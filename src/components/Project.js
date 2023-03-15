import React from 'react'

export default function Project(props) {
  return (
    <div>
      <div className="album py-5 bg-light" id='projects'>
        <h2 className="project_heading">Personal Projects</h2>
    <div className="container width">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
            <img width="100%" height="225" src="TextUtils.png" alt="" />
            <div className="card-body">
                <p className="project_title">{props.projectName1}</p>
              <p className="card-text">This website is a utility which can be used to manipulate your text in the way you want.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"> <a className="nav-link" href="https://github.com/Vanshika61/MyFirstReactApp">Source code</a> </button>
                  <button type="button" className="btn btn-sm btn-outline-secondary"> <a className="nav-link" href="https://vanshika61.github.io/MyFirstReactApp/">Link</a> </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img width="100%" height="225" src="foodhub.png" alt="" />
            <div className="card-body">
            <p className="project_title">{props.projectName2}</p>
              <p className="card-text">A dynamic website that allows anybody to order their favourite food.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"><a className="nav-link" href="https://github.com/Vanshika61/FoodHub-Restaurant-Website">Source code</a></button>
                  <button type="button" className="btn btn-sm btn-outline-secondary"><a className="nav-link" href="https://vanshika61.github.io/FoodHub-Restaurant-Website/">Link</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img width="100%" height="225" src="todolist.png" alt="" />
            <div className="card-body">
            <p className="project_title">{props.projectName3}</p>
              <p className="card-text">A website creating for maintaining your to do list digitally.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"><a className="nav-link" href="https://github.com/Vanshika61/To-do-list">Source code</a></button>
                  <button type="button" className="btn btn-sm btn-outline-secondary"><a className="nav-link" href="https://github.com/Vanshika61/To-do-list">Link</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
      </div>
    </div>
  </div>
    // </div>
  )
}
