import { About } from '../About';
import { Documentation } from '../InnerPart/Documentation';
import { InnerMain } from '../InnerPart/InnerMain';
import { News } from '../InnerPart/News';
import { Projects } from '../InnerPart/Projects';
import { Staff } from '../InnerPart/Staff';
import StockholdersDocs from '../InnerPart/StockholdersDocs';
import { Landing } from '../Landing';
import { Services } from '../Services';
import { Solutions } from '../Solutions';
import { Support } from '../Support';
import { Vacancies } from '../Vacancies';

export const outerRoutes = [
  { path: '/', component: <Landing /> },
  { path: '/about', component: <About /> },
  { path: '/services', component: <Services /> },
  { path: '/solutions', component: <Solutions /> },
  { path: '/support', component: <Support /> },
  { path: '/vacancies', component: <Vacancies /> },
];

export const innerRoutes = [
  { path: '/innerMain', component: <InnerMain /> },
  { path: '/staff', component: <Staff /> },
  { path: '/projects', component: <Projects /> },
  { path: '/documentation', component: <Documentation /> },
  { path: '/news', component: <News /> },
  { path: '/stockholders-docs', component: <StockholdersDocs /> },
];
