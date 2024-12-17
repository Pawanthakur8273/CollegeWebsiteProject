import React from 'react';
import SubjectLinks from '../../../compnents/SubjectLinks'; // Import the SubjectLink component

function SubSem2() {
  const subjects = [
    { title: 'Engineering Chemistry (BAS205)', link: '/engineering-chemistry' },
    { title: 'Engineering Mathematics-II (BAS203)', link: '/engineering-mathematics-2' },
    { title: 'Fundamentals of Electronics Engineering (BEC201)', link: '/fundamentals-electronics-engineering' },
    { title: 'Fundamentals of Mechanical Engineering (BME201)', link: '/fundamentals-mechanical-engineering' },
    { title: 'Soft Skills (BAS205)', link: '/soft-skills' },
  ];

  return (
    <div className="Subjects">
      <ul>
        {/* Map over subjects and render SubjectLink for each */}
        {subjects.map((subject, index) => (
          <SubjectLinks key={index} title={subject.title} link={subject.link} />
        ))}
      </ul>
    </div>
  );
}

export default SubSem2;