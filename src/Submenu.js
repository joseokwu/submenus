import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const container = useRef(null);
  const { isSubmenuOpen, page, location } = useGlobalContext();
  const [columns, setcolumns] = useState('col-2');

  useEffect(() => {
    setcolumns('col-2');
    container.current.style.left = `${location.center}px`;
    container.current.style.top = `${location.bottom}px`;
    if (page.links.length === 3) {
      setcolumns('col-3');
    } else if (page.links > 3) {
      setcolumns('col-4');
    }
  }, [location][page]);
  return (
    <aside className={`submenu ${isSubmenuOpen && 'show'}`} ref={container}>
      <section>
        <h4>{page.page}</h4>
        <div className={`submenu-center ${columns}`}>
          {page.links.map((link, index) => {
            const { label, icon, url } = link;
            return (
              <a href={url} key={index}>
                {icon} {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
