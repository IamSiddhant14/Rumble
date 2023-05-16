import { createBrowserRouter, Outlet } from 'react-router-dom';
import ErrorElement from './components/ErrorElement';
import Header from './components/Header';
import Body from './components/Body';
import MainContainer from "./components/MainContainer";
import store from './utils/store';
import { Provider } from 'react-redux';
import WatchPage from './components/WatchPage';
import SearchPage from './components/SearchPage';
import './App.css'; 


const App = () => {

  return (
    
    <Provider store ={store}>
      <Header />
      <Outlet />
    </Provider>
  )
}

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    ErrorElement: <ErrorElement />,
    children: [
      {
        path: '/',
        element: <Body />,
        children: [
          {
            path: '/',
            element: <MainContainer />,
          }, {
            path: '/watch',
            element: < WatchPage />
          },{
            path : '/search/:term',
            element : <SearchPage/>
          }

        ]
      }
    ]

  }
])

export default App;
