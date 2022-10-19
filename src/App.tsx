import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './components/Routes/Home/home';
import { Posts } from './components/Routes/Posts/posts';
import { Pokemon } from './components/Routes/Pokemon/pokemon';
import { Layout } from './components/Common/Layout';


export const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="posts" element={<Posts />} />
            <Route index path="home" element={<Home />} />
            <Route path="pokemon" element={<Pokemon />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}
export default App;