import React from 'react';
import SubjectLinks from '../../../compnents/SubjectLinks'; // Import the SubjectLink component

function SubSem1() {
  const subjects = [
    { title: 'Engineering Physics (BAS101)', link: '/engineering-physics' },
    { title: 'Engineering Mathematics-I (BAS103)', link: '/engineering-mathematics-1' },
    { title: 'Fundamentals of Electrical Engineering (BEE101)', link: '/fundamentals-electrical-engineering' },
    { title: 'Programming for Problem Solving (BCS101)', link: '/programming-problem-solving' },
    { title: 'Environment and Ecology (BAS104)', link: '/environment-ecology' },
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

export default SubSem1;
