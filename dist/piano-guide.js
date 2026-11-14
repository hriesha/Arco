function pianoIntroduction(){
  open(`<div class="eyebrow">PIANO · A GUIDED FIRST LESSON</div><h2>Three notes. One useful pattern.</h2><p class="modal-sub">Learn to locate C, D, and E, then check how direction changes pitch. Follow the outlined key; the purple key shows your last selection.</p><div class="piano-goal"><span id="guideStep">STEP 1 OF 4</span><h3 id="guideTitle">Find C: your first landmark.</h3><p id="guideDetail">Look for two black keys together. C is the white key immediately to their left. Play the lower C.</p></div>${pianoKeyboard(true)}<div class="feedback" id="pianoFeedback" role="status">Select the outlined C key. You can also press A on your computer keyboard.</div><div id="pianoActions"></div><p class="fine">Explore by touch, click, or computer keys A S D F G H J K. These synthesized reference tones teach note locations and pitch relationships, not weighted-key technique.</p>`);
  let step=0,ready=false;
  const steps=[
    {key:0,title:'Find C: your first landmark.',detail:'Look for two black keys together. C is the white key immediately to their left. Play the lower C.'},
    {key:1,title:'Move one white key right to D.',detail:'D sits between the two black keys. Play D and notice that it sounds higher than C.'},
    {key:2,title:'Move one more white key right to E.',detail:'E is immediately to the right of the group of two black keys. The three notes you have found are C, D, E.'},
    {key:7,title:'Find the next C.',detail:'Move to the far-right white key. It is also called C, one octave above your first C. The letter names repeat.'}
  ];
  function showStep(){
    document.querySelectorAll('[data-key]').forEach(b=>{const target=+b.dataset.key===steps[step].key;b.classList.toggle('target-key',target);if(target)b.setAttribute('data-hint','Next');else b.removeAttribute('data-hint');});
    $('#guideStep').textContent=`STEP ${step+1} OF 4`;
    $('#guideTitle').textContent=steps[step].title;
    $('#guideDetail').textContent=steps[step].detail;
  }
  showStep();
  wirePiano(i=>{
    const note=pianoNotes[i][0]+(i===7?'5':'4');
    if(ready){$('#pianoFeedback').textContent=`Selected ${note}. Compare the two C notes, then answer the question below.`;return;}
    const target=steps[step].key;
    if(i!==target){$('#pianoFeedback').textContent=`You selected ${note}. ${i>target?'Move left':'Move right'} to find ${pianoNotes[target][0]}${target===7?'5':'4'}. The outlined key is your next step.`;return;}
    if(step<3){step++;showStep();$('#pianoFeedback').textContent=`Yes, that was ${note}. Now ${steps[step].title.toLowerCase()}`;return;}
    ready=true;document.querySelectorAll('[data-key]').forEach(b=>{b.classList.remove('target-key');b.removeAttribute('data-hint');});
    $('#guideStep').textContent='PUT THE IDEA INTO WORDS';$('#guideTitle').textContent='Same letter. Different height.';$('#guideDetail').textContent='Play the leftmost C and the rightmost C again. Listen to how they differ.';
    $('#pianoFeedback').textContent='You located C, D, E, and the next C. Now check the pitch relationship.';
    $('#pianoActions').innerHTML=`<div class="piano-question"><h3>Compared with the leftmost C, the rightmost C sounds…</h3><div class="choices"><button data-pitch-answer="lower">Lower</button><button data-pitch-answer="higher">Higher</button></div><div class="feedback" id="pitchFeedback" role="status"></div></div>`;
    document.querySelectorAll('[data-pitch-answer]').forEach(b=>b.onclick=()=>{
      if(b.dataset.pitchAnswer!=='higher'){$('#pitchFeedback').textContent='Listen to both C notes again. Pitch rises as you move right on the keyboard. Try again.';return;}
      document.querySelectorAll('[data-pitch-answer]').forEach(x=>x.disabled=true);
      $('#pitchFeedback').innerHTML='Exactly. Moving right raises the pitch. The next C is an octave higher.<div class="modal-actions"><button class="primary" id="savePiano">Save this milestone →</button></div>';
      $('#savePiano').onclick=()=>completePiano(0);
    });
  });
}
