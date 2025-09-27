import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Admin = () => {
  
  return (
   <>
  <div className='w-full h-[50vh] border flex justify-center '>
    <div className='w-[50%] flex justify-around border py-6'>
       <NavLink to="/admin/user">User</NavLink>
       <NavLink to="/admin/worker">Worker</NavLink>
    </div>
  </div>
   </>
  );
};

export default Admin;
