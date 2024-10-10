// pages/users.tsx

import { GetServerSideProps } from 'next';
import React from 'react';
import { User } from '../types/index'
import { useTheme } from '@/context/ThemeContext';

type UsersPageProps = {
  users: User[];
};

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  const { theme } = useTheme()
  return (
    <div style={{
      width:'100%',
      height:'90vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      padding:5,
      backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
      color: theme === 'light' ? '#000000' : '#ffffff',
    }}>
      <h1 className='p-5 text-4xl'>User List</h1>
      <table border={1} cellPadding="10" cellSpacing="0" className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Email</th>
            <th className="border border-gray-400 px-4 py-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-400 px-4 py-2">{user.name}</td>
              <td className="border border-gray-400 px-4 py-2">{user.email}</td>
              <td className="border border-gray-400 px-4 py-2">{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<UsersPageProps> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;
