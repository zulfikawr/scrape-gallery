import { Article, Product, Snippet, Quote, Person } from "./types";

export const CATEGORIES = [
  { id: "articles", label: "Articles", desc: "Blog posts with metadata" },
  { id: "products", label: "Products", desc: "E-commerce listings" },
  { id: "code", label: "Code", desc: "Syntax highlighted snippets" },
  { id: "messy", label: "Messy Data", desc: "Inconsistent HTML structures" },
  { id: "tables", label: "Tables", desc: "Structured tabular data" },
];

const ARTICLE_IMAGES = [
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
];

export const ARTICLES: Article[] = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: [
    "The Future of Web Scraping in 2025",
    "Understanding DOM Traversal",
    "Ethical Considerations for Bots",
    "React vs Vue: A Performance Analysis",
    "Headless Browsers Explained",
    "Handling Dynamic Content Loading",
    "Rate Limiting Strategies",
    "Data Parsing with Python",
    "The Rise of AI Agents",
    "Optimizing RegEx Patterns",
    "Network Layer Interception",
    "Bypassing Anti-Bot Measures",
  ][i],
  author: [
    "Jane Doe",
    "John Smith",
    "Alice Johnson",
    "Bob Wilson",
    "Charlie Brown",
    "Diana Prince",
  ][i % 6],
  date: new Date(2024, i, 15).toISOString().split("T")[0],
  category: ["Tech", "Tutorial", "Opinion", "Analysis"][i % 4],
  content:
    "Web scraping involves extracting data from websites. In this comprehensive guide, we explore the nuances of modern data extraction techniques. From handling dynamic JavaScript content to respecting robots.txt, we cover it all. The landscape of the internet is changing, and so must our tools.",
  tags: ["scraping", "web", "data", "tutorial", "python", "automation"].slice(
    0,
    (i % 4) + 1,
  ),
  views: Math.floor(Math.random() * 5000) + 100,
  image: ARTICLE_IMAGES[i % ARTICLE_IMAGES.length],
}));

const PRODUCT_IMAGES = [
  "https://images.unsplash.com/photo-1602025882379-e01cf08baa51?auto=format&fit=crop&q=80&w=800", // Keyboard
  "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800", // Mouse
  "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800", // Laptop
  "https://images.unsplash.com/photo-1616578273461-3a99ce422de6?auto=format&fit=crop&q=80&w=800", // Hub
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800", // Headphones
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800", // Camera
  "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=800", // Lamp
  "https://images.unsplash.com/photo-1596347909615-401e4242b3b2?auto=format&fit=crop&q=80&w=800", // Stand
  "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&q=80&w=800", // Charger
  "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=800", // Speaker
  "https://images.unsplash.com/photo-1577538926210-fc6cc624fde2?auto=format&fit=crop&q=80&w=800", // SSD
  "https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&q=80&w=800", // Tablet
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800", // Watch
  "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800", // Earbuds
  "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=800", // Powerbank
  "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800", // Mic
];

export const PRODUCTS: Product[] = Array.from({ length: 16 }).map((_, i) => ({
  id: 1000 + i,
  name: [
    "Mechanical Keyboard X1",
    "Ergonomic Mouse Pro",
    "4K Monitor Ultra",
    "USB-C Hub 7-in-1",
    "Noise Cancelling Headphones",
    "Webcam 1080p Stream",
    "Desk Lamp LED",
    "Laptop Stand Adjustable",
    "Wireless Charger Pad",
    "Bluetooth Speaker Mini",
    "External SSD 1TB",
    "Graphics Tablet Medium",
    "Smart Watch Series 5",
    "Earbuds True Wireless",
    "Portable Power Bank",
    "Microphone Condenser USB",
  ][i],
  price: Number((Math.random() * 200 + 20).toFixed(2)),
  currency: "USD",
  rating: Number((Math.random() * 2 + 3).toFixed(1)),
  reviews: Math.floor(Math.random() * 500),
  description:
    "Designed for professionals who demand the best. This high-performance peripheral features durable construction, advanced ergonomics, and seamless compatibility with all major operating systems. Whether you're coding, gaming, or designing, this tool elevates your workflow.",
  features: [
    "Wireless Connectivity",
    "RGB Lighting Customization",
    "Long Battery Life (40h)",
    "2-Year Warranty",
    "Plug & Play",
    "Water Resistant",
    "Aluminum Chassis",
  ].slice(0, (i % 4) + 3),
  inStock: Math.random() > 0.2,
  sku: `SKU-${Math.random().toString(36).substring(7).toUpperCase()}-${1000 + i}`,
  image: PRODUCT_IMAGES[i % PRODUCT_IMAGES.length],
}));

