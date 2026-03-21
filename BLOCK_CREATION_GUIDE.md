# Complete Guide: Creating Blocks in Sanity Studio and Frontend

This guide provides a step-by-step walkthrough for creating new page builder blocks that work in both Sanity Studio (CMS) and the frontend Next.js application.

## Table of Contents

1. [Overview: How Blocks Work](#overview-how-blocks-work)
2. [Part 1: Creating the Sanity Schema](#part-1-creating-the-sanity-schema)
3. [Part 2: Registering the Schema](#part-2-registering-the-schema)
4. [Part 3: Adding to Page Builder](#part-3-adding-to-page-builder)
5. [Part 4: Creating the Frontend Component](#part-4-creating-the-frontend-component)
6. [Part 5: Registering the Frontend Component](#part-5-registering-the-frontend-component)
7. [Part 6: Updating the Query](#part-6-updating-the-query)
8. [Data Flow Explanation](#data-flow-explanation)
9. [Best Practices](#best-practices)
10. [Example: PersonalBio Block](#example-personalbio-block)

---

## Overview: How Blocks Work

Blocks are reusable content sections that can be added to pages through the Sanity Studio page builder. The workflow involves:

1. **Sanity Studio (CMS)**: Define the data structure (schema) for the block
2. **Frontend (Next.js)**: Create a React component to render the block
3. **Connection**: The `BlockRenderer` component maps block types to their corresponding React components

**Data Flow:**
```
Sanity Studio → Sanity CMS → GROQ Query → Frontend Component → Rendered HTML
```

---

## Part 1: Creating the Sanity Schema

### Step 1.1: Create the Schema File

Create a new file in `studio/src/schemaTypes/objects/` with your block name (e.g., `myBlock.ts`).

**File Structure:**
```typescript
import {defineField, defineType} from 'sanity'
import {IconName} from '@sanity/icons'

/**
 * Description of your block. Used for [purpose].
 */

export const myBlock = defineType({
  name: 'myBlock',           // Internal name (camelCase, no spaces)
  title: 'My Block',         // Display name in Sanity Studio
  type: 'object',            // Always 'object' for page builder blocks
  icon: IconName,            // Icon from @sanity/icons
  fields: [
    // Define your fields here
  ],
  preview: {
    // Optional: Customize how the block appears in the page builder
  },
})
```

### Step 1.2: Define Fields

Use `defineField` to create form fields in Sanity Studio. Common field types:

```typescript
fields: [
  defineField({
    name: 'title',
    title: 'Title',
    type: 'string',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'description',
    title: 'Description',
    type: 'text',              // Multi-line text (unlimited length)
  }),
  defineField({
    name: 'content',
    title: 'Content',
    type: 'blockContent',      // Rich text editor
  }),
  defineField({
    name: 'image',
    title: 'Image',
    type: 'image',
    options: {
      hotspot: true,           // Enable image cropping
    },
  }),
  defineField({
    name: 'link',
    title: 'Link',
    type: 'link',              // Custom link type (supports internal/external)
  }),
]
```

### Step 1.3: Add Preview (Optional)

Customize how the block appears in the page builder list:

```typescript
preview: {
  select: {
    title: 'title',           // Field to use as title
    subtitle: 'subtitle',     // Field to use as subtitle
    media: 'image',           // Image to display
  },
  prepare({title, subtitle, media}) {
    return {
      title: title || 'Untitled Block',
      subtitle: subtitle || 'My Block',
      media: media,
    }
  },
}
```

**Example Schema File:**
```typescript
// studio/src/schemaTypes/objects/personalBio.ts
import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const personalBio = defineType({
  name: 'personalBio',
  title: 'Personal Bio',
  type: 'object',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'paragraph',
      title: 'Paragraph',
      type: 'text',
      description: 'Personal biography paragraph (unlimited length)',
    }),
  ],
  preview: {
    select: {
      paragraph: 'paragraph',
    },
    prepare({paragraph}) {
      return {
        title: paragraph 
          ? paragraph.substring(0, 50) + (paragraph.length > 50 ? '...' : '') 
          : 'Untitled Personal Bio',
        subtitle: 'Personal Bio',
      }
    },
  },
})
```

---

## Part 2: Registering the Schema

### Step 2.1: Export from Schema Index

Add your schema to `studio/src/schemaTypes/index.ts`:

```typescript
// Import your block
import {myBlock} from './objects/myBlock'

// Add to the exports array
export const schemaTypes = [
  // ... other schemas
  myBlock,
]
```

**Important:** The order doesn't matter, but keep it organized (group documents, objects, singletons).

---

## Part 3: Adding to Page Builder

### Step 3.1: Add to Page Schema

Edit `studio/src/schemaTypes/documents/page.ts` and add your block to the `pageBuilder` array:

```typescript
defineField({
  name: 'pageBuilder',
  title: 'Page builder',
  type: 'array',
  of: [
    {type: 'hero'},
    {type: 'skillsGrid'},
    {type: 'callToAction'},
    {type: 'infoSection'},
    {type: 'myBlock'},        // Add your block here
  ],
  // ... rest of config
})
```

**Note:** After making this change, restart your Sanity Studio server to see the new block option.

---

## Part 4: Creating the Frontend Component

### Step 4.1: Create Component File

Create a new file in `frontend/app/components/` (e.g., `MyBlock.tsx`).

### Step 4.2: Component Structure

```typescript
import {MyBlock as MyBlockType} from '@/sanity.types'

type MyBlockProps = {
  block: MyBlockType
  index: number
}

export default function MyBlock({block}: MyBlockProps) {
  return (
    <section className="container my-12">
      {/* Your block content here */}
    </section>
  )
}
```

### Step 4.3: Access Block Data

Access fields from the block prop:

```typescript
export default function MyBlock({block}: MyBlockProps) {
  return (
    <section className="container my-12">
      {block?.title && (
        <h2 className="text-2xl font-bold">{block.title}</h2>
      )}
      {block?.description && (
        <p className="text-gray-600">{block.description}</p>
      )}
      {/* Always use optional chaining (?.) for safety */}
    </section>
  )
}
```

### Step 4.4: Handle Special Field Types

**Rich Text (blockContent):**
```typescript
import {type PortableTextBlock} from 'next-sanity'
import PortableText from '@/app/components/PortableText'

{block?.content?.length && (
  <PortableText value={block.content as PortableTextBlock[]} />
)}
```

**Images:**
```typescript
import {Image} from 'next-sanity/image'
import {getImageDimensions} from '@sanity/asset-utils'
import {urlForImage} from '@/sanity/lib/utils'

const image = block.image?.asset?._ref
  ? {
      src: urlForImage(block.image)?.url() as string,
      dimensions: getImageDimensions(block.image),
      alt: block.image?.alt || 'Image',
    }
  : null

{image && (
  <Image
    src={image.src}
    width={image.dimensions.width}
    height={image.dimensions.height}
    alt={image.alt}
  />
)}
```

**Links:**
```typescript
import ResolvedLink from '@/app/components/ResolvedLink'

<ResolvedLink link={block.link}>
  Click here
</ResolvedLink>
```

**Example Component:**
```typescript
// frontend/app/components/PersonalBio.tsx
import {PersonalBio as PersonalBioType} from '@/sanity.types'

type PersonalBioProps = {
  block: PersonalBioType
  index: number
}

export default function PersonalBio({block}: PersonalBioProps) {
  return (
    <section className="container my-12">
      <div className="max-w-4xl mx-auto">
        {block?.paragraph && (
          <div className="prose prose-lg max-w-none">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 whitespace-pre-line">
              {block.paragraph}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
```

---

## Part 5: Registering the Frontend Component

### Step 5.1: Import in BlockRenderer

Edit `frontend/app/components/BlockRenderer.tsx`:

```typescript
// Add import
import MyBlock from '@/app/components/MyBlock'

// Add to Blocks object
const Blocks: BlocksType = {
  hero: Hero,
  skillsGrid: SkillsGrid,
  callToAction: Cta,
  infoSection: Info,
  myBlock: MyBlock,        // Add here (key must match schema name)
}
```

**Important:** The key in the `Blocks` object must exactly match the `name` field in your Sanity schema (e.g., `myBlock`).

---

## Part 6: Updating the Query

### Step 6.1: Add to Page Query

Edit `frontend/sanity/lib/queries.ts` and add your block to the `getPageQuery`:

```typescript
export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0]{
    _id,
    _type,
    name,
    slug,
    heading,
    subheading,
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "hero" => {
        // ... hero fields
      },
      _type == "myBlock" => {
        ...,                    // Include all fields
        // Add specific field queries if needed
      },
    },
  }
`)
```

**For simple blocks:** Just use `...,` to include all fields.

**For complex blocks:** You may need to expand nested objects or references:

```typescript
_type == "myBlock" => {
  ...,
  image{
    ...,
    asset->
  },
  link {
    ...,
    _type == "link" => {
      "page": page->slug.current,
      "post": post->slug.current
    }
  }
}
```

---

## Data Flow Explanation

### How Data Moves Through the System

1. **Content Creation (Sanity Studio)**
   - User creates/edits a page
   - Adds blocks via the page builder
   - Data is saved to Sanity CMS

2. **Data Fetching (Frontend)**
   - Next.js page component calls `getPageQuery`
   - GROQ query fetches page data including all blocks
   - Data is returned as JSON

3. **Rendering (Frontend)**
   - `PageBuilder` component receives the `pageBuilder` array
   - Maps over each block and passes it to `BlockRenderer`
   - `BlockRenderer` looks up the component in the `Blocks` object
   - Component receives block data as props and renders HTML

### File Relationships

```
Sanity Schema (studio/src/schemaTypes/objects/myBlock.ts)
    ↓
Schema Index (studio/src/schemaTypes/index.ts)
    ↓
Page Schema (studio/src/schemaTypes/documents/page.ts)
    ↓
GROQ Query (frontend/sanity/lib/queries.ts)
    ↓
Frontend Component (frontend/app/components/MyBlock.tsx)
    ↓
BlockRenderer (frontend/app/components/BlockRenderer.tsx)
    ↓
Rendered HTML
```

---

## Best Practices

### 1. Naming Conventions

- **Schema name**: Use camelCase (e.g., `personalBio`, `skillsGrid`)
- **Component name**: Use PascalCase (e.g., `PersonalBio`, `SkillsGrid`)
- **File names**: Match component names (e.g., `PersonalBio.tsx`)

### 2. Type Safety

- Always import types from `@/sanity.types`
- Use TypeScript types for props
- Use optional chaining (`?.`) when accessing block fields

### 3. Error Handling

- Always check if fields exist before rendering
- Provide fallback content when data is missing
- Use conditional rendering (`{block?.field && ...}`)

### 4. Styling

- Use Tailwind CSS classes (already configured)
- Follow existing component patterns for consistency
- Use responsive classes (`md:`, `lg:`, etc.)

### 5. Performance

- Use Next.js `Image` component for images
- Lazy load heavy components if needed
- Keep components focused and lightweight

### 6. Accessibility

- Use semantic HTML (`<section>`, `<article>`, etc.)
- Include proper alt text for images
- Ensure proper heading hierarchy

---

## Example: PersonalBio Block

This example shows the complete implementation of the `personalBio` block we created.

### 1. Sanity Schema

**File:** `studio/src/schemaTypes/objects/personalBio.ts`
```typescript
import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const personalBio = defineType({
  name: 'personalBio',
  title: 'Personal Bio',
  type: 'object',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'paragraph',
      title: 'Paragraph',
      type: 'text',
      description: 'Personal biography paragraph (unlimited length)',
    }),
  ],
  preview: {
    select: {
      paragraph: 'paragraph',
    },
    prepare({paragraph}) {
      return {
        title: paragraph 
          ? paragraph.substring(0, 50) + (paragraph.length > 50 ? '...' : '') 
          : 'Untitled Personal Bio',
        subtitle: 'Personal Bio',
      }
    },
  },
})
```

### 2. Schema Index

**File:** `studio/src/schemaTypes/index.ts`
```typescript
import {personalBio} from './objects/personalBio'

export const schemaTypes = [
  // ... other schemas
  personalBio,
]
```

### 3. Page Schema

**File:** `studio/src/schemaTypes/documents/page.ts`
```typescript
of: [
  {type: 'hero'},
  {type: 'skillsGrid'},
  {type: 'callToAction'},
  {type: 'infoSection'},
  {type: 'personalBio'},  // Added here
]
```

### 4. Frontend Component

**File:** `frontend/app/components/PersonalBio.tsx`
```typescript
import {PersonalBio as PersonalBioType} from '@/sanity.types'

type PersonalBioProps = {
  block: PersonalBioType
  index: number
}

export default function PersonalBio({block}: PersonalBioProps) {
  return (
    <section className="container my-12">
      <div className="max-w-4xl mx-auto">
        {block?.paragraph && (
          <div className="prose prose-lg max-w-none">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 whitespace-pre-line">
              {block.paragraph}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
```

### 5. BlockRenderer

**File:** `frontend/app/components/BlockRenderer.tsx`
```typescript
import PersonalBio from '@/app/components/PersonalBio'

const Blocks: BlocksType = {
  hero: Hero,
  skillsGrid: SkillsGrid,
  callToAction: Cta,
  infoSection: Info,
  personalBio: PersonalBio,  // Added here
}
```

### 6. Query

**File:** `frontend/sanity/lib/queries.ts`
```typescript
_type == "infoSection" => {
  content[]{
    ...,
    markDefs[]{
      ...,
      ${linkReference}
    }
  }
},
_type == "personalBio" => {
  ...,  // Added here
},
```

---

## Troubleshooting

### Block doesn't appear in Sanity Studio

- ✅ Check that schema is exported in `index.ts`
- ✅ Check that block is added to `page.ts` pageBuilder array
- ✅ Restart Sanity Studio server
- ✅ Check for TypeScript/compilation errors

### Block doesn't render on frontend

- ✅ Check that component is imported in `BlockRenderer.tsx`
- ✅ Verify the key in `Blocks` object matches schema `name` exactly
- ✅ Check that block is included in the GROQ query
- ✅ Check browser console for errors
- ✅ Verify block data exists in Sanity CMS

### Type errors

- ✅ Run `npm run typegen` (or your type generation command) to update types
- ✅ Check that types are imported from `@/sanity.types`
- ✅ Verify field names match between schema and component

### Data not displaying

- ✅ Use optional chaining (`block?.field`)
- ✅ Check that fields are included in the GROQ query
- ✅ Verify data exists in Sanity CMS
- ✅ Check component console logs

---

## Quick Reference Checklist

When creating a new block, follow this checklist:

### Sanity Studio Side
- [ ] Create schema file in `studio/src/schemaTypes/objects/`
- [ ] Define fields with `defineField`
- [ ] Add preview configuration (optional)
- [ ] Export from `studio/src/schemaTypes/index.ts`
- [ ] Add to `pageBuilder` array in `studio/src/schemaTypes/documents/page.ts`
- [ ] Restart Sanity Studio

### Frontend Side
- [ ] Create component in `frontend/app/components/`
- [ ] Import and use types from `@/sanity.types`
- [ ] Add component to `BlockRenderer.tsx` imports
- [ ] Register component in `Blocks` object
- [ ] Add block to GROQ query in `frontend/sanity/lib/queries.ts`
- [ ] Test rendering with actual data

---

## Additional Resources

- [Sanity Schema Documentation](https://www.sanity.io/docs/schema-types)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Last Updated:** Based on the PersonalBio block implementation
**Project Structure:** Sanity Studio + Next.js Frontend
