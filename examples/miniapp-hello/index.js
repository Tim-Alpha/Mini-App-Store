// Simple mini-app bundle entry point (JS)
function render(root, platform) {
  const el = document.createElement('div');
  el.innerText = 'Hello from Mini-App (web demo)';
  const btn = document.createElement('button');
  btn.innerText = 'Get Profile';
  btn.onclick = async () => {
    const user = await platform.user.getProfile();
    alert('User: ' + user.name);
  };
  el.appendChild(btn);
  root.appendChild(el);
}

if (typeof window !== 'undefined') {
  const root = document.getElementById('miniapp-root') || document.body;
  render(root, window.__miniapp_platform__);
}

module.exports = { render };
