import React from 'react';
import { Link } from 'react-router-dom';

import './DepartmentCard.scss';

const DepartmentCard = ({ id, name }) => {
  return (
    <div className="department-card">
      <Link to={`/department/${id}`}>
        <div className="department-card__body">
          <h3>{name}</h3>
        </div>
      </Link>
    </div>
  );
};

export default DepartmentCard;
