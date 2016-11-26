import React from 'react';
import BEMHelper from 'react-bem-helper';
import Pyramid from './Pyramid';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            elements: [
                //Stockholmsskolan
                {
                    type: "iframe",
                    src: "http://gergeo.se/stockholmsskolan/",
                    orgWidth: 1080,
                    orgHeight: 1080
                },

                //elq
                {
                    src: "img/showcase/elq/elq_logo.svg",
                    orgWidth: 1080,
                    orgHeight: 1080,
                    href: "http://elq.io"
                },
                {
                    src: "img/showcase/elq/elq_website_2.jpg",
                    orgWidth: 1080,
                    orgHeight: 1080,
                    href: "http://elq.io"
                },

                //gergeo invest
                {
                    src: "img/showcase/gergeo_invest/gergeo_invest_logomark_v1.svg",
                    orgWidth: 1500,
                    orgHeight: 1500
                },

                //sara ljung
                {
                    src: "img/showcase/sara_ljung/sara_ljung_its_over_q50.jpg",
                    orgWidth: 1500,
                    orgHeight: 1500,
                    href: "https://open.spotify.com/track/7uEKx6KqTQi1Bc2huFRvKB"
                },

                //younger
                {
                    src: "img/showcase/younger/wisewikeXadgXmartinbarra_rocket_spaceship_q80.jpg",
                    orgWidth: 1500,
                    orgHeight: 1500,
                    href: "https://open.spotify.com/track/2Mx9wCMEa2va8Cv5zao3zC"
                },
                {
                    src: "img/showcase/younger/sean_bradford_broken_wings_q80.jpg",
                    orgWidth: 1500,
                    orgHeight: 1500,
                    href: "https://open.spotify.com/track/1SKOLKQlqcLOu6RDiELNSW"
                },

                //absolut are
                // {
                //     src: "img/showcase/absolut_art/absolut_art_ishi_x_alex_wessely.jpg",
                //     orgWidth: 1080,
                //     orgHeight: 1920
                // },

                //dair glass
                {
                    src: "img/showcase/dair_glass/dair-glass-logo-v1.png",
                    orgWidth: 1500,
                    orgHeight: 2123
                },

                //innovestic capital
                {
                    src: "img/showcase/innovestic_capital/innovestic_capital_logo.png",
                    orgWidth: 1500,
                    orgHeight: 1500
                },

                //på taket
                // { 
                //     src: "img/showcase/pataket/pataket-samling.png",
                //     orgWidth: 800,
                //     orgHeight: 1120
                // },
                { 
                    src: "img/showcase/pataket/pataket-1.png",
                    orgWidth: 800,
                    orgHeight: 1120
                },
                { 
                    src: "img/showcase/pataket/pataket-2.png",
                    orgWidth: 800,
                    orgHeight: 1120
                },
                { 
                    src: "img/showcase/pataket/pataket-3.png",
                    orgWidth: 800,
                    orgHeight: 1120
                },
                { 
                    src: "img/showcase/pataket/pataket-4.png",
                    orgWidth: 800,
                    orgHeight: 1120
                },
                { 
                    src: "img/showcase/pataket/pataket-5.png",
                    orgWidth: 800,
                    orgHeight: 1120
                },

                //svung
                { 
                    src: "img/showcase/svung/utropstecknet/utropstecknet_2014_nr2_kongressen_v2_260dpi_web-1.jpg",
                    orgWidth: 800,
                    orgHeight: 1131,
                    href: "https://issuu.com/utropstecknet/docs/utropstecknet_2014_nr2_kongressen_v"
                },
                { 
                    src: "img/showcase/svung/utropstecknet/utropstecknet_2014_nr2_kongressen_v2_265dpi_web_p8-9.jpg",
                    orgWidth: 1190,
                    orgHeight: 842,
                    href: "https://issuu.com/utropstecknet/docs/utropstecknet_2014_nr2_kongressen_v"
                },
                { 
                    src: "img/showcase/svung/utropstecknet/utropstecknet_2014_nr2_kongressen_v2_265dpi_web_p12-13.jpg",
                    orgWidth: 1190,
                    orgHeight: 842,
                    href: "https://issuu.com/utropstecknet/docs/utropstecknet_2014_nr2_kongressen_v"
                },

                { 
                    src: "img/showcase/svung/app/svung-app-mockup-1.png",
                    orgWidth: 1024,
                    orgHeight: 1447
                },
                { 
                    src: "img/showcase/svung/app/svung-app-mockup-2.png",
                    orgWidth: 1024,
                    orgHeight: 1447
                },
                { 
                    src: "img/showcase/svung/app/svung-app-mockup-4.png",
                    orgWidth: 1024,
                    orgHeight: 1447
                },

                //labyrint 
                { 
                    src: "img/showcase/labyrint/Labyrint-fabriken-affisch-mockup-2.jpg",
                    orgWidth: 1000,
                    orgHeight: 1300
                },

                //mentimeter
                { 
                    src: "img/showcase/mentimeter/mentimeter-brand.png",
                    orgWidth: 1200,
                    orgHeight: 850
                },
                { 
                    src: "img/showcase/mentimeter/mentimeter-logo-spec.png",
                    orgWidth: 1200,
                    orgHeight: 850
                },
                { 
                    src: "img/showcase/mentimeter/mentimeter-site.png",
                    orgWidth: 1200,
                    orgHeight: 850
                },

                //bsf
                { 
                    src: "img/showcase/bsf/bsf-logo.png",
                    orgWidth: 650,
                    orgHeight: 650
                },

                //Cap & Design 
                { 
                    src: "img/showcase/capanddesign/capanddesign_nr6.jpg",
                    orgWidth: 640,
                    orgHeight: 640
                },

                //Mishmash
                { 
                    src: "img/showcase/mishmash/mishmash-mockup-logo.png",
                    orgWidth: 1024,
                    orgHeight: 1447
                },
                { 
                    src: "img/showcase/mishmash/mishmash-mockup.png",
                    orgWidth: 1024,
                    orgHeight: 1447
                },

                //by Sara
                { 
                    src: "img/showcase/bysara/broschyr/bysara-broschyr-1.jpg",
                    orgWidth: 1280,
                    orgHeight: 854
                },
                { 
                    src: "img/showcase/bysara/broschyr/bysara-broschyr-2.jpg",
                    orgWidth: 1200,
                    orgHeight: 801
                },
                { 
                    src: "img/showcase/bysara/broschyr/bysara-broschyr-3.jpg",
                    orgWidth: 1280,
                    orgHeight: 854
                },
                { 
                    src: "img/showcase/bysara/bysara-logo-3.svg",
                    orgWidth: 900,
                    orgHeight: 900
                },

                //osqledaren 
                { 
                    src: "img/showcase/osqledaren/osqledaren_side_by_side.jpg",
                    orgWidth: 2048,
                    orgHeight: 1360
                },
                { 
                    src: "img/showcase/osqledaren/utslapp-infographic-r05_nobleed.jpg",
                    orgWidth: 800,
                    orgHeight: 1000
                },

                //Trustly 
                { 
                    src: "img/showcase/trustly/trustly-backoffice-login.png",
                    orgWidth: 600,
                    orgHeight: 600,
                    href: "https://backoffice.trustly.com/"
                },
                { 
                    src: "img/showcase/trustly/trustly-backoffice-dashboard.png",
                    orgWidth: 600,
                    orgHeight: 600,
                    href: "https://backoffice.trustly.com/"
                },

                //FA
                { 
                    src: "img/showcase/forortsakademiker/forortsakademiker-2013-01-30-cropped.png",
                    orgWidth: 1189,
                    orgHeight: 1710
                },

                //Winged Bull 
                { 
                    src: "img/showcase/winged_bull/winged-bull-r02-web.png",
                    href: "img/showcase/winged_bull/capdesign_2015_nr3_en_hyllning_till_lamassun_av_nadan_gergeo.pdf",
                    orgWidth: 1200,
                    orgHeight: 1697
                },

                //Kul1415 
                { 
                    src: "img/showcase/kul1415/skyltar.jpg",
                    orgWidth: 640,
                    orgHeight: 640
                },

                //milo and starpoint 
                { 
                    src: "img/showcase/milo_and_starpoint/milo_and_starpoint_profile_image_1.png",
                    orgWidth: 1280,
                    orgHeight: 1280
                },

                //rob and jack 
                { 
                    src: "img/showcase/rob_and_jack/RobAndJack-profile-image-2-sabale-yellow-q50.jpg",
                    orgWidth: 1280,
                    orgHeight: 1280,
                    href: "http://robnjack.com/"
                },

                //ADG 
                { 
                    src: "img/showcase/adg/ta_av_dig_luvan_cover_r02_800x800.jpg",
                    orgWidth: 800,
                    orgHeight: 800
                },

                //creative juice 
                { 
                    src: "img/showcase/creative juice/creative-juice-cover-v1.png",
                    orgWidth: 600,
                    orgHeight: 600,
                    href: "https://open.spotify.com/user/nadan/playlist/52iyYK6HknMWZ37I7z6WlR"
                },

                //edin 
                { 
                    src: "img/showcase/edin/edin-logo-1.png",
                    orgWidth: 700,
                    orgHeight: 700
                },
                { 
                    src: "img/showcase/edin/edin-logo-2.png",
                    orgWidth: 700,
                    orgHeight: 700
                },

                //lomo 
                { 
                    src: "img/showcase/lomo/lomo1.jpg",
                    orgWidth: 1280,
                    orgHeight: 1280
                },
                { 
                    src: "img/showcase/lomo/lomo2.jpg",
                    orgWidth: 1280,
                    orgHeight: 1280
                },
                { 
                    src: "img/showcase/lomo/lomo3.jpg",
                    orgWidth: 1280,
                    orgHeight: 1280
                },
                { 
                    src: "img/showcase/lomo/lomo4.jpg",
                    orgWidth: 1280,
                    orgHeight: 1280
                },
                { 
                    src: "img/showcase/lomo/lomo5.jpg",
                    orgWidth: 1280,
                    orgHeight: 1280
                },
                { 
                    src: "img/showcase/lomo/lomo6.jpg",
                    orgWidth: 1280,
                    orgHeight: 1280
                },

                //armada 
                { 
                    src: "img/showcase/armada/armada-kataloger.jpg",
                    orgWidth: 1280,
                    orgHeight: 905
                },
                { 
                    src: "img/showcase/armada/armada-vardkampanj-orange.png",
                    orgWidth: 600,
                    orgHeight: 848
                },
                { 
                    src: "img/showcase/armada/armada-vardkampanj-green.png",
                    orgWidth: 600,
                    orgHeight: 848
                },
                { 
                    src: "img/showcase/armada/armada-vardkampanj-red.png",
                    orgWidth: 600,
                    orgHeight: 848
                },
                { 
                    src: "img/showcase/armada/armada-pgkampanj-red.png",
                    orgWidth: 842,
                    orgHeight: 1190
                },
                //{ 
                //     src: "img/showcase/armada/armada-pgkampanj-orange.png",
                //     orgWidth: 842,
                //     orgHeight: 1190
                // }, 
                //{ 
                //     src: "img/showcase/armada/armada-pgkampanj-green.png",
                //     orgWidth: 842,
                //     orgHeight: 1190
                // }, 
                { 
                    src: "img/showcase/armada/armada-asei.png",
                    orgWidth: 600,
                    orgHeight: 848
                },
                { 
                    src: "img/showcase/armada/armada-temaforelasningar.png",
                    orgWidth: 600,
                    orgHeight: 848
                },
                { 
                    src: "img/showcase/armada/armada-massan.png",
                    orgWidth: 600,
                    orgHeight: 848
                },
                { 
                    src: "img/showcase/armada/armada-pe.png",
                    orgWidth: 600,
                    orgHeight: 848
                },
                //{ 
                //     src: "img/showcase/armada/armada-enova.png",
                //     orgWidth: 600,
                //     orgHeight: 848
                // }, 
                { 
                    src: "img/showcase/armada startup/armadastartup-logos.jpg",
                    orgWidth: 600,
                    orgHeight: 857
                },
                { 
                    src: "img/showcase/armada startup/armadastartup-poster1.png",
                    orgWidth: 600,
                    orgHeight: 857
                },
                { 
                    src: "img/showcase/armada startup/armadastartup-poster2.png",
                    orgWidth: 600,
                    orgHeight: 848
                },
                { 
                    src: "img/showcase/armada startup/armadastartup-poster3.png",
                    orgWidth: 600,
                    orgHeight: 848
                },
                { 
                    src: "img/showcase/armada startup/armadastartup-poster4.png",
                    orgWidth: 600,
                    orgHeight: 848
                },
                { 
                    src: "img/showcase/armada startup/armadastartup-poster5.png",
                    orgWidth: 600,
                    orgHeight: 848
                },
                { 
                    src: "img/showcase/armada startup/armadastartup-poster6.png",
                    orgWidth: 600,
                    orgHeight: 848
                }
            ]
        }
    }

    render() {
        return (
            <Pyramid elements={this.state.elements} />
        );
    }
}