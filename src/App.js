import "./App.css"
import {Link,Outlet} from 'react-router-dom'
const App = ()=>{
  return(
      <section className="App">
        <h1>کتابخانه من </h1>
          <nav style={{borderBottom:'1px solid ', paddingBottom:"1rem"}}>
              <Link to="/books" style={{margin:" 0 2rem"}}>کتاب ها</Link>
              <Link to="about">درباره ی ما </Link>
          </nav>
          <Outlet/>
      </section>
  )
}
export default  App;