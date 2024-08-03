import { Navigate, Route, Routes } from 'react-router-dom';
import { DcPages, HeroPage, MarvelPage, SearchPage } from '../pages';
import { Navbar } from '../../ui/components/Navbar';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className='container'>

        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPages />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />

          <Route path="/" element={<Navigate to="/marvel" />} />

        </Routes>
      </div>



    </>
  )
}
