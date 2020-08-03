import React from 'react'
import { Link } from 'react-router-dom'

function Haeder() {
    return (
        <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#"><img width="30px" style={{borderRadius:2}} src="data:image/jpeg;base64,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"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        {/* <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
        <Link exact="true" to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="#">About</a> */}
        <Link exact="true" to="/About" className="nav-link">About</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="#">Contact</a> */}
        <Link exact="true" to="/Contact" className="nav-link">Contact</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link " href="#"> Users</a> */}
        <Link exact="true" to="/Users" className="nav-link">Users</Link>

      </li>
      <li className="nav-item">
        {/* <a className="nav-link " href="#"> Users</a> */}
        <Link exact="true" to="/UserDetails" className="nav-link">User Details</Link>

      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Haeder
