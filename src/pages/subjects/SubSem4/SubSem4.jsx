import React from 'react';
import SubjectLinks from '../../../compnents/SubjectLinks'; // Import the SubjectLink component

function SubSem4() {
  const subjects = [
    { title: 'Universal Human Value and Professional Ethics (BVE401)', link: '/universal-human-value-professional-ethics' },
    { title: 'Cyber Security (BCC401)', link: '/cyber-security' },
    { title: 'Operating System (BCS401)', link: '/operating-system' },
    { title: 'Theory of Automata and Formal Languages (BCS402)', link: '/theory-automata-formal-languages' },
    { title: 'Object Oriented Programming with Java (BCS403)', link: '/object-oriented-programming-java' },
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

export default SubSem4;