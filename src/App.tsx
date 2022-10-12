import { FC } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Home } from './components/Routes/Home/home';
import { Posts } from './components/Routes/Posts/posts'; 
import { Pokemon } from './components/Routes/Pokemon/pokemon';

// function App() {
//   return (
//     <div className="App">
//      A
//     </div>
//   );
// }
//


export const App: FC = () => {
  return(
    <BrowserRouter>
      <img src={"https://picsum.photos/200"} alt="alt" id="imgTop"></img>
      <div>
          <>{console.log()}</>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="posts">Posts</Link>
            </li>
            <li>
              <Link to="pokemon">Pokemon of the day</Link>
            </li>
          </ul>
         
          
      </div>
      <Routes>
        <Route path="posts" element={<Posts />} />
        <Route index path="home" element={<Home />} />
        <Route path="pokemon" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;