import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import NotFound from './NotFound';
import Register from './Register';
import Setting from './Setting';


const routes = 
<BrowserRouter>
   <Routes>
    <Route path='' element={<Login/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
    <Route path='/settings' element={ <Setting /> }></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>
   </Routes>
</BrowserRouter>
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 routes
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

