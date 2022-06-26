import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Detail from './Detail';
import Login from './Login';
import NotFound from './NotFound';
import Register from './Register';
import Security from './Security';
import Setting from './Setting';
import { store } from './useRedux/AppStore';


const routes = 
<Provider store={store}>
<BrowserRouter>
   <Routes>
    <Route path='' element={<Login/>}></Route>
    <Route path='/dashboard' element={<Security component={<Dashboard></Dashboard>}></Security>}></Route>
    <Route path='/settings' element={ <Security component={<Setting></Setting>}></Security> }></Route>
    <Route path='/detail' element={ <Security component={<Detail></Detail>}></Security> }></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>
   </Routes>
</BrowserRouter>
</Provider>
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 routes
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

