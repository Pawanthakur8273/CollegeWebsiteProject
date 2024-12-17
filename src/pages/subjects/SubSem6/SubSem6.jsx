import React from 'react';
import SubjectLinks from '../../../compnents/SubjectLinks'; // Import the SubjectLink component

function SubSem6() {
  // Array of subjects data, ordered by CSE, CSE_AI, CSE_AIML, then AIDS
  const subjects = [
    { title: 'Machine Learning Techniques (BCS-055)', link: '/machine-learning-techniques' },
    { title: 'Deep Learning (KCS-078)', link: '/deep-learning' },
    { title: 'Internet of Things (IoT) (KCS-712)', link: '/internet-of-things' },
    { title: 'Mobile Computing (KCS-711)', link: '/mobile-computing' },
    { title: 'Machine Learning & Network Security (KAD-075)', link: '/machine-learning-network-security' },
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

export default SubSem6;
