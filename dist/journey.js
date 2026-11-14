function startJourney() {
  if (state.started && state.instrument) return continueJourney();
  chooseInstrument();
}
function chooseInstrument() {
  open(`<div class="eyebrow">YOUR FIRST SMALL STEP</div><h2>What are you curious about?</h2><p class="modal-sub">Choose a beginning, not a lifelong commitment. You can switch anytime.</p><div class="instrument-choices"><button class="instrument-choice" data-choose="violin"><span>🎻</span><strong>Violin</strong><small>6 introductory milestones<br>Listening, rhythm & movement</small></button><button class="instrument-choice" data-choose="piano"><span>🎹</span><strong>Piano</strong><small>4 introductory milestones<br>Keys, pitch & coordination</small></button></div><p class="fine">No instrument required to begin. Guitar, drums, flute, and saxophone are planned for later.</p>`);
  document.querySelectorAll('[data-choose]').forEach(button => button.onclick = () => {
    state.instrument = button.dataset.choose;
    save();
    open(`<div class="eyebrow">A BEGINNING THAT FITS YOUR LIFE</div><h2>Just a few minutes. Just you.</h2><p class="modal-sub">Your first ${state.instrument} lesson starts with one idea and a small exercise. No purchase, song selection, or setup needed.</p><div class="ready-note"><span>01</span><p>Understand something.<br>Try it. Then check what stayed.</p></div><button class="primary" id="beginJourney">Start my first lesson →</button><p class="fine">Early-access prototype · Your progress stays in this browser.</p>`);
    $('#beginJourney').onclick = () => {state.started=true;save();render();continueJourney();};
  });
}
function continueJourney() {
  if (state.instrument === 'piano') pianoLesson(nextPianoLesson());
  else lesson(nextLesson());
}
function homeView() {
  const piano = state.instrument === 'piano';
  const done = piano ? state.pianoDone : state.done;
  const total = piano ? 4 : 6;
  const started = state.started;
  const finished = done.length === total;
  const instrument = piano ? 'Piano' : 'Violin';
  const nextTitle = piano ? pianoTitles[nextPianoLesson()] : titles[nextLesson()];
  main.innerHTML = `<section class="beginning"><div class="eyebrow">ONE BEGINNING. MANY POSSIBILITIES.</div><div class="beginning-layout"><div class="beginning-copy"><span class="early-label">A little room for music.</span><h1>${started?'Welcome back to<br>your beginning.':'The instrument can wait.<br><em>Your beginning doesn’t have to.</em>'}</h1><p class="intro">${started?'One idea. A little practice. Your next step is ready whenever you are.':'Build your musical foundations with your ears, your hands, and things you already have. Start small. Find out what’s possible.'}</p><button class="primary start-button" id="startJourney">${started?(finished?'Revisit my foundations':'Continue my next lesson'):'Find my beginning'} <span>→</span></button><p class="start-caption">${started?instrument+' foundations · '+done.length+' of '+total+' milestones':'Violin & piano · No instrument needed · Free to begin'}</p></div><div class="beginning-art" aria-hidden="true"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><span class="art-note note-one">♪</span><span class="art-note note-two">♬</span>${violin}<span class="art-caption">START WITH CURIOSITY.</span></div></div></section><button class="curiosity-card" id="whyArco"><span class="curiosity-icon">↗</span><span><strong>“Can I really start without an instrument?”</strong><small>Try the idea behind Arco in about a minute.</small></span><span class="curiosity-arrow">→</span></button>${started?`<section class="next-step card"><div><span class="eyebrow">${finished?'YOUR FOUNDATION':'ONE STEP AT A TIME'}</span><h2>${finished?'You’ve made a beginning.':nextTitle}</h2><p class="sub">${finished?'Keep reviewing. Real-instrument technique comes with an instrument and guidance.':'Your next lesson in '+instrument.toLowerCase()+' foundations.'}</p></div><button class="secondary" id="openPath">See my learning path ↗</button></section>`:`<div class="quiet-promise"><span>01 <b>Understand</b></span><i>→</i><span>02 <b>Try it with what you have</b></span><i>→</i><span>03 <b>Check what you learned</b></span></div>`}<div class="home-footnote"><span>A music-school mindset. Room to begin on your terms.</span><button class="link" id="changeInstrument">${started?'Explore another instrument':'Explore the instruments'} ↗</button></div>`;
  $('#startJourney').onclick=startJourney;
  $('#whyArco').onclick=methodTour;
  $('#changeInstrument').onclick=chooseInstrument;
  if($('#openPath'))$('#openPath').onclick=()=>go(piano?'piano':'path');
}
