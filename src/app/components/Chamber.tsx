'use client';

import React, { Dispatch, SetStateAction, useRef } from 'react';

interface chamberParamsType {
    theme: string,
    setTheme: Dispatch<SetStateAction<string>>
}
export default function Chamber({theme, setTheme} : chamberParamsType) {
    const centerY = useRef(null);

    const switchTheme = (label: string) => {
        setTheme(label);

        /*
        const alignPoint = centerY.current.getBoundingClientRect();
        const rect = event.target.getBoundingClientRect();*/
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
                <p className={`${theme === 'Mods' ? `opacity-100 font-cream ` : 'opacity-50 font-cream-alt'} text-lg h-8 adaptOpacity adaptColor adaptOrder`} onClick={() => switchTheme('Mods')}>Mods</p>
                <p className={`${theme === 'Plugins' ? `opacity-100 font-cream ` : ' opacity-50 font-cream-alt'} text-lg h-8 adaptOpacity adaptColor adaptOrder`} onClick={() => switchTheme('Plugins')}>Plugins</p>
                <p className={`${theme === 'Webextensions' ? `opacity-100 font-cream ` : 'opacity-50 font-cream-alt'} text-lg h-8 adaptOpacity adaptColor adaptOrder`} onClick={() => switchTheme('Webextensions')}>Webextensions</p>
                <p className={`${theme === '3D' ? `opacity-100 font-cream ` : 'opacity-50 font-cream-alt'} text-lg h-8 adaptOpacity adaptColor adaptOrder`} onClick={() => switchTheme('3D')}>3D</p>
                <p className={`${theme === 'Demo' ? `opacity-100 font-cream ` : 'opacity-50 font-cream-alt'} text-lg h-8 adaptOpacity adaptColor adaptOrder`} onClick={() => switchTheme('Demo')}>Demo</p>
                <p className={`${theme === 'Web' ? `opacity-100 font-cream ` : 'opacity-50 font-cream-alt'} text-lg h-8 adaptOpacity adaptColor adaptOrder`} onClick={() => switchTheme('Web')}>Web</p>
            </div>
        </div>
    )
}
