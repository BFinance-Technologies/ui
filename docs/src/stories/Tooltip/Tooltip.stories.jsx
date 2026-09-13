import React from 'react';
import { Tooltip } from '@bfinance/ui';

const InfoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="7" fill="white"/>
    <path d="M12 19C8.1339 19 5 15.8661 5 12C5 8.1339 8.1339 5 12 5C15.8661 5 19 8.1339 19 12C19 15.8661 15.8661 19 12 19ZM11.3 11.3V15.5H12.7V11.3H11.3ZM11.3 8.5V9.9H12.7V8.5H11.3Z" fill="currentColor"/>
  </svg>
);

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    tip: {
      control: { type: 'select' },
      options: [
        'bottomLeft',
        'bottomCenter',
        'bottomRight',
        'topLeft',
        'topCenter',
        'topRight',
        'leftSide',
        'rightSide',
      ],
    },
  },
};

export const SizeVariants = () => {
  const sizes = ['sm', 'md', 'lg'];
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '100px' }}>
      {sizes.map((s) => (
        <div key={s} style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
          <Tooltip size={s} tip="topCenter" text={s === 'lg' ? 'Long description for large tooltip' : 'Tooltip text' } headline={s === 'lg' ? 'Tooltip headline' : ''}>
            <InfoIcon/>
          </Tooltip>
          <span style={{ fontSize: 12, color: '#666' }}>{s}</span>
        </div>
      ))}
    </div>
  );
};

export const TipPositions = () => {
  const tips = [
    'topLeft',
    'topCenter',
    'topRight',
    'leftSide',
    'rightSide',
    'bottomLeft',
    'bottomCenter',
    'bottomRight',
 
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 30 }}>
      {tips.map((t) => (
        <div key={t} style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', width: 240 }}>
          <Tooltip tip={t} size="md" text={`Tip: ${t}`} >
            <InfoIcon/>
          </Tooltip>
          <span style={{ fontSize: 12, color: '#666', textAlign: 'center' }}>{t}</span>
        </div>
      ))}
    </div>
  );
};

