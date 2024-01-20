# rmtDev Application

**rmtDev** is a user-friendly web application designed for developers seeking remote job opportunities. It simplifies the job search process with efficient search features, detailed job descriptions, and personalized bookmarking functionality.

## Key Features

- **Instant Search**: Initiate job searches as you type, eliminating the need to hit a search button.
- **Comprehensive Job Listings**: View all job postings that match your search query.
- **Detailed Job Information**: Access in-depth details of a job posting, including Title, Description, Salary, Skills and more.
- **Paginated Results**: Easily navigate through search results with pagination support.
- **Sorting Options**: Sort job listings based on relevance or recency as per your preference.
- **Bookmarking Capability**: Bookmark jobs for easy access and reference.
- **Bookmark Popup**: Quickly view your bookmarked jobs in a convenient popup.
- **Efficient Caching**: Automatically cache previously loaded job items for faster access.
- **Job Sharing**: Share jobs easily by adding the job ID to the URL.

## Application Structure

- **SearchForm**: A dynamic search form for real-time job searching. Search started with delay to limit requests after every inputted letter.
- **JobList**: A reusable component displaying job listings, used for both search results and bookmarks.
- **JobItemContent**: Detailed view of a job's information.
- **Bookmarks Popover**: A popup component to view and manage bookmarked jobs.

## Technologies Used

- **React Query**: For efficient and easy fetching of remote data.
- **React API Context**: For managing UI state across components.
- **Local Storage**: Utilizing browser local storage to persist bookmarked job IDs.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
