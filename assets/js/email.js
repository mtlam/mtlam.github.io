// Turns the reversed addresses from _includes/email.html into working mailto links.
document.querySelectorAll('a.email[data-rev]').forEach(a => {
  const addr = [...a.dataset.rev].reverse().join('');
  a.href = 'mailto:' + addr;
  const rev = a.querySelector('.rev');
  if (rev) rev.replaceWith(addr);
});
