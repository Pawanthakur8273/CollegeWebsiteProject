import React, { useState } from 'react';
import { SidebarData } from './SidebarData';

const Sidebar = ({ onSelectComponent }) => {
  const [activeComponent, setActiveComponent] = useState(null);

  
  const handleComponentSelect = (Component) => {
    setActiveComponent(() => Component);
    // Optional: pass the component to a parent component if needed
    onSelectComponent && onSelectComponent(Component);
  };
  
  return (
    <div className='flex'>
      <div className='sidebar mx-5 box-border'>
        <ul className=''>
          {SidebarData.map((item, index) => (
            <li 
            key={index} 
            className='sidebar-item text-white p-2'
            onClick={() => handleComponentSelect(item.component)}
            
            >
              
              <div
                className={`group sidebar-link inline-flex gap-2 items-center border-solid border-2 border-customYellow h-12 px-3 text-xl cursor-pointer ${
                  activeComponent === item.component
                  ? 'text-customYellow font-bold bg-slate-50 border-none'
                  : 'hover:text-customYellow hover:border-none hover:bg-slate-50 hover:font-bold'
                }`}
                >
                <span>{item.title}</span>
                <span 
                  className={`group-hover:rotate-45 group-hover:text-white ${
                    activeComponent === item.component
                    ? 'rotate-45 text-white bg-customYellow' 
                    : 'bg-customYellow'
                  }`}
                >
                  {item.icon}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Render the active component */}
      <div className='flex-grow'>
        {activeComponent && React.createElement(activeComponent)}
      </div>
    </div>
  );
};

export default Sidebar;