# Viewpoint Atlas Content Workflow

**How to implement new topics for Viewpoint Atlas.**

---

## 📋 Overview

Adding a new topic to Viewpoint Atlas involves research, writing, linking, and review. This document outlines the complete workflow.

---

## 🔄 The Content Development Process

### Step 1: Topic Selection & Research

**Objective:** Understand the topic deeply before writing

**Actions:**
- Review the topic against Viewpoint Atlas philosophy
- Research the topic thoroughly
- Identify key concepts and themes
- Map relationships to existing topics and concepts
- Gather sources and references

**Output:** Topic research document with outline

---

### Step 2: Outline Development

**Objective:** Create a clear structure for the topic

**Structure for Most Topics:**
- Hero Section – Title, subtitle, introduction
- Section 1 – Definition or foundational concepts
- Section 2 – Historical context or background
- Section 3 – Key theories or frameworks
- Section 4 – Evolution or current state
- Section 5 – Real-world examples or case studies
- Section 6 – How to think about this topic
- Section 7 – Questions for further exploration

**Note:** Not all topics need exactly 7 sections. Adjust based on the topic's nature.

**Output:** Detailed outline with section descriptions

---

### Step 3: Content Writing

**Objective:** Write clear, engaging, neutral content

**Writing Guidelines:**
- Keep paragraphs short (3-4 sentences max)
- Use clear, accessible language
- Avoid jargon without explanation
- Present multiple perspectives
- End sections with questions or connections
- Maintain neutral, intellectual tone
- Use active voice

**Content Length:**
- Hero section: 2-3 paragraphs
- Each section: 3-5 paragraphs
- Total topic: 3,000-5,000 words

**Output:** Draft content for all sections

---

### Step 4: Concept Identification

**Objective:** Identify concepts that need explanation

**Actions:**
- Read through the content
- Mark terms that readers might not understand
- Check if concepts already exist in Concept Library
- Create new concept entries if needed
- Plan internal links

**Output:** List of concepts to link

---

### Step 5: Internal Linking

**Objective:** Connect the topic to other ideas

**Linking Strategy:**
- Link to existing concepts in Concept Library
- Link to related topics
- Link from concept names to concept pages
- Add "Related Topics" section
- Create bidirectional links

**Example:**
```tsx
<p>
  The <Link to="/concepts/military-industrial-complex">
    Military-Industrial Complex
  </Link> is a key concept in understanding how power operates.
</p>
```

**Output:** Linked content ready for implementation

---

### Step 6: Code Implementation

**Objective:** Create the topic page component

**Steps:**

1. **Create new page component:**
```bash
# Create file
touch client/src/pages/[TopicName]Topic.tsx
```

2. **Follow the template structure:**
```tsx
export default function [TopicName]Topic() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-background py-16">
          <div className="container">
            <h1>Title</h1>
            <p>Introduction</p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-12">
          <div className="container">
            <h2>Section 1</h2>
            {/* Content */}
          </div>
        </section>

        {/* More sections... */}
      </main>
      <Footer />
    </div>
  );
}
```

3. **Add route to App.tsx:**
```tsx
<Route path={"/topics/[topic-name]"} component={[TopicName]Topic} />
```

4. **Update navigation:**
- Add link to Header.tsx
- Add link to Footer.tsx
- Update homepage if it's a featured topic

**Output:** Working topic page

---

### Step 7: Concept Entry Creation

**Objective:** Create Concept Library entries for new concepts

**Steps:**

1. **Add to concepts.ts:**
```typescript
{
  id: "concept-id",
  title: "Concept Title",
  definition: "Clear definition...",
  whyItMatters: "Why this concept is important...",
  relatedTopics: ["topic-name", "other-topic"]
}
```

2. **Ensure searchability:**
- Use clear, searchable titles
- Include keywords in definition
- Link to related topics

**Output:** New concepts in Concept Library

---

### Step 8: Testing & Review

**Objective:** Ensure quality before publishing

