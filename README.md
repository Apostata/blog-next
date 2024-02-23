# Next.js frontend with TypeScript and Tailwind CSS + Strapi as backend

# Frontend creation

```bash
pnpm create-next-app --ts {project-name}
```	

## cleaning golbal styles

Let `global.css` file empty like this:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

// make body a flex-col container with min height of the screen
body {
 @apply min-h-screen flex flex-col;
}
```	

## Tailwind CSS with nesting

install postcss-nesting:

```bash
pnpm add postcss-nesting
```

update `postcss.config.js`:

```js	

module.exports = {
  plugins: {
    'postcss-import': {},
	'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## References
[Build a Blog with Next.js and a Headless CMS (Strapi)](https://www.youtube.com/watch?v=NNWX2flw5mg&list=PLjDLDrkNHEK-ijm642kYCqvWXxRYMVOOD&index=4&t=184s)