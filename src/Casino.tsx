import React from 'react';
import * as THREE from 'three';
import {RoundedBox} from '@react-three/drei';
import {useCurrentFrame} from 'remotion';
import {COLORS as C} from './casino-paleta';

type V=[number,number,number];
const B:React.FC<{p?:V,s:V,c?:string,r?:V}>=({p=[0,0,0],s,c=C.navy,r=[0,0,0]})=><mesh position={p} rotation={r} castShadow receiveShadow><boxGeometry args={s}/><meshStandardMaterial color={c} roughness={.68}/></mesh>;
const S:React.FC<{p:V,r?:number,c?:string}>=({p,r=.2,c=C.ivory})=><mesh position={p} castShadow><sphereGeometry args={[r,24,16]}/><meshStandardMaterial color={c} roughness={.4}/></mesh>;
const Rod:React.FC<{a:V,b:V,r?:number,c?:string}>=({a,b,r=.04,c=C.gold})=>{
 const av=new THREE.Vector3(...a),bv=new THREE.Vector3(...b),d=bv.clone().sub(av);const q=new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),d.clone().normalize());
 return <mesh position={av.add(bv).multiplyScalar(.5)} quaternion={q} castShadow><cylinderGeometry args={[r,r,d.length(),12]}/><meshStandardMaterial color={c} metalness={.2} roughness={.5}/></mesh>;
};

export const Person:React.FC<{p?:V,turn?:number,c?:string,action?:string,progress?:number,scale?:number}>=({p=[0,0,0],turn=0,c=C.rose,action='idle',progress=0,scale=1})=>{
 const f=useCurrentFrame();const walk=action==='walk'?Math.sin(f*.16):0;const seated=action==='sit';const base=seated?-.35:0;
 return <group position={[p[0],p[1]+(action==='walk'?Math.abs(walk)*.035:0),p[2]]} rotation={[0,turn,0]} scale={scale}>
  <group position={[0,base,0]}>
   <RoundedBox args={[.64,.76,.37]} radius={.1} position={[0,1.05,0]} castShadow><meshStandardMaterial color={c}/></RoundedBox>
   <B p={[0,1.45,0]} s={[.15,.16,.15]} c={C.ivory}/><S p={[0,1.75,0]} r={.265}/>
   <mesh position={[0,1.91,-.025]}><sphereGeometry args={[.27,24,16,0,Math.PI*2,0,Math.PI*.43]}/><meshStandardMaterial color={C.black}/></mesh>
   <S p={[-.08,1.77,.245]} r={.019} c={C.black}/><S p={[.08,1.77,.245]} r={.019} c={C.black}/>
   <B p={[0,1.18,.19]} s={[.055,.26,.02]} c={C.gold}/>
   {[-1,1].map((side,i)=><group key={side} position={[side*.38,1.34,0]} rotation={[action==='push'?-progress*1.3:action==='celebrate'?-2.5*progress:walk*.5*side,0,side*(action==='celebrate'?.45:.12)]}>
    <Rod a={[0,0,0]} b={[0,-.36,0]} r={.085} c={c}/><group position={[0,-.36,0]} rotation={[action==='think'&&i===1?-2.2:-.25,0,0]}><Rod a={[0,0,0]} b={[0,-.32,0]} r={.075} c={c}/><S p={[0,-.34,0]} r={.082}/></group>
   </group>)}
   {[-1,1].map(side=><group key={side} position={[side*.15,.7,0]} rotation={[seated?-Math.PI/2:walk*.5*side,0,0]}>
    <Rod a={[0,0,0]} b={[0,-.36,0]} r={.09} c={C.black}/><group position={[0,-.36,0]} rotation={[seated?Math.PI/2:0,0,0]}><Rod a={[0,0,0]} b={[0,-.32,0]} r={.08} c={C.black}/><B p={[0,-.34,.09]} s={[.2,.12,.36]} c={C.black}/></group>
   </group>)}
  </group>
 </group>;
};
