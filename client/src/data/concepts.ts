/**
 * Concept Library Data
 * 
 * Design Philosophy: Lightweight Support Tool
 * - Minimal entries to reduce friction
 * - Each concept is concise and readable in ~1 minute
 * - Supports internal linking from Topic pages
 * - Search-driven navigation
 */

export interface Concept {
  id: string;
  title: string;
  definition: string;
  whyItMatters: string;
  relatedTopics: string[];
  createdAt: string;
}

export const concepts: Concept[] = [
  {
    id: 'military-industrial-complex',
    title: 'Military-Industrial Complex',
    definition:
      'The interconnected relationship between a nation\'s military, defense contractors, and political leadership. This system perpetuates military spending and weapons development, often influencing foreign policy decisions.',
    whyItMatters:
      'Understanding the military-industrial complex reveals how economic interests shape geopolitical decisions. It explains why nations maintain large military budgets even during peacetime, and how defense industries influence policy makers. This concept is essential for understanding modern conflicts and international relations.',
    relatedTopics: ['Cold War', '9/11', 'Propaganda', 'Geopolitics', 'Economics'],
    createdAt: '2026-01-01',
  },
];

/**
 * Search concepts by title or definition
 * Case-insensitive partial matching
 */
export function searchConcepts(query: string): Concept[] {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase();
  return concepts.filter(
    (concept) =>
      concept.title.toLowerCase().includes(lowerQuery) ||
      concept.definition.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get a single concept by ID
 */
export function getConceptById(id: string): Concept | undefined {
  return concepts.find((concept) => concept.id === id);
}

/**
 * Get all concepts (for future listing/browsing)
 */
export function getAllConcepts(): Concept[] {
  return concepts;
}
