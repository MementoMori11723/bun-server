import { serve } from "bun";

function App(path: string) {
  return /*html*/ ` 
  <html>
    <body>
      <h1>Dynamic Path: ${path}</h1>
    </body>
  </html>`;
}
serve({
  fetch(req) {
    // Extract the path from the request URL
    const { pathname } = new URL(req.url);

    // Convert the JSX component to an HTML string
    const html = App(pathname);

    // Return the HTML content as a response
    return new Response(html, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
  port: 5000,
});
