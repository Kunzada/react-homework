import { Link, Outlet } from 'react-router-dom';
import '../css/Layout.css'
export const Layout = () => {
  return (
    <>
      <header className='headerStyle'>
        {/* <Link path="/" element={<Homepage />} >  </Link> */}
        <Link to="/task1" className='LinkStyle'>
          Task1
        </Link>
        <Link to="/task2" className='LinkStyle'>
          Task2
        </Link>
        <Link to="/task3" className='LinkStyle'>
          Task3
        </Link>
        <Link to="/task4" className='LinkStyle'>
          Task4
        </Link>
        <Link to="/task5" className='LinkStyle'>
          Task5
        </Link>
        <Link to="/task6" className='LinkStyle'>
          Task6
        </Link>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
