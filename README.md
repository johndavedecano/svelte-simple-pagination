# Svelte Simple Pagination

A very simple pagination library for svelte.

```bash
npm install svelte-simple-pagination
```

## Usage

```js
import Pagination from 'svelte-simple-pagination'

<Pagination active={10} numpages={50} limit={10} />
<Pagination active={10} numpages={50} limit={10} prevLabel="before" nextLabel="after" />
<Pagination active={10} numpages={50} limit={10} prevLabel={null} nextLabel={null} />
<Pagination active={10} numpages={50} limit={10} customClass="pagination-lg" />
<Pagination active={10} numpages={50} limit={10} customClass="pagination-sm" />
```

### Testing

Comes with tests out of the box using [svelte-testing-library](https://github.com/testing-library/svelte-testing-library) + [Jest](https://github.com/facebook/jest).

To Run tests:

```bash
npm test # or yarn
```

### Storybook

To serve development build:

```bash
npm run storybook
```

To build static storybook site (default output folder is /docs for easly sharing on github pages):

```bash
npm run build-storybook
```
