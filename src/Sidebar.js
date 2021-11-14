import React from 'react';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={`sidebar-wrapper ${isModalOpen && 'show'}`}>
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeModal}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((link, index) => {
            const { page, links } = link;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((item, index) => {
                    const { label, icon, url } = item;
                    return (
                      <a href={url} key={index}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
