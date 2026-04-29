/**
 * Figma Plugin UI — ui.ts
 * Handles all DOM interactions and communicates with code.ts via postMessage.
 */

const jsonInput = document.getElementById('json-input') as HTMLTextAreaElement;
const btnImport = document.getElementById('btn-import') as HTMLButtonElement;
const btnClose = document.getElementById('btn-close') as HTMLButtonElement;
const btnClearLog = document.getElementById('btn-clear-log') as HTMLButtonElement;
const toggleVariables = document.getElementById('toggle-variables') as HTMLInputElement;
const toggleComponents = document.getElementById('toggle-components') as HTMLInputElement;
const logSection = document.getElementById('log-section') as HTMLDivElement;
const logBox = document.getElementById('log-box') as HTMLDivElement;
const statsSection = document.getElementById('stats-section') as HTMLDivElement;
const statComponents = document.getElementById('stat-components') as HTMLDivElement;
const statVariants = document.getElementById('stat-variants') as HTMLDivElement;
const statTokens = document.getElementById('stat-tokens') as HTMLDivElement;
const validationBadge = document.getElementById('validation-badge') as HTMLDivElement;
const progressBar = document.getElementById('progress-bar') as HTMLDivElement;
const progressFill = document.getElementById('progress-fill') as HTMLDivElement;

let totalComponents = 0;
let processedComponents = 0;

function addLog(msg: string, type: 'normal' | 'success' | 'error' | 'warning' = 'normal') {
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

function updateProgress(percent: number) {
  progressBar.style.display = 'block';
  progressFill.style.width = `${Math.min(percent, 100)}%`;
}

function validateJSON(json: string): { valid: boolean; error?: string; data?: any } {
  if (!json.trim()) return { valid: false, error: 'Empty input' };
  try {
    const data = JSON.parse(json);
    if (!data.metadata) return { valid: false, error: 'Missing "metadata" field', data };
    if (!data.tokens) return { valid: false, error: 'Missing "tokens" field', data };
    if (!data.components) return { valid: false, error: 'Missing "components" field', data };
    const componentCount = Array.isArray(data.components) ? data.components.length : 0;
    const variantCount = Array.isArray(data.components)
      ? data.components.reduce((sum: number, c: any) => sum + (c.instances?.length ?? 0), 0)
      : 0;
    const tokenCount = data.metadata.totalTokens ?? 0;
    return { valid: true, data: { ...data, _stats: { componentCount, variantCount, tokenCount } } };
  } catch (e) {
    return { valid: false, error: `Invalid JSON: ${(e as Error).message}` };
  }
}

// Validate on input change
jsonInput.addEventListener('input', () => {
  const json = jsonInput.value.trim();
  if (!json) {
    validationBadge.style.display = 'none';
    jsonInput.classList.remove('invalid');
    return;
  }
  const result = validateJSON(json);
  if (result.valid) {
    validationBadge.style.display = 'inline-flex';
    validationBadge.className = 'validation-badge valid';
    validationBadge.textContent = `✓ ${result.data._stats.componentCount} components · ${result.data._stats.variantCount} variants · ${result.data._stats.tokenCount} tokens`;
    jsonInput.classList.remove('invalid');
  } else {
    validationBadge.style.display = 'inline-flex';
    validationBadge.className = 'validation-badge invalid';
    validationBadge.textContent = `✗ ${result.error}`;
    jsonInput.classList.add('invalid');
  }
});

btnImport.addEventListener('click', () => {
  const json = jsonInput.value.trim();
  if (!json) {
    addLog('❌ Please paste the design system JSON first.', 'error');
    return;
  }

  const validation = validateJSON(json);
  if (!validation.valid) {
    addLog(`❌ ${validation.error}`, 'error');
    return;
  }

  logBox.innerHTML = '';
  statsSection.style.display = 'none';
  setButtonState(true);
  updateProgress(0);

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

btnClearLog.addEventListener('click', () => {
  logBox.innerHTML = '';
});

window.onmessage = (event: MessageEvent) => {
  const msg = event.data.pluginMessage;
  if (!msg) return;

  if (msg.type === 'log') {
    let logType: 'normal' | 'success' | 'error' | 'warning' = 'normal';
    const payload = String(msg.payload);
    if (payload.includes('✓') || payload.includes('🎉')) logType = 'success';
    else if (payload.includes('⚠️') || payload.includes('Skipped')) logType = 'warning';
    else if (payload.includes('❌')) logType = 'error';
    addLog(payload, logType);

    // Estimate progress based on log messages
    if (payload.includes('Creating')) {
      processedComponents++;
      const total = totalComponents || 1;
      updateProgress(Math.min(80 + (processedComponents / total) * 20, 100));
    }
  }

  if (msg.type === 'done') {
    setButtonState(false);
    statComponents.textContent = String(msg.payload.components);
    statTokens.textContent = String(msg.payload.tokens);
    if (msg.payload.variants) statVariants.textContent = String(msg.payload.variants);
    statsSection.style.display = 'flex';
    updateProgress(100);
    addLog('🎉 Import complete!', 'success');
  }

  if (msg.type === 'error') {
    setButtonState(false);
    addLog(`❌ ${msg.payload}`, 'error');
    updateProgress(0);
  }
};