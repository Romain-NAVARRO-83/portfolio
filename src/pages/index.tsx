import React, { useEffect, useRef } from 'react';
import 'fullpage.js/dist/fullpage.min.css';

import Welcome from '../components/Welcome';
import ServicesSkills from '../components/ServicesSkills';
import Portfolio from '../components/Portfolio';
import Curriculum from '../components/Curriculum';
import Contact from '../components/Contact';

declare global {
    interface Window {
        fullpage_api?: any;
    }
}

const HomePage = () => {
    const fullpageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let fpInstance: any;
        if (typeof window !== 'undefined') {
            import('fullpage.js').then((fullpageModule) => {
                // @ts-ignore
                fpInstance = new fullpageModule.default('#fullpage', {
                    autoScrolling: true,
                    navigation: true,
                    anchors: ['welcome', 'services', 'portfolio', 'curriculum', 'contact'],
                    sectionSelector: '.section',
                    navigationTooltips: ['Accueil', 'Services', 'Portfolio', 'CV', 'Contact'],
                    showActiveTooltip: true,
                    scrollOverflow: true,
                });
            });
        }
        return () => {
            if (typeof window !== 'undefined' && window.fullpage_api) {
                window.fullpage_api.destroy('all');
            }
        };
    }, []);

    return (
        <div id="fullpage" ref={fullpageRef}>
            <div className="section"><Welcome /></div>
            <div className="section"><ServicesSkills /></div>
            <div className="section"><Portfolio /></div>
            <div className="section"><Curriculum /></div>
            <div className="section"><Contact /></div>
        </div>
    );
};

export default HomePage;