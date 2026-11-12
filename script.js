
(function(){
 const company='GUENNOUN NET';
 const url=location.protocol==='http:'||location.protocol==='https:'?location.href.split('#')[0]:'https://www.guennoungroup.com';
 const vcard=['BEGIN:VCARD','VERSION:3.0','FN:'+company,'ORG:'+company,'TITLE:Importations des Équipements et Produits Automobile','TEL;TYPE=CELL:+212699680772','EMAIL;TYPE=WORK:guennoun.net@gmail.com','EMAIL;TYPE=WORK:info.guennoun.net@gmail.com','URL:https://www.guennoungroup.com','ADR;TYPE=WORK:;;53 Boulevard Fouarat;Casablanca;;;Maroc','NOTE:Hay Mohammadi, Casablanca','END:VCARD'].join('\r\n');
 let toastTimer;
 function toast(message){const el=document.getElementById('toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2900)}
 document.getElementById('save').addEventListener('click',()=>{const blob=new Blob([vcard],{type:'text/vcard;charset=utf-8'});const a=document.createElement('a');const link=URL.createObjectURL(blob);a.href=link;a.download='GUENNOUN-NET.vcf';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(link),1500);toast('Contact prêt à être enregistré')});
 document.getElementById('share').addEventListener('click',async()=>{try{if(navigator.share){await navigator.share({title:company,text:'Carte de visite digitale — '+company,url});return}if(navigator.clipboard&&location.protocol!=='file:'){await navigator.clipboard.writeText(url);toast('Lien copié !');return}const a=document.createElement('textarea');a.value=url;document.body.append(a);a.select();document.execCommand('copy');a.remove();toast('Lien copié !')}catch(e){if(e.name!=='AbortError')toast('Impossible de partager automatiquement')}});
 document.getElementById('qr').addEventListener('click',()=>{const panel=document.getElementById('qrPanel');const visible=panel.classList.toggle('visible');if(visible){document.getElementById('qrImage').src='https://api.qrserver.com/v1/create-qr-code/?size=380x380&margin=12&data='+encodeURIComponent(url);document.getElementById('qrHint').textContent=location.protocol==='file:'?'Aperçu local : le QR mène au site de l’entreprise. Publiez ce fichier en ligne pour générer un QR vers la carte.':'Le QR utilise l’adresse de cette page.'}});
})();


