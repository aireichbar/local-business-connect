import { useEffect } from "react";

interface SEOConfig {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
}

export const useSEO = ({ title, description, canonical, ogTitle, ogDescription, ogUrl }: SEOConfig) => {
  useEffect(() => {
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);

    const canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) canonicalEl.setAttribute("href", canonical);

    document.querySelector('meta[property="og:title"]')?.setAttribute("content", ogTitle || title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", ogDescription || description);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", ogUrl || canonical);

    window.scrollTo(0, 0);
  }, [title, description, canonical, ogTitle, ogDescription, ogUrl]);
};

export const useSchemaOrg = (schema: object, id: string) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(id);
      if (el) document.head.removeChild(el);
    };
  }, []);
};
