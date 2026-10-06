// Music box: players load only when someone presses Play, so the page stays
// small and no third-party content loads until it's wanted.
(() => {
  const songs = [...document.querySelectorAll('.song')];
  const cssColor = name => getComputedStyle(document.documentElement).getPropertyValue(name).trim().replace('#', '');
  const accent = () => cssColor('--pen');

  function embed(li) {
    const d = li.dataset, f = document.createElement('iframe');
    f.loading = 'lazy';
    f.allow = 'autoplay; encrypted-media; picture-in-picture';
    if (d.youtube) {
      f.src = `https://www.youtube-nocookie.com/embed/${d.youtube}?autoplay=1`;
      f.className = 'video';
      f.allowFullscreen = true;
    } else if (d.soundcloud) {
      f.src = 'https://w.soundcloud.com/player/?url=' +
        encodeURIComponent(`https://api.soundcloud.com/tracks/${d.soundcloud}`) +
        `&color=%23${accent()}&auto_play=true&visual=false&show_comments=false`;
      f.height = 166;
    } else {
      const parts = [d.bandcampAlbum && `album=${d.bandcampAlbum}`, d.bandcampTrack && `track=${d.bandcampTrack}`].filter(Boolean);
      f.src = `https://bandcamp.com/EmbeddedPlayer/${parts.join('/')}/size=large/bgcol=${cssColor('--paper')}/linkcol=${accent()}/tracklist=false/artwork=small/transparent=true/`;
      f.height = 120;
    }
    f.title = 'Player for ' + li.querySelector('.name').textContent;
    return f;
  }

  function toggle(li, open) {
    const btn = li.querySelector('button.play'), slot = li.querySelector('.player');
    open = open ?? !slot.firstChild;
    slot.replaceChildren(...(open ? [embed(li)] : []));
    btn.textContent = open ? 'Close' : 'Play';
    btn.setAttribute('aria-expanded', open);
  }

  songs.forEach(li => {
    const btn = li.querySelector('button.play');
    if (!btn) return;
    btn.hidden = false;
    btn.addEventListener('click', () => toggle(li));
  });

  const playable = songs.filter(li => li.querySelector('button.play'));
  const shuffle = document.getElementById('mb-shuffle');
  if (shuffle && playable.length) {
    shuffle.hidden = false;
    shuffle.addEventListener('click', () => {
      playable.forEach(li => li.querySelector('.player').firstChild && toggle(li, false));
      const li = playable[Math.floor(Math.random() * playable.length)];
      toggle(li, true);
      li.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
      li.querySelector('button.play').focus({ preventScroll: true });
    });
  }
})();
