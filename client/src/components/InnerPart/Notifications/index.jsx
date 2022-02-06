import './style.css';
import VisitorsSearch from './components/VisitorsSearch'
import ServiceRequest from './components/ServiceRequest'
import Question from './components/NotifQuestion'
import Response from './components/NotifResponse'

import texts from './texts.json';
import DetectLanguage from '../../../functions/detectLang';
import { useState } from 'react';

const lang = DetectLanguage();

export const Notifications = () => {
  const [type, setType] = useState('service-request');
  return (
    <div className="notifications">
      <VisitorsSearch />

      <div className='notification-info'>
        <div className='notifications-container notification-type'>
          <button className='type service-request' onClick={() => {setType('service-request')}}>{texts['service-request'][lang]}</button>
          |
          <button className='type question' onClick={() => {setType('question')}}>{texts['questions'][lang]}</button>
          |
          <button className='type response' onClick={() => {setType('response')}}>{texts['responses'][lang]}</button>
        </div>

        {type === 'service-request' ? <ServiceRequest /> : type === 'question' ? <Question /> : <Response />}
      </div>
    </div>
  )
}
