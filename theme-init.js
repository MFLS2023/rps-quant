(() => {
  const theme = localStorage.getItem('rps_theme') === 'light' ? 'light' : 'dark'
  document.documentElement.dataset.theme = theme
  document.documentElement.classList.toggle('theme-light', theme === 'light')
})()
