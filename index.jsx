import { serve } from "bun";

function App({ path }) {
  // Define your components and JSX here
  return (
    <html>
      <body>
        <h1>Dynamic Path: {path}</h1>
      </body>
    </html>
  );
}

serve({
  fetch(req) {
    // Extract the path from the request URL
    const { pathname } = new URL(req.url);

    // Convert the JSX component to an HTML string
    const html = Bun.renderToString(<App path={pathname} />);

    // Return the HTML content as a response
    return new Response(html, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
});
