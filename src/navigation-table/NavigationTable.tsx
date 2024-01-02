import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavigationTable: React.FC = () => {
  const location = useLocation();
  const routes = [
    { path: '/', label: 'Home page' },
    { path: '/pageOne', label: 'Page One' },
    { path: '/pageTwo', label: 'Page Two' },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Template website</th>
        </tr>
      </thead>
      <tbody>
        {routes.map((route, index) => (
          <tr key={index}>
            <td>
              <Link to={route.path} style={{ fontWeight: location.pathname === route.path ? 'bold' : 'normal' }}>
                {route.label}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NavigationTable;
