function switchTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }
  
  // Example usage: Switch to dark theme
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      switchTheme('default');
    } else {
      switchTheme('dark');
    }
  });
  