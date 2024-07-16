# Benefits of Next.js

## 1. Rendering

Next.js offers both client-side and server-side rendering:

- **Client-Side Rendering**: 
  - The entire HTML, CSS, and JavaScript files are sent to the client from the server.
  - The browser downloads these files and dynamically renders the pages.
  
- **Server-Side Rendering**:
  - The server sends a fully rendered HTML file to the client.
  - The browser then simply renders this HTML.
-**When to use client and server side rendering:**
 - By default allow the next.js to do it's work 
 - if you're facing any errors or you have to use react's core functionalities use client side rendering 

## 2. SEO Advantage

- SEO tools often face difficulties with dynamically rendered pages on the client side.
- Next.js offers server-side rendering, which enhances the speed of SEO crawlers and increases organic traffic by providing a fully rendered HTML page.

## 3. Routing

Next.js simplifies routing with its file-based routing system:

```
app
  ├── profile  (/profile)
  ├── about    (/about)
  └── contact  (/contact)
```

Each folder in the `app` directory can be accessed as a route.

for dynamic routing: `[postID]` name the folder within square brackets.

## 4. Automatic Code Splitting

  - Code splitting is a technique where large chunks of JavaScript files are broken down into smaller, manageable chunks.
  - Next.js automatically splits the code into smaller chunks and loads them on demand.
  - This improves app performance as the browser only loads the required files.
  - It also enhances page load times since the browser doesn't need to load the entire JavaScript file at once.
  
## 5. Built on React

  - Next.js is built on top of React and uses React components to build the app.
  - This makes it easy to learn and use for React developers, as they can use the same React components.
  - Next.js extends React, streamlining the development process by automating various functionalities.

# Special files

## Layout.js
- Layout.js is a special file that can be used to define the layout of the app.
- It can be used to define the header, footer, and other common elements that appear on every page.
- However it is not restricted to a single overall layout you can use multiple layouts for different folders.

## error.js
- error.js is a special file that can be used to define the error page.
- It can be used to display a custom error page when an error occurs.
- It can also be used to redirect the user to a different page or display a custom message.
- It is important to note that error.js is not a replacement for error handling in your app.
- It must be rendered on client side 

## loading.js 
- loading.js is a special file that can be used to define the loading page.
- It can be used to display a custom loading page when the app is loading.
- It can also be used to display a custom message or redirect the user to a different page.

## routes.js
- routes.js is a special file that can be used to define the routes for the app and it acts as the backend.

# Backend API 
- Next.js can be used to build a full-stack app with a backend API.
- Folder Structure for the backend API withing next.js 


```
app
  ├── api
      ├── users
        ├── routes.js
```