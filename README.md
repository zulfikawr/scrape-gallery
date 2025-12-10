# Scrape Gallery

A sandbox environment for testing web scrapers, crawlers, and data extraction tools. The site provides various HTML structures, semantic patterns, and common scraping hurdles (pagination, infinite scroll simulation, messy DOM) in a static, safe-to-scrape environment.

## Features

- **Articles**: Blog layout with metadata, tags, and pagination UI.
- **E-Commerce**: Product listings, stock status, and detailed specification tables.
- **Code Repository**: Syntax-highlighted snippets using Prism.js to test code extraction.
- **Structured Data**: Complex tables, nested lists, and definition lists.
- **Messy Data**: "Trap" elements including missing classes, inline styles, simulated infinite scroll, and hidden elements.

## Tech Stack

- React 19
- Tailwind CSS
- React Router
- Prism.js (Syntax Highlighting)

## Running Locally

1.  Install dependencies:

    ```bash
    npm install
    ```

2.  Start the development server:
    ```bash
    npm run dev
    ```

## Note

All data is fictional. No actual rate limits or blocking mechanisms are implemented.