export const SNIPPETS: Snippet[] = [
  {
    id: 1,
    language: "python",
    title: "Simple Scraper with BeautifulSoup",
    description: "A basic example of fetching and parsing HTML using Python.",
    code: `import requests
from bs4 import BeautifulSoup

def scrape_titles(url):
    """
    Fetches the URL and extracts all h2 titles
    with the class 'post-title'.
    """
    headers = {'User-Agent': 'ScrapeGalleryBot/1.0'}
    try:
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        titles = soup.find_all('h2', class_='post-title')
        
        return [title.get_text().strip() for title in titles]
    except Exception as e:
        print(f"Error scraping {url}: {e}")
        return []

if __name__ == "__main__":
    titles = scrape_titles('https://example.com/blog')
    for t in titles:
        print(t)`,
  },
  {
    id: 2,
    language: "javascript",
    title: "Puppeteer Screenshot",
    description: "Taking a screenshot of a webpage using Puppeteer.",
    code: `const puppeteer = require('puppeteer');

(async () => {
  // Launch browser in headless mode
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set viewport to a common desktop resolution
  await page.setViewport({ width: 1920, height: 1080 });
  
  await page.goto('https://example.com', {
    waitUntil: 'networkidle2'
  });

  // Capture screenshot
  await page.screenshot({ path: 'example_full.png', fullPage: true });
  
  await browser.close();
})();`,
  },
  {
    id: 3,
    language: "go",
    title: "Concurrent Requests",
    description: "Fetching multiple URLs concurrently in Go using goroutines.",
    code: `package main

import (
    "fmt"
    "net/http"
    "sync"
    "time"
)

func fetch(url string, wg *sync.WaitGroup, ch chan<- string) {
    defer wg.Done()
    start := time.Now()
    resp, err := http.Get(url)
    if err != nil {
        ch <- fmt.Sprintf("Error fetching %s: %v", url, err)
        return
    }
    defer resp.Body.Close()
    
    duration := time.Since(start)
    ch <- fmt.Sprintf("%s: %s (%v)", url, resp.Status, duration)
}

func main() {
    var wg sync.WaitGroup
    urls := []string{
        "http://example.com",
        "http://google.com",
        "http://github.com",
    }
    
    ch := make(chan string, len(urls))
    
    for _, url := range urls {
        wg.Add(1)
        go fetch(url, &wg, ch)
    }
    
    wg.Wait()
    close(ch)
    
    for msg := range ch {
        fmt.Println(msg)
    }
}`,
  },
  {
    id: 4,
    language: "rust",
    title: "Reqwest Async Get",
    description: "Performing an async GET request in Rust using reqwest.",
    code: `use std::error::Error;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let client = reqwest::Client::builder()
        .user_agent("ScrapeGalleryBot/1.0")
        .build()?;

    let resp = client.get("https://httpbin.org/ip")
        .send()
        .await?
        .text()
        .await?;

    println!("Response Body:\n{}", resp);
    Ok(())
}`,
  },
  {
    id: 5,
    language: "json",
    title: "Sample JSON Response",
    description: "Typical JSON structure returned by internal APIs.",
    code: `{
  "status": "success",
  "data": {
    "users": [
      {
        "id": 1,
        "name": "Alice",
        "roles": ["admin", "editor"]
      },
      {
        "id": 2,
        "name": "Bob",
        "roles": ["viewer"]
      }
    ],
    "pagination": {
      "current_page": 1,
      "total_pages": 5,
      "total_items": 100
    }
  },
  "timestamp": "2023-10-27T10:00:00Z"
}`,
  },
];

export const QUOTES: Quote[] = [
  {
    id: 1,
    text: "Data is the new oil.",
    author: "Clive Humby",
    tags: ["data", "business"],
  },
  {
    id: 2,
    text: "In God we trust. All others must bring data.",
    author: "W. Edwards Deming",
    tags: ["science", "data"],
  },
  {
    id: 3,
    text: "The goal is to turn data into information, and information into insight.",
    author: "Carly Fiorina",
    tags: ["insight", "technology"],
  },
  {
    id: 4,
    text: "Errors using inadequate data are much less than those using no data at all.",
    author: "Charles Babbage",
    tags: ["math", "history"],
  },
  {
    id: 5,
    text: "Hiding within those mounds of data is knowledge that could change the life of a patient, or change the world.",
    author: "Atul Butte",
    tags: ["health", "impact"],
  },
  {
    id: 6,
    text: "Data that is loved tends to survive.",
    author: "Kurt Bollacker",
    tags: ["preservation", "archive"],
  },
];

export const PEOPLE: Person[] = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name:
    [
      "Alice",
      "Bob",
      "Charlie",
      "David",
      "Eve",
      "Frank",
      "Grace",
      "Heidi",
      "Ivan",
      "Judy",
    ][i % 10] +
    " " +
    ["Smith", "Johnson", "Williams", "Brown", "Jones"][i % 5],
  role: ["Developer", "Designer", "Manager", "Analyst", "Director"][i % 5],
  email: `user${i + 1}@example.test`,
  location: ["New York", "San Francisco", "London", "Berlin", "Tokyo"][i % 5],
  bio: "Experienced professional with a demonstrated history of working in the technology industry. Skilled in Agile Methodologies, Software Development, and Data Analysis.",
}));
