import React from 'react';
import {COLORS as C} from './percepcion-paleta';

export const Person:React.FC<{x:number,y:number,color:string,scale?:number}>=({x,y,color,scale=1})=><g transform={`translate(${x} ${y}) scale(${scale})`}>
 <ellipse cy="135" rx="110" ry="17" fill={C.shadow}/><path d="M-85 115 Q-83-10 0-10 Q83-10 85 115Z" fill={color}/><path d="M-45 0 Q0 60 45 0" fill={C.paper} opacity=".22"/>
 <rect x="-18" y="-44" width="36" height="55" rx="14" fill={C.orange}/><circle cy="-78" r="55" fill={C.paper}/>
 <path d="M-55-85 Q-65-155 10-145 Q70-145 53-73 L28-100 Q-10-82-55-85" fill={C.shadow}/><circle cx="-18" cy="-75" r="5" fill={C.shadow}/><circle cx="20" cy="-75" r="5" fill={C.shadow}/><path d="M-12-48 Q3-39 18-48" fill="none" stroke={C.shadow} strokeWidth="4" strokeLinecap="round"/>
</g>;
