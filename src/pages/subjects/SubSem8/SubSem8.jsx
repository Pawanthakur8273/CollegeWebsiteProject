import React from 'react';
import SubjectLinks from '../../../compnents/SubjectLinks'; // Import the SubjectLink component

function SubSem8() {
  // Array of subjects data
  const subjects = [
    { title: 'Subject 1', link: '/subject1' },
    { title: 'Subject 2', link: '/subject2' },
    { title: 'Subject 3', link: '/subject3' },
    { title: 'Subject 4', link: '/subject4' },
    { title: 'Subject 5', link: '/subject5' },
    { title: 'Subject 6', link: '/subject6' },
    { title: 'Subject 7', link: '/subject7' },
    { title: 'Subject 8', link: '/subject8' },
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

export default SubSem8;
