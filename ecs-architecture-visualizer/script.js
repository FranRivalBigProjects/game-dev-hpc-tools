const res=document.getElementById('res');
function run(){
let txt=(document.getElementById('input').value||'').toLowerCase();
let val=document.getElementById('value').value;
let out='Analysis:\n';

if(txt.includes('ecs')) out+='- ECS architecture pattern\n';
if(txt.includes('loop')) out+='- Game loop timing\n';
if(txt.includes('physics')) out+='- Physics step simulation\n';
if(txt.includes('collision')) out+='- Collision detection logic\n';
if(txt.includes('path')) out+='- Pathfinding algorithm\n';
if(txt.includes('render')) out+='- Rendering pipeline\n';
if(txt.includes('network')) out+='- Networking prediction\n';

if(val){
  out+='- Metric: '+val+'\n';
}

out+='- Analyze performance, timing, and system design\n';

res.innerText=out;
}