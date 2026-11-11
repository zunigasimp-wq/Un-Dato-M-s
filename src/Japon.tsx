import React from 'react';
import {Easing, interpolate} from 'remotion';

const navy='#101747', teal='#20cbd3', coral='#ff6870', yellow='#ffcb39';
const ease=(t:number,a:number,b:number)=>interpolate(t,[a,b],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.inOut(Easing.cubic)});

function Wrapper({fold=0}:{fold?:number}) {
 return <g transform={`scale(${1-fold*.22} ${1-fold*.12})`}>
  <path d="M-34-47L19-55 34-38 26-21 39 4 23 42-26 39-38 18-26-4-39-24Z" fill="#fff3db"/>
  <path d="M-32-21L30-29 26-21 39 4 31 20-32 23-38 18-26-4Z" fill={coral}/>
  <path d="M19-55L6-33 34-38M-26 39L-8 15 23 42M-39-24L-13-14-26-4" fill="#dac8dd"/>
  <path d="M-6-10l10 8-8 9-11-8Z" fill={yellow}/>
 </g>;
}

export function Bird({time,look,arm,fold,wrapper=true}:{time:number;look:number;arm:number;fold:number;wrapper?:boolean}) {
 const walk=1-ease(time,1.35,2.25);
 const stride=Math.sin(time*10)*walk;
 const wind=Math.sin(time*6)+Math.sin(time*10)*.3;
 const blink=Math.max(.08,1- Math.max(0,1-Math.abs((time%3.6)-2.1)*14));
 const beak= time<2.6? Math.max(0,Math.sin(time*17))*5:0;
 return <g>
  <ellipse cx="0" cy="213" rx="90" ry="12" fill="#101747" opacity=".44"/>
  <path d="M-32 154v48h-17q-9 0-9 8h47v-56" fill={coral} transform={`rotate(${stride*15} -22 154)`}/><path d="M24 154v48h19q9 0 9 8H6v-56" fill={coral} transform={`rotate(${-stride*15} 15 154)`}/>
  <path d="M-65 94Q-93 117-113 110q5 29 57 31Z" fill="#1097b6"/>
  <rect x="37" y="48" width="49" height="95" rx="19" fill={yellow}/>
  <path d="M65 91h21v35q0 17-17 17H53Z" fill="#df8d24"/>
  <path d="M-51 46Q0 15 51 48q30 43 20 99-11 31-71 31t-71-31q-10-58 20-101Z" fill={teal}/>
  <path d="M-50 45l31-7v116q-27 18-53-1-10-66 22-108M50 45l-30-7v116q24 17 50-1 10-66-20-108" fill="#7143b9"/>
  <path d="M-53 48q-13 17-17 45M52 48q14 17 18 45" fill="none" stroke={yellow} strokeWidth="12"/>
  <g transform={`rotate(${arm+wind*2.8+stride*6} -60 78)`}>
   <path d="M-61 71Q-84 75-101 104q-13 21 2 29 13 7 32-13l25-30Z" fill="#17b9c9"/>
   {wrapper&&<g transform={`translate(-99 105) rotate(${-23+wind*7}) scale(.59)`}><Wrapper fold={fold}/></g>}
   <path d="M-107 114q11-9 25-5l-4 15q-19 8-21-10" fill={teal}/>
  </g>
  <path d="M65 77q29 13 32 53 2 18-11 20-13-4-17-17l-19-41Z" fill="#16b5c7" transform={`rotate(${stride*14-14*Math.abs(look)+wind*2} 61 83)`}/>
  <g transform={`translate(${look*11} 0) rotate(${look*8+wind*1.5})`}>
   <path d="M-24-76Q-55-106-33-109q16-1 34 26 0-32 16-30 13 5 0 36Z" fill={teal}/>
   <path d="M-82-12q0-64 78-68 78 0 84 63 4 61-77 70-82 1-85-65" fill={teal}/>
   <path d="M-81 0q21 39 88 36 57-5 73-41Q77 48 3 53-73 53-81 0" fill="#19b8cb"/>
   <ellipse cx={-30+look*10} cy="-12" rx="7" ry={13*blink} fill={navy}/>
   <ellipse cx={31+look*10} cy="-12" rx="7" ry={13*blink} fill={navy}/>
   <path d={`M-17 9Q0-7 17 9Q0 ${26+beak} -17 9Z`} fill={coral}/>
   <path d="M-17 9Q1 14 17 9Q3 24-5 19Z" fill="#c84368"/>
  </g>
 </g>;
}

