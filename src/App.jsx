import React from "react"
import Header from "./component/Header"
import Section from "./component/Section"
import Footer from "./component/Footer"

function App() {

  return (
    <>
     <Header/>
     <br />
     <hr className="border-1 border-zinc-200 shadow-xl" />
     <Section/>
     <br />
     <Footer />
    </>
  )
}

export default App
