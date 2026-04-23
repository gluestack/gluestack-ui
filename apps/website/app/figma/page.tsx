'use client';

import React, { useState, useCallback } from 'react';
import { buildDesignSystemExport } from '@/lib/figma/design-system-exporter';
import { COMPONENT_REGISTRY } from '@/lib/figma/component-registry';

type ExportStatus = 'idle' | 'extracting' | 'done' | 'error';

export default function FigmaExportPage() {
  const [status, setStatus] = useState<ExportStatus>('idle');
  const [log, setLog] = useState<string[]>([]);
  const [stats, setStats] = useState<{ components: number; tokens: number; variants: number } | null>(null);
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');

  const addLog = useCallback((msg: string) => {
    setLog((prev) => [...prev, `${new Date().toLocaleTimeString()} — ${msg}`]);
  }, []);

  const runExport = useCallback(async (action: 'clipboard' | 'download') => {
    setStatus('extracting');
    setLog([]);
    setStats(null);

    try {
      addLog('🔍 Reading CSS variables from DOM…');
      await new Promise((r) => setTimeout(r, 300));

      addLog('📦 Building component registry…');
      await new Promise((r) => setTimeout(r, 200));

      addLog('🎨 Extracting design tokens (colors, spacing, typography)…');
      await new Promise((r) => setTimeout(r, 200));

      addLog('🧩 Generating component + variant definitions…');
      const payload = buildDesignSystemExport(colorMode);
      await new Promise((r) => setTimeout(r, 300));

      const totalVariants = payload.components.reduce(
        (sum, c) => sum + c.instances.length, 0
      );
      addLog(`✅ ${payload.metadata.totalComponents} components · ${totalVariants} variant instances · ${payload.metadata.totalTokens} tokens`);

      setStats({
        components: payload.metadata.totalComponents,
        tokens: payload.metadata.totalTokens,
        variants: totalVariants,
      });

      const json = JSON.stringify(payload, null, 2);

      if (action === 'clipboard') {
        await navigator.clipboard.writeText(json);
        addLog('📋 Copied to clipboard — paste into the Figma plugin!');
      } else {
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `gluestack-design-system-${colorMode}-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
        addLog('💾 JSON file downloaded.');
      }

      setStatus('done');
    } catch (err) {
      addLog(`❌ Error: ${err instanceof Error ? err.message : String(err)}`);
      setStatus('error');
    }
  }, [colorMode, addLog]);

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.logo}>
          <span style={styles.logoDot} />
          <span style={styles.logoText}>Gluestack → Figma</span>
        </div>
        <span style={styles.version}>v2.0 · Design System Export</span>
      </div>

      <div style={styles.content}>
        {/* Left Panel */}
        <div style={styles.leftPanel}>
          <h1 style={styles.title}>Export Design System</h1>
          <p style={styles.subtitle}>
            Generates a structured JSON containing all Gluestack components,
            variants, and design tokens — ready to import into the Figma plugin.
          </p>

          {/* Color Mode Toggle */}
          <div style={styles.section}>
            <label style={styles.label}>Color Mode</label>
            <div style={styles.toggle}>
              {(['light', 'dark'] as const).map((mode) => (
                <button
                  key={mode}
                  style={{
                    ...styles.toggleBtn,
                    ...(colorMode === mode ? styles.toggleBtnActive : {}),
                  }}
                  onClick={() => setColorMode(mode)}
                >
                  {mode === 'light' ? '☀️ Light' : '🌙 Dark'}
                </button>
              ))}
            </div>
          </div>

          {/* Export Buttons */}
          <div style={styles.section}>
            <label style={styles.label}>Export</label>
            <div style={styles.btnRow}>
              <button
                id="btn-copy-clipboard"
                style={{
                  ...styles.primaryBtn,
                  ...(status === 'extracting' ? styles.btnDisabled : {}),
                }}
                onClick={() => runExport('clipboard')}
                disabled={status === 'extracting'}
              >
                {status === 'extracting' ? '⏳ Extracting…' : '📋 Copy to Clipboard'}
              </button>
              <button
                id="btn-download-json"
                style={{
                  ...styles.secondaryBtn,
                  ...(status === 'extracting' ? styles.btnDisabled : {}),
                }}
                onClick={() => runExport('download')}
                disabled={status === 'extracting'}
              >
                💾 Download JSON
              </button>
            </div>
          </div>

          {/* Stats */}
          {stats && (
            <div style={styles.statsGrid}>
              <StatCard label="Components" value={stats.components} emoji="🧩" />
              <StatCard label="Variant Instances" value={stats.variants} emoji="🎨" />
              <StatCard label="Tokens" value={stats.tokens} emoji="🔑" />
            </div>
          )}

          {/* Progress Log */}
          {log.length > 0 && (
            <div style={styles.section}>
              <label style={styles.label}>Progress</label>
              <div style={styles.logBox}>
                {log.map((line, i) => (
                  <div key={i} style={styles.logLine}>{line}</div>
                ))}
              </div>
            </div>
          )}

          {/* Instructions */}
          <div style={styles.instructions}>
            <h3 style={styles.instructionsTitle}>How to use</h3>
            <ol style={styles.instructionsList}>
              <li>Click <strong>Copy to Clipboard</strong></li>
              <li>Open Figma → Plugins → <em>Gluestack Design System</em></li>
              <li>Paste JSON → click <strong>Import</strong></li>
              <li>Toggle <em>Create Variables</em> and <em>Create Components</em></li>
            </ol>
          </div>
        </div>

        {/* Right Panel — Component Manifest */}
        <div style={styles.rightPanel}>
          <h2 style={styles.manifestTitle}>Component Manifest</h2>
          <p style={styles.manifestSubtitle}>{COMPONENT_REGISTRY.length} components registered</p>
          <div style={styles.componentGrid}>
            {COMPONENT_REGISTRY.map((comp) => {
              const totalVariants = comp.variants.reduce(
                (acc, v) => acc * v.values.length,
                1
              );
              return (
                <div key={comp.name} style={styles.componentCard}>
                  <div style={styles.componentName}>{comp.name}</div>
                  <div style={styles.componentMeta}>
                    {comp.variants.length > 0
                      ? `${totalVariants} variants`
                      : 'no variants'}{' '}
                    · {comp.subParts.length} sub-parts
                  </div>
                  {comp.variants.map((v) => (
                    <div key={v.name} style={styles.variantRow}>
                      <span style={styles.variantKey}>{v.name}</span>
                      <span style={styles.variantValues}>{v.values.join(', ')}</span>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, emoji }: { label: string; value: number; emoji: string }) {
  return (
    <div style={styles.statCard}>
      <div style={styles.statEmoji}>{emoji}</div>
      <div style={styles.statValue}>{value}</div>
      <div style={styles.statLabel}>{label}</div>
    </div>
  );
}

// ─── Inline styles (no Tailwind dependency for this tool page) ───────────────

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
    color: '#f8fafc',
    fontFamily: 'Inter, system-ui, sans-serif',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 32px',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    backdropFilter: 'blur(12px)',
    background: 'rgba(15,23,42,0.8)',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  logo: { display: 'flex', alignItems: 'center', gap: 10 },
  logoDot: {
    width: 10, height: 10,
    background: 'linear-gradient(135deg,#6366f1,#a855f7)',
    borderRadius: '50%',
    boxShadow: '0 0 12px #6366f1',
  },
  logoText: { fontWeight: 700, fontSize: 16, letterSpacing: '-0.02em' },
  version: { fontSize: 12, color: '#64748b' },
  content: {
    display: 'flex',
    flex: 1,
    gap: 0,
    maxWidth: 1400,
    margin: '0 auto',
    width: '100%',
    padding: '32px',
    gap: 32,
  } as React.CSSProperties,
  leftPanel: { flex: '0 0 420px', display: 'flex', flexDirection: 'column', gap: 24 },
  rightPanel: {
    flex: 1,
    background: 'rgba(255,255,255,0.03)',
    borderRadius: 16,
    border: '1px solid rgba(255,255,255,0.08)',
    padding: 24,
    overflow: 'auto',
    maxHeight: 'calc(100vh - 120px)',
  },
  title: { fontSize: 28, fontWeight: 800, margin: 0, letterSpacing: '-0.03em' },
  subtitle: { fontSize: 14, color: '#94a3b8', margin: 0, lineHeight: 1.6 },
  section: { display: 'flex', flexDirection: 'column', gap: 10 },
  label: { fontSize: 11, fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em' },
  toggle: { display: 'flex', gap: 8 },
  toggleBtn: {
    padding: '8px 16px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)',
    background: 'rgba(255,255,255,0.04)', color: '#94a3b8', cursor: 'pointer',
    fontSize: 13, fontWeight: 500, transition: 'all 0.15s',
  },
  toggleBtnActive: {
    background: 'rgba(99,102,241,0.2)', borderColor: '#6366f1', color: '#a5b4fc',
  },
  btnRow: { display: 'flex', gap: 12, flexWrap: 'wrap' },
  primaryBtn: {
    padding: '12px 20px', borderRadius: 10, border: 'none',
    background: 'linear-gradient(135deg,#6366f1,#a855f7)', color: '#fff',
    cursor: 'pointer', fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em',
    boxShadow: '0 4px 24px rgba(99,102,241,0.4)',
    transition: 'transform 0.1s, box-shadow 0.1s',
  },
  secondaryBtn: {
    padding: '12px 20px', borderRadius: 10,
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(255,255,255,0.05)', color: '#e2e8f0',
    cursor: 'pointer', fontSize: 14, fontWeight: 500, transition: 'all 0.15s',
  },
  btnDisabled: { opacity: 0.5, cursor: 'not-allowed' },
  statsGrid: { display: 'flex', gap: 12 },
  statCard: {
    flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: 12,
    border: '1px solid rgba(255,255,255,0.08)', padding: '16px 12px',
    textAlign: 'center',
  },
  statEmoji: { fontSize: 20, marginBottom: 6 },
  statValue: { fontSize: 24, fontWeight: 800, color: '#a5b4fc', letterSpacing: '-0.03em' },
  statLabel: { fontSize: 11, color: '#64748b', marginTop: 4, fontWeight: 500 },
  logBox: {
    background: 'rgba(0,0,0,0.4)', borderRadius: 10,
    border: '1px solid rgba(255,255,255,0.06)', padding: '12px 16px',
    fontFamily: 'monospace', fontSize: 12, color: '#94a3b8',
    maxHeight: 180, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 4,
  },
  logLine: { lineHeight: 1.5 },
  instructions: {
    background: 'rgba(99,102,241,0.08)', borderRadius: 12,
    border: '1px solid rgba(99,102,241,0.2)', padding: '16px 20px',
  },
  instructionsTitle: { margin: '0 0 10px', fontSize: 13, fontWeight: 700, color: '#a5b4fc' },
  instructionsList: { margin: 0, padding: '0 0 0 18px', color: '#94a3b8', fontSize: 13, lineHeight: 1.8 },
  manifestTitle: { fontSize: 18, fontWeight: 700, margin: '0 0 4px', letterSpacing: '-0.02em' },
  manifestSubtitle: { fontSize: 12, color: '#64748b', margin: '0 0 16px' },
  componentGrid: { display: 'flex', flexDirection: 'column', gap: 10 },
  componentCard: {
    background: 'rgba(255,255,255,0.04)', borderRadius: 10,
    border: '1px solid rgba(255,255,255,0.07)', padding: '12px 16px',
  },
  componentName: { fontSize: 14, fontWeight: 700, color: '#e2e8f0', marginBottom: 4 },
  componentMeta: { fontSize: 11, color: '#64748b', marginBottom: 8 },
  variantRow: { display: 'flex', gap: 8, marginBottom: 3, alignItems: 'flex-start' },
  variantKey: { fontSize: 11, color: '#a5b4fc', fontWeight: 600, minWidth: 70 },
  variantValues: { fontSize: 11, color: '#64748b', lineHeight: 1.5 },
};
