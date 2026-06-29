import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'wouter';
import { searchConcepts, type Concept } from '@/data/concepts';
import { Button } from '@/components/ui/button';

/**
 * Concept Library Search Component
 * 
 * Design Philosophy: Lightweight Support Tool
 * - Simple search bar with immediate results
 * - Dropdown shows matching concepts
 * - Click to navigate to concept page
 * - Keyboard accessible
 */
export default function ConceptSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Concept[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Update results as user types
  useEffect(() => {
    if (query.trim()) {
      const matches = searchConcepts(query);
      setResults(matches);
      setIsOpen(matches.length > 0);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className="relative w-full">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          placeholder="Search concepts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim() && setIsOpen(true)}
          className="w-full pl-10 pr-10 py-2 md:py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200"
          aria-label="Search concepts"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-50">
          <ul className="divide-y divide-border">
            {results.map((concept) => (
              <li key={concept.id}>
                <Link href={`/concepts/${concept.id}`}>
                  <a
                    className="block px-4 py-3 hover:bg-accent/10 transition-colors duration-150 cursor-pointer"
                    onClick={() => {
                      setQuery('');
                      setResults([]);
                      setIsOpen(false);
                    }}
                  >
                    <div className="font-medium text-foreground text-sm md:text-base">
                      {concept.title}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground line-clamp-1 mt-1">
                      {concept.definition}
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* No Results Message */}
      {isOpen && query.trim() && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-50 p-4">
          <p className="text-sm text-muted-foreground text-center">
            No concepts found for "{query}"
          </p>
        </div>
      )}
    </div>
  );
}
