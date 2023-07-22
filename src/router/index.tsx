import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Layout from '../components/Layout';
import { Admin } from '../pages/Admin';
import { Inquiry, Faq, Notice } from '../pages/Customer';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { Policy } from '../pages/Policy';
import { Users } from '../pages/Users';
import { useRecoilValue } from 'recoil';
import { userTokenState } from '../recoil/atoms/userToken';

function Root() {
  const tokenInfo = useRecoilValue(userTokenState);
  return (
    <BrowserRouter>
      <Routes>
        {tokenInfo.hasToken && (
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<Navigate to="/" />} />
            <Route index element={<Dashboard />} />
            <Route path="admin" element={<Admin />} />

            <Route path="users" element={<Users />} />

            <Route path="/customer">
              <Route path="inquiry" element={<Inquiry />} />
              <Route path="faq" element={<Faq />} />

              <Route path="notice" element={<Notice />} />
            </Route>
            <Route path="policy" element={<Policy />} />
          </Route>
        )}
        {!tokenInfo.hasToken && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
