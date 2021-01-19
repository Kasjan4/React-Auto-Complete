import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './styles/style.css'
import './styles/normalize.css'



const App = () => {

  const [searchData, setSearchData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((resp) => {
        const users = resp.data
        const usernames = []

        for (let i = 0; i < users.length; i++) {
          usernames.push(users[i].username)
        }
        setSearchData(usernames)

      })
  }, [])

  function closeSearch() {
    setSearchTerm('')

  }

  return (

    <div className="App">

      <div className="search-container">

        <div className="search-wrapper">

          <input className="search-bar"
            placeholder="Search"
            type="text"
            aria-label="Search"
            onChange={(event) => {
              setSearchTerm(event.target.value)
            }}
            value={searchTerm}
          />

          <div className="search-results">

            {searchData.filter((val) => {
              if (searchTerm === '') {
                return ''
              } else if (val.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
              }

            }).map((val, index) => {
              return <p key={index} onClick={closeSearch}>{val}</p>
            })}

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
