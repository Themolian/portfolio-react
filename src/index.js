import React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./scss/styles.scss";

import Header from "./components/global/Header";
import Homepage from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/blog/index";
import BlogPost from "./pages/blog/BlogPost";
import Contact from "./pages/Contact";
import Footer from "./components/global/Footer";

const client = new ApolloClient({
  uri: process.env.REACT_APP_WPGRAPHQL_URL,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <div className="site-wrap">
        <Header />
        <main className="main">
          <div className="main-inner">
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </ApolloProvider>
);
