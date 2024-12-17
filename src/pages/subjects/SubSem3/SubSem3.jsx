import React from 'react';
import SubjectLinks from '../../../compnents/SubjectLinks'; // Import the SubjectLink component

function SubSem3() {
  const subjects = [
    { title: 'Math IV (BAS303)', link: '/math-iv' },
    { title: 'Technical Communication (BAS301)', link: '/technical-communication' },
    { title: 'Data Structure (BCS301)', link: '/data-structure' },
    { title: 'Computer Organization and Architecture (BCS302)', link: '/computer-organization-architecture' },
    { title: 'Discrete Structures & Theory of Logic (BCS303)', link: '/discrete-structures-theory-logic' },
    { title: 'Python Programming (BCC302)', link: '/python-programming' },
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

export default SubSem3;