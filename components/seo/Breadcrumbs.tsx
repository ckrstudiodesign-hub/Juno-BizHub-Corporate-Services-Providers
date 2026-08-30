import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import SchemaMarkup from './SchemaMarkup';

export interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * Enterprise Breadcrumb Component
 * Automatically injects BreadcrumbList JSON-LD for SERP rich snippets.
 */
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.junobizhub.com';
  
  // Construct standard home item
  const allItems = [{ name: 'Home', url: '/' }, ...items];

  const schemaData = {
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${siteUrl}${item.url}` : undefined,
    })),
  };

  return (
    <>
      <SchemaMarkup type="BreadcrumbList" data={schemaData} />
      <nav aria-label="Breadcrumb" className="mb-6 flex">
        <ol className="flex items-center space-x-2 text-xs md:text-sm text-gray-500 font-medium">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            
            return (
              <li key={index} className="flex items-center">
                {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-gray-600 shrink-0" />}
                
                {isLast || !item.url ? (
                  <span className="text-gray-300 pointer-events-none truncate max-w-[150px] md:max-w-[300px]" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link 
                    href={item.url} 
                    className="hover:text-electric-sapphire transition-colors flex items-center gap-1.5 whitespace-nowrap"
                  >
                    {index === 0 && <Home className="w-3.5 h-3.5" />}
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
