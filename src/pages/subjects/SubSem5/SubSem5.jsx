import React from 'react';
import SubjectLinks from '../../../compnents/SubjectLinks'; // Import the SubjectLink component

function SubSem5() {
  // Array of subjects data, ordered by CSE, CSE_AI, CSE_AIML, then AIDS
  const subjects = [
    { title: 'Web Technology (BCS-502)', link: '/web-technology' },
    { title: 'Distributed System (KCS-077)', link: '/distributed-system' },
    { title: 'Text Analytics and Natural Language Processing (KAI-073)', link: '/text-analytics-nlp' },
    { title: 'Data Warehousing and Data Mining (KAI-075)', link: '/data-warehousing-and-data-mining' },
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

export default SubSem5;
