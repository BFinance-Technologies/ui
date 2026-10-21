import React from 'react';
import tokens from '../../../../packages/bfinance-ui/tokens/tokens.json';

export default {
  title: 'Foundations/Colors',
  parameters: { layout: 'padded' },
};

/* ── Helpers ───────────────────────────────────────────────── */

const groupBy = (items, getKey) =>
  items.reduce((acc, item) => {
    const key = getKey(item);
    (acc[key] ||= []).push(item);
    return acc;
  }, {});

// "background/button/primary" → "background/button"
const sectionOf = (name) => name.split('/').slice(0, 2).join('/');
const leafOf = (name) => name.split('/').slice(2).join('/') || name.split('/').pop();

// Transparent colors are shown over a checkerboard of the theme they belong to.
const checkerColors = {
  current: ['var(--background-surface-neutral-subtle)', 'var(--background-surface-default)'],
  light: ['#E9EAEC', '#FFFFFF'],
  dark: ['#1F2228', '#0B0C0E'],
};

const checker = (mode) => {
  const [a, b] = checkerColors[mode];
  return {
    backgroundImage: `conic-gradient(${a} 25%, ${b} 0 50%, ${a} 0 75%, ${b} 0)`,
    backgroundSize: '8px 8px',
  };
};

const Swatch = ({ color, size = 20, mode = 'current' }) => (
  <span
    style={{
      display: 'inline-block',
      width: size,
      height: size,
      borderRadius: '50%',
      flexShrink: 0,
      position: 'relative',
      overflow: 'hidden',
      boxShadow: 'inset 0 0 0 1px var(--border-base-alpha)',
      ...checker(mode),
    }}
  >
    <span style={{ position: 'absolute', inset: 0, background: color }} />
  </span>
);

const styles = {
  page: { fontFamily: 'var(--typography-family-Inter)', color: 'var(--text-base-primary)' },
  h2: { fontSize: 24, fontWeight: 500, margin: '32px 0 16px' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
    gap: 24,
    alignItems: 'start',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: 12,
    background: 'var(--background-surface-default)',
    border: '1px solid var(--border-base-divider)',
  },
  th: {
    textAlign: 'left',
    fontWeight: 500,
    fontSize: 13,
    padding: '10px 12px',
    borderBottom: '1px solid var(--border-base-divider)',
  },
  td: {
    padding: '8px 12px',
    borderBottom: '1px solid var(--border-base-divider)',
    verticalAlign: 'middle',
  },
  muted: { color: 'var(--text-base-secondary)', fontFamily: 'monospace', fontSize: 11 },
  cell: { display: 'flex', alignItems: 'center', gap: 8 },
};

const copy = (text) => navigator.clipboard?.writeText(text);

/* ── Primitives ────────────────────────────────────────────── */

const PrimitiveTable = ({ title, items }) => (
  <table style={styles.table}>
    <thead>
      <tr>
        <th style={styles.th}>{title}</th>
        <th style={styles.th}>Color</th>
      </tr>
    </thead>
    <tbody>
      {items.map((t) => (
        <tr key={t.css} title={`Click to copy var(${t.css})`} onClick={() => copy(`var(${t.css})`)}>
          <td style={styles.td}>{t.name.split('/').pop()}</td>
          <td style={styles.td}>
            <span style={styles.cell}>
              <Swatch color={`var(${t.css})`} />
              <span style={styles.muted}>{t.value}</span>
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export const Primitives = {
  render: () => {
    const groups = groupBy(tokens.primitives, (t) => t.name.split('/')[1]);
    return (
      <div style={styles.page}>
        <h2 style={styles.h2}>Primitives</h2>
        <div style={styles.grid}>
          {Object.entries(groups).map(([name, items]) => (
            <PrimitiveTable key={name} title={name} items={items} />
          ))}
        </div>
      </div>
    );
  },
};

/* ── Theme ─────────────────────────────────────────────────── */

const ThemeTable = ({ title, items }) => (
  <table style={styles.table}>
    <thead>
      <tr>
        <th style={styles.th}>{title}</th>
        <th style={styles.th}>Light</th>
        <th style={styles.th}>Dark</th>
      </tr>
    </thead>
    <tbody>
      {items.map((t) => (
        <tr key={t.css} title={`Click to copy var(${t.css})`} onClick={() => copy(`var(${t.css})`)}>
          <td style={styles.td}>
            <span style={styles.cell}>
              <Swatch color={`var(${t.css})`} />
              {leafOf(t.name)}
            </span>
          </td>
          {['light', 'dark'].map((mode) => (
            <td key={mode} style={styles.td}>
              <span style={styles.cell}>
                <Swatch color={t[mode].value} size={14} mode={mode} />
                <span style={styles.muted}>
                  {t[mode].ref ?? t[mode].value}
                </span>
              </span>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

const themeStory = (root) => ({
  render: () => {
    const items = tokens.theme.filter((t) => t.name.startsWith(`${root}/`));
    const sections = groupBy(items, (t) => sectionOf(t.name));
    return (
      <div style={styles.page}>
        <h2 style={styles.h2}>{root[0].toUpperCase() + root.slice(1)}</h2>
        <div style={styles.grid}>
          {Object.entries(sections).map(([name, list]) => (
            <ThemeTable key={name} title={name.split('/')[1] ?? name} items={list} />
          ))}
        </div>
      </div>
    );
  },
});

export const Semantic = themeStory('semantic');
export const Background = themeStory('background');
export const Text = themeStory('text');
export const Border = themeStory('border');
export const Icon = themeStory('icon');
