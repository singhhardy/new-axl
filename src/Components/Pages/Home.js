import React from 'react'
import Header from '../Header/Header';
import Brands from '../brands/Brands';
import Grids from '../Grids/Grids';
import Footer from '../Footer/Footer'
import Services from '../Services/Services'
import Sections from '../Sections/Sections'
import Showcase from '../Showcase/Showcase';

function Home() {
  return (
    <div>
    <Showcase />
    <Brands />
    <Grids />
    <Sections />
    <Services />
    <Footer />
    </div>
  )
}

export default Home