# Color & Gradient Usage Guide

## How Colors Work

Colors are defined in `app/globals.css` as CSS variables and made available through Tailwind classes via `tailwind.config.ts`.

## Using Existing Colors

### Tailwind Classes
```tsx
<div className="bg-primary text-primary-foreground">Primary Button</div>
<div className="bg-secondary text-secondary-foreground">Secondary</div>
<div className="bg-accent text-accent-foreground">Accent</div>
<div className="border-border bg-card text-card-foreground">Card</div>
```

### Custom Brand Colors
```tsx
<div className="bg-brand-blue">Blue Background</div>
<div className="text-brand-green">Green Text</div>
<div className="border-brand-orange">Orange Border</div>
```

## Using Gradients

### Method 1: Inline Style (Recommended)
```tsx
<div style={{ background: 'var(--gradient-primary)' }}>
  Gradient Background
</div>
```

### Method 2: Custom Class
Add to `globals.css`:
```css
.bg-gradient-primary {
  background: var(--gradient-primary);
}
```

Use in component:
```tsx
<div className="bg-gradient-primary">Gradient</div>
```

## Available Gradients

- `--gradient-primary` - Teal to Blue
- `--gradient-sunset` - Orange to Pink
- `--gradient-ocean` - Blue to Teal

## Adding New Colors

### 1. Add to `globals.css`
```css
:root {
  --my-color: 200 100% 50%; /* HSL without hsl() */
}
```

### 2. Add to `tailwind.config.ts`
```ts
colors: {
  mycustom: 'hsl(var(--my-color))'
}
```

### 3. Use in Components
```tsx
<div className="bg-mycustom">Custom Color</div>
```

## Examples

### Button with Gradient
```tsx
<button style={{ background: 'var(--gradient-primary)' }} className="text-white px-4 py-2 rounded">
  Click Me
</button>
```

### Card with Brand Color
```tsx
<Card className="border-brand-blue">
  <CardHeader className="bg-brand-blue text-white">
    <CardTitle>Blue Card</CardTitle>
  </CardHeader>
</Card>
```
