/**
 * Figma Plugin UI — ui.ts
 * Handles all DOM interactions and communicates with code.ts via postMessage.
 */

const jsonInput = document.getElementById('json-input') as HTMLTextAreaElement;
const btnImport = document.getElementById('btn-import') as HTMLButtonElement;
const btnClose = document.getElementById('btn-close') as HTMLButtonElement;
const toggleVariables = document.getElementById('toggle-variables') as HTMLInputElement;
const toggleComponents = document.getElementById('toggle-components') as HTMLInputElement;
const logSection = document.getElementById('log-section') as HTMLDivElement;
const logBox = document.getElementById('log-box') as HTMLDivElement;
const statsSection = document.getElementById('stats-section') as HTMLDivElement;
const statComponents = document.getElementById('stat-components') as HTMLDivElement;
const statTokens = document.getElementById('stat-tokens') as HTMLDivElement;

function addLog(msg: string, type: 'normal' | 'success' | 'error' = 'normal') {
  logSection.style.display = 'block';
  const line = document.createElement('div');
  line.className = `log-line ${type}`;
  line.textContent = msg;
  logBox.appendChild(line);
  logBox.scrollTop = logBox.scrollHeight;
}

function setButtonState(importing: boolean) {
  btnImport.disabled = importing;
  btnImport.textContent = importing ? '⏳ Importing…' : '⚡ Import Design System';
}

btnImport.addEventListener('click', () => {
  const json = jsonInput.value.trim();
  if (!json) {
    addLog('❌ Please paste the design system JSON first.', 'error');
    return;
  }

  try {
    JSON.parse(json); // validate
  } catch {
    addLog('❌ Invalid JSON — please check the pasted content.', 'error');
    return;
  }

  logBox.innerHTML = '';
  statsSection.style.display = 'none';
  setButtonState(true);

  parent.postMessage(
    {
      pluginMessage: {
        type: 'import',
        json,
        createVariables: toggleVariables.checked,
        createComponents: toggleComponents.checked,
      },
    },
    '*'
  );
});

btnClose.addEventListener('click', () => {
  parent.postMessage({ pluginMessage: { type: 'close' } }, '*');
});

window.onmessage = (event: MessageEvent) => {
  const msg = event.data.pluginMessage;
  if (!msg) return;

  if (msg.type === 'log') {
    addLog(msg.payload);
  }

  if (msg.type === 'done') {
    setButtonState(false);
    statComponents.textContent = String(msg.payload.components);
    statTokens.textContent = String(msg.payload.tokens);
    statsSection.style.display = 'flex';
    addLog('🎉 Import complete!', 'success');
  }

  if (msg.type === 'error') {
    setButtonState(false);
    addLog(`❌ ${msg.payload}`, 'error');
  }
};
