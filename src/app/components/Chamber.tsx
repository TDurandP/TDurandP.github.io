'use client';

import React, { useRef, useState } from 'react';

export default function Chamber({theme, setTheme}) {
    
    const [themeYPos, setThemeYPos] = useState<number>(0);
    const [ySlide, setYSlide] = useState<number>(0);
    const centerY = useRef(null);

    const switchTheme = (label: string, event) => {
        setTheme(label);

        const alignPoint = centerY.current.getBoundingClientRect();
        const rect = event.target.getBoundingClientRect();

        console.log(rect.top - alignPoint.top);
        setThemeYPos(rect.top - alignPoint.top);
    }

    const handleAim = () => {
        switch (theme) {
            case 'Mods':
                return '0px';
            case 'Plugins':
                return '-32px';
            case 'Webextensions':
                return '-64px';
            case '3D':
                return '-96px';
            case 'Demo':
                return '-128px';
            case 'Web':
                return '-150px';
            default: return '0px'
        }
    }

    //<p style={theme === 'Mods' ? { top: `-${themeYPos + 80}px` } : {}} className={`${theme === 'Mods' ? `opacity-100 font-cream ` : 'opacity-50 font-cream-alt'} top-[0px] absolute adaptPosition adaptOpacity adaptColor adaptOrder`} onClick={(e) => switchTheme('Mods', e)}>Mods</p>
    //<h2 ref={centerY} className={`h-20 font-fakeReceipt text-cream text-xl`}>https://tdurandp.github.io/projects/</h2>
    //`${themeYPos}px`
    return (
        <div className="m-4 relative top-32 left-0 flex flex-row justify-center items-start h-60">
            <h2 ref={centerY} className={`bg-cream h-6 w-6 p-2 font-fakeReceipt text-cream text-xl`}></h2>

            <div style={{ top: handleAim() }} className={`cursor-pointer absolute right-[-175px] font-fakeReceipt text-cream text-xl flex flex-col justify-center items-start adaptPosition`}>
                <p className={`${theme === 'Mods' ? `opacity-100 font-cream ` : 'opacity-50 font-cream-alt'} text-lg h-8 adaptOpacity adaptColor adaptOrder`} onClick={(e) => switchTheme('Mods', e)}>Mods</p>
                <p className={`${theme === 'Plugins' ? `opacity-100 font-cream ` : ' opacity-50 font-cream-alt'} text-lg h-8 adaptOpacity adaptColor adaptOrder`} onClick={(e) => switchTheme('Plugins', e)}>Plugins</p>
                <p className={`${theme === 'Webextensions' ? `opacity-100 font-cream ` : 'opacity-50 font-cream-alt'} text-lg h-8 adaptOpacity adaptColor adaptOrder`} onClick={(e) => switchTheme('Webextensions', e)}>Webextensions</p>
                <p className={`${theme === '3D' ? `opacity-100 font-cream ` : 'opacity-50 font-cream-alt'} text-lg h-8 adaptOpacity adaptColor adaptOrder`} onClick={(e) => switchTheme('3D', e)}>3D</p>
                <p className={`${theme === 'Demo' ? `opacity-100 font-cream ` : 'opacity-50 font-cream-alt'} text-lg h-8 adaptOpacity adaptColor adaptOrder`} onClick={(e) => switchTheme('Demo', e)}>Demo</p>
                <p className={`${theme === 'Web' ? `opacity-100 font-cream ` : 'opacity-50 font-cream-alt'} text-lg h-8 adaptOpacity adaptColor adaptOrder`} onClick={(e) => switchTheme('Web', e)}>Web</p>
            </div>
        </div>
    )
}
