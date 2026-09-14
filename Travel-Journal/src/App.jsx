import React from "react"
import './App.css'
import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data.js";

function App() {

  return (
    <>
      <Header />
      <main className="container">
        {data.map((country) => (
          <Entry
            key={country.id}
            img={country.img}
            title={country.title}
            country={country.country}
            googleMapsLink={country.googleMapsLink}
            dates={country.dates}
            text={country.text}
          />
        ))}
      </main>
    </>
  )
}

export default App