function Desk() {
 return <g>
  <path d="M-83 12v96m167-96v96M-55 12v77m112-77v77" stroke="#1a2152" strokeWidth="10" strokeLinecap="round"/>
  <path d="M-99 0l21-22H82l18 22-17 15H-83Z" fill={yellow}/>
  <path d="M-83 15H83v14H-83Z" fill="#d78236"/>
 </g>;
}

export function Pupil({rabbit=false,phase,action}:{rabbit?:boolean;phase:number;action:'sweep'|'carry'|'wipe'|'reach'|'watch'|'throw'}) {
 const skin=rabbit?'#f4d9cc':'#fb9b57';
 const motion=Math.sin(phase);
 const throwing=action==='throw';
 const throwProgress=throwing?ease(phase,0,.52):0;
 const throwSettle=throwing?ease(phase,.55,1.55):0;
 const throwArm=19-108*throwProgress+67*throwSettle;
 const sweep=action==='sweep';
 const carry=action==='carry';
 const reach=action==='reach';
 const bend=throwing?-14*throwProgress+21*throwSettle:sweep?12+motion*7:reach?30:carry?-9:action==='wipe'?17+motion*4:motion*2;
 const arm=throwing?throwArm:sweep?motion*19:action==='wipe'?-48+motion*21:reach?36:carry?-56:motion*4;
 return <g>
  <ellipse cx="0" cy="146" rx="62" ry="10" fill="#202761" opacity=".65"/>
  <path d="M-35 84h32v59h-44v-12l12-4Z" fill="#1c214e" transform={`rotate(${carry?motion*15:0} -23 90)`}/>
  <path d="M3 84h32v43l12 4v12H3Z" fill="#303775" transform={`rotate(${carry?-motion*15:0} 23 90)`}/>
  <g transform={`rotate(${bend} 0 85)`}>
   {!rabbit&&<path d="M-25 64Q-78 68-93 36q-15 58 45 66Z" fill="#e57753"/>}
   <path d="M-35 3h69q16 31 17 84H-49Q-50 33-35 3Z" fill={rabbit?'#8b65cc':'#f1e4df'}/>
   <path d="M-14 5L0 26 14 5" fill="none" stroke="#303875" strokeWidth="5"/>
   <path d="M28 26q27 0 26 49-1 10-12 10-12 0-16-13L13 43Z" fill={skin} transform={`rotate(${arm} 25 32)`}/>
   {sweep&&<g transform={`translate(45 65) rotate(${-32+motion*23})`}><path d="M0-37v105" stroke="#d29a52" strokeWidth="8" strokeLinecap="round"/><path d="M-16 64h32l11 23h-54Z" fill={yellow}/><path d="M-19 77h39" stroke="#d68343" strokeWidth="4"/></g>}
   {action==='wipe'&&<path d="M50 59l24-10 23 18-23 12Z" fill={teal} transform={`translate(${motion*20} 0)`}/>}
   {carry&&<g transform="translate(55 61) rotate(19) scale(.55)"><Desk/></g>}
   <g transform={`rotate(${motion*4} 0 -30)`}>
    {rabbit?<g fill={skin}><rect x="-29" y="-108" width="20" height="72" rx="10" transform="rotate(-13 -19 -43)"/><rect x="5" y="-112" width="20" height="75" rx="10" transform="rotate(14 15 -43)"/></g>:<path d="M-45-41l-8-50 41 25 28-1 34-26-1 53Z" fill={skin}/>}
    <path d="M-54-35Q-54-75 0-71q52 1 54 41Q57 3 5 8-51 9-54-35Z" fill={skin}/>
    {!rabbit&&<path d="M-45-22Q-27-23 0-4 30-24 47-22L31 3 0 11-30 3Z" fill="#fff1de"/>}
    <ellipse cx="-18" cy="-34" rx="4.7" ry={Math.abs(Math.sin(phase*.4))>.99?1.6:8} fill={navy}/>
    <ellipse cx="20" cy="-34" rx="4.7" ry={Math.abs(Math.sin(phase*.4))>.99?1.6:8} fill={navy}/>
    <path d="M-7-17H8L0-10Z" fill={navy}/>
   </g>
  </g>
 </g>;
}
