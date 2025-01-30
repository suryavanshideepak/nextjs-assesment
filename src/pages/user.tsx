// pages/users.tsx

import { GetServerSideProps } from 'next';
import React from 'react';
import { User } from '../types/index';
import { useTheme } from '@/context/ThemeContext';

type UsersPageProps = {
  users: User[];
};

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-5 ${
        theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
      }`}
    >
      <h1 className="text-4xl font-bold mb-8">User List</h1>
      <div className="overflow-x-auto w-full max-w-6xl">
        <table className="table-auto border-collapse border border-gray-400 w-full text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="text-black border border-gray-400 px-4 py-2">Name</th>
              <th className="text-black border border-gray-400 px-4 py-2">Email</th>
              <th className="text-black border border-gray-400 px-4 py-2">Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <td className="border border-gray-400 px-4 py-2">{user.name}</td>
                <td className="border border-gray-400 px-4 py-2">{user.email}</td>
                <td className="border border-gray-400 px-4 py-2">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
