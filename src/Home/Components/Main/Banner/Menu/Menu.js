import React, { useState } from 'react';

const Menu = () => {
    const [activeLinkId, setActiveLinkId] = useState(1);

    const menuItems = [
        { id: 1, name: 'Study', dest: '#study' },
        { id: 2, name: 'Quiz', dest: '#quiz' },
        { id: 3, name: 'Test', dest: '#test' },
        { id: 4, name: 'Game', dest: '#game' },
        { id: 5, name: 'Others', dest: '#others' },
    ];

    const handleActive = (id) => {
        setActiveLinkId(id);
    };

    return (
        <div className="navbar justify-center mb-2">
            {menuItems.map((mi) => (
                <li key={mi.id}>
                    <a
                        href={mi.dest}
                        onClick={() => handleActive(mi.id)}
                        className={`inline-block px-4 py-2 text-[15px] ${activeLinkId === mi.id ? 'text-[#072B6B] border-b-2 border-[#072B6B] font-semibold' : 'text-black'
                            }`}
                    >
                        {mi.name}
                    </a>
                </li>
            ))}
        </div>
    );
};

export default Menu;

