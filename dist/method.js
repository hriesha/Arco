function methodTour(step=0) {
  const steps=['Understand','Try it at home','Check what stayed'];
  const progress=`<div class="tour-progress" aria-label="Step ${step+1} of 3">${steps.map((name,i)=>`<span class="${i===step?'selected':''}">${i+1} · ${name}</span>`).join('')}</div>`;
  if(step===0){
    open(`<div class="eyebrow">THE IDEA BEHIND ARCO</div>${progress}<h2>Your first tool is attention.</h2><p class="modal-sub">A steady pulse has equal time between beats. Listen to four beats. You can start learning this before owning an instrument.</p><div class="method-visual" aria-hidden="true">● ─ ● ─ ● ─ ●</div><button class="secondary" id="methodListen">▶ Hear a steady pulse</button><div class="modal-actions"><button class="primary" id="methodNext" disabled>Now try it away from the screen →</button></div><p class="fine">This is a tiny example of our approach, not a complete music lesson.</p>`);
    let timer;
    cleanup=()=>{clearTimeout(timer);if(audio)audio.suspend();};
    $('#methodListen').onclick=()=>{for(let i=0;i<4;i++)tone(i?660:880,.12,i*.6);$('#methodListen').disabled=true;timer=setTimeout(()=>{if($('#methodNext')){$('#methodNext').disabled=false;$('#methodNext').focus();}},2100);};
    $('#methodNext').onclick=()=>methodTour(1);
  }else if(step===1){
    open(`<div class="eyebrow">A TABLETOP BECOMES A PRACTICE SPACE</div>${progress}<h2>Take the idea into your hands.</h2><p class="modal-sub">Rest your arm comfortably. Tap a finger lightly on your table four times, leaving the same gap between each tap. No table? Tap your other palm.</p><div class="method-visual" aria-hidden="true">1 &nbsp; 2 &nbsp; 3 &nbsp; 4</div><label class="checkline"><input type="checkbox" id="methodTried"> I tried four gentle, evenly spaced taps.</label><p class="fine">This practices a rhythm idea. It doesn’t reproduce an instrument’s resistance or certify technique. Stop if anything feels uncomfortable.</p><div class="modal-actions"><button class="secondary" id="methodBack">← Listen again</button><button class="primary" id="methodNext" disabled>See what stayed →</button></div>`);
    $('#methodTried').onchange=e=>$('#methodNext').disabled=!e.target.checked;
    $('#methodBack').onclick=()=>methodTour(0);
    $('#methodNext').onclick=()=>methodTour(2);
  }else{
    open(`<div class="eyebrow">SMALL CHECKS, BEFORE BIG CLAIMS</div>${progress}<h2>What makes the pulse steady?</h2><div class="method-answers"><button class="secondary" data-pulse="no">Tapping harder each time</button><button class="secondary" data-pulse="yes">Keeping equal gaps between taps</button><button class="secondary" data-pulse="no">Gradually speeding up</button></div><div class="feedback" role="status" id="methodFeedback"></div>`);
    document.querySelectorAll('[data-pulse]').forEach(b=>b.onclick=()=>{
      if(b.dataset.pulse==='no'){$('#methodFeedback').textContent='Think about the space between the beats. Try again.';return;}
      document.querySelectorAll('[data-pulse]').forEach(x=>x.disabled=true);
      $('#methodFeedback').innerHTML=`<strong>Exactly. Understand it. Try it. Recall it.</strong><p>That’s the approach: foundations before songs, practical activities before a purchase, and checks that reveal what you remember. Later, a real instrument helps you discover what transfers.</p><button class="primary" id="methodStart">Find my beginning →</button><p class="fine">Our longer-term vision includes introductory experiences with partner music schools. No partnerships or free places are confirmed yet.</p>`;
      $('#methodStart').onclick=chooseInstrument;
    });
  }
}
