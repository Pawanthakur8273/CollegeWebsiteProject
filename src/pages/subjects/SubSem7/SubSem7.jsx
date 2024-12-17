import React from 'react';
import SubjectLinks from '../../../compnents/SubjectLinks'; // Import the SubjectLink component

function SubSem7() {
  // Array of subjects data, ordered by CSE, CSE_AI, CSE_AIML, then CSE_AIDS
  const subjects = [
    { title: 'Distributed System (DS) (KCS-077)', link: '/distributed-system' },
    { title: 'Rural Development Administration And Planning (KHU-701)', link: '/rural-development-administration-planning' },
    { title: 'Deep Learning (KCS-078)', link: '/deep-learning' },
    { title: 'Renewable Energy Resources (KOE-074)', link: '/renewable-energy-resources' },
    { title: 'Text Analytics and Natural Language Processing (KAI-073)', link: '/text-analytics-nlp' },
    { title: 'Internet of Things (IoT) (KCS-712)', link: '/internet-of-things' },
    { title: 'Renewable Energy Resources (KOE-074)', link: '/renewable-energy-resources-ai' },
    { title: 'Data Warehousing and Data Mining (KAI-075)', link: '/data-warehousing-and-data-mining' },
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

export default SubSem7;