**Testing Checklist:**
- [ ] All links work correctly
- [ ] Page renders properly on mobile
- [ ] Text is readable and clear
- [ ] No spelling or grammar errors
- [ ] Images load correctly
- [ ] Concepts are properly linked
- [ ] Related topics are suggested
- [ ] Navigation is clear
- [ ] Page loads quickly
- [ ] Accessibility is good

**Review Checklist:**
- [ ] Content is neutral and balanced
- [ ] Multiple perspectives are presented
- [ ] Writing is clear and engaging
- [ ] Topic follows Viewpoint Atlas philosophy
- [ ] Internal links are helpful
- [ ] Concepts are well-explained
- [ ] Examples are relevant
- [ ] Questions encourage exploration

**Output:** Approved, tested topic page

---

### Step 9: Publishing

**Objective:** Make the topic live

**Steps:**

1. **Create feature branch:**
```bash
git checkout -b feature/add-[topic-name]
```

2. **Commit changes:**
```bash
git add .
git commit -m "feat: Add [Topic Name] topic page"
```

3. **Push to GitHub:**
```bash
git push origin feature/add-[topic-name]
```

4. **Create Pull Request:**
- Request review from team
- Address feedback
- Merge to main

5. **Deploy:**
- Build for production
- Deploy to hosting
- Verify live

**Output:** Topic is live on the site

---

### Step 10: Post-Launch Monitoring

**Objective:** Ensure quality and gather feedback

**Monitoring:**
- Track page views
- Monitor user feedback
- Check for errors
- Gather analytics
- Identify improvement areas

**Improvements:**
- Fix any issues
- Update content based on feedback
- Add related topics as they're created
- Improve internal links

---

## 📝 Content Template

### Hero Section Template

```
# [Topic Title]

[Compelling subtitle or hook]

[2-3 sentence introduction explaining what this topic is about and why it matters]
```

### Section Template

```
## [Section Title]

[2-3 sentence introduction to the section]

[Main content - 3-5 paragraphs]

[Optional: subsection or list]

[Closing sentence or question that leads to next section]
```

### Closing Section Template

```
## Questions Worth Asking

- What aspects of [topic] do you want to understand better?
- How does [topic] relate to your own experience?
- What questions does this raise for you?
- How might [topic] change in the future?
```

---

## 🔗 Linking Best Practices

### When to Link

Link to concepts when:
- A term might be unfamiliar to readers
- Understanding the term is important to the topic
- The concept is explained in the Concept Library

Link to topics when:
- A related topic provides important context
- The reader might want to explore further
- The topics are naturally connected

### Link Density

- Aim for 3-5 internal links per topic page
- Don't over-link (avoid more than 1 link per paragraph)
- Links should feel natural, not forced

### Link Text

Use descriptive link text:
- ✅ Good: "The Military-Industrial Complex"
- ❌ Bad: "Click here"
- ✅ Good: "Learn more about Cold War politics"
- ❌ Bad: "More info"

---

## 📊 Content Quality Standards

### Accuracy
- Content is factually accurate
- Sources are reliable
- Claims are supported by evidence

### Clarity
- Language is clear and accessible
- Concepts are explained simply
- No unnecessary jargon

### Neutrality
- Multiple perspectives are presented
- No ideological bias
- Balanced treatment of controversial topics

### Completeness
- Topic is thoroughly explored
- Key aspects are covered
- Reader has solid understanding

### Engagement
- Writing is engaging and readable
- Examples are relevant and interesting
- Questions encourage further exploration

---

## 🚀 Quick Reference

**Time Estimate:** 40-60 hours per topic

**Team Needed:**
- 1 writer (research and writing)
- 1 editor (review and feedback)
- 1 developer (implementation)

**Deliverables:**
- Topic page (7 sections, 3,000-5,000 words)
- 5-10 new concept entries
- Internal links and connections
- Tested and reviewed

---

**Version:** 1.0  
**Created:** July 2026

This workflow ensures consistent, high-quality content across Viewpoint Atlas.
