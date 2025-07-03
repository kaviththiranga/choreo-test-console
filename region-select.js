document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('message', (event) => {
    if (event.origin === 'https://choreo.dev' || event.origin === 'http://localhost:3002') {
      if (event.data.type === 'checkRecentOrg') {
        const data = localStorage.getItem('recent-org');
        event.source.postMessage({ recentOrg: data }, event.origin);
      }
    }
  });
});
