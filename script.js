'use strict';
// Démonstration locale : aucune requête réseau n'est déclenchée par les interactions.
const $ = id => document.getElementById(id);
let reached = 1;
let liked = false;
const demoEvent = {utilisateur:'Max37',action:'like',contenu:'baskets_2026',ville:'Tours',publication:1842};
const jsonData = {id:1042,pseudo:'Max37',age:15,ville:'Tours',historique:['basket','baskets','concert'],dernier_evenement:{action:'like',contenu:'baskets_2026',publication:1842},publicite_ciblee:true,partage_partenaires:true};
const xmlText = `<transmission>\n  <destinataire>PublicitePlus</destinataire>\n  <utilisateur>\n    <pseudo>Max37</pseudo>\n    <ville>Tours</ville>\n    <interet>baskets</interet>\n  </utilisateur>\n  <autorisation>false</autorisation>\n</transmission>`;
$('jsonPreview').textContent=JSON.stringify(jsonData,null,2);
$('xmlPreview').textContent=xmlText;
function render(){for(let i=2;i<=5;i++)$('stage'+i).hidden=i>reached;$('progressText').textContent=(liked?reached:0)+' / 5 indices';$('bar').style.width=((liked?reached:0)/5*100)+'%';}
$('likeBtn').addEventListener('click',()=>{if(liked)return;liked=true;$('likeBtn').textContent='♥ Publication aimée';$('likeBtn').classList.add('liked');$('likeCount').textContent='129 J’aime';$('eventCode').textContent=JSON.stringify(demoEvent,null,2);$('eventBox').hidden=false;render();});
document.querySelectorAll('[data-next]').forEach(button=>button.addEventListener('click',()=>{if(!liked)return;const n=Number(button.dataset.next);reached=Math.max(reached,n);render();$('stage'+n).scrollIntoView({behavior:'smooth',block:'start'});}));
$('reset').addEventListener('click',()=>{reached=1;liked=false;$('likeBtn').textContent='♡ J’aime cette publication';$('likeBtn').classList.remove('liked');$('likeCount').textContent='128 J’aime';$('eventBox').hidden=true;render();window.scrollTo({top:0,behavior:'smooth'});});
render();
