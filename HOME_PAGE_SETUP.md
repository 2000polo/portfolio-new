# Home Page Setup Guide

This guide explains how to create a home page in Sanity Studio that will be displayed on the root URL (`/`) of your website.

## Creating the Home Page in Sanity Studio

1. **Open Sanity Studio**
   - Navigate to `http://localhost:3333` (or your deployed Studio URL)
   - Log in if needed

2. **Create a New Page**
   - Click the "+ Create" button
   - Select "Page" from the document types

3. **Fill in the Required Fields**
   - **Name**: Enter "Home" (or any name you prefer)
   - **Slug**: This should automatically generate as "home" (make sure the slug is exactly "home")
   - **Heading**: Enter your main heading (e.g., "Welcome to My Portfolio")
   - **Subheading**: Enter a subheading (optional)

4. **Add Page Builder Sections**
   Click "Add item" in the Page builder section to add sections:

   ### Hero Section
   - Select "Hero Section"
   - Fill in:
     - Title (e.g., "I'm a Full Stack Developer")
     - Subtitle (optional)
     - Description (optional)
     - Primary Button Text and Link (optional)
     - Secondary Button Text and Link (optional)
     - Background Image (optional)

   ### Skills Grid Section
   - Select "Skills Grid"
   - Fill in:
     - Heading (e.g., "My Skills")
     - Subheading (optional)
     - Description (optional)
   - Add Skills:
     - Click "Add item" in the Skills array
     - For each skill, provide:
       - Skill Name
       - Description
       - Icon (image)
       - Proficiency Level (Beginner/Intermediate/Advanced/Expert)
       - Category (Frontend/Backend/Full Stack/DevOps/Design/Other)

   ### Other Sections
   - You can also add "Call to Action" and "Info Section" blocks

5. **Publish the Page**
   - Click "Publish" in the top right corner
   - The home page will now be available at `http://localhost:3000/`

## Sample Home Page Structure

Here's a suggested structure for a portfolio home page:

```
Page Name: Home
Slug: home
Heading: Welcome to My Portfolio
Subheading: Full Stack Developer & Designer

Page Builder Sections:
1. Hero Section
   - Title: "Hi, I'm [Your Name]"
   - Subtitle: "Full Stack Developer"
   - Description: "I create beautiful, functional web experiences"
   - Primary Button: "View My Work" → Link to /work
   - Secondary Button: "Get in Touch" → Link to /contact

2. Skills Grid
   - Heading: "Technologies I Work With"
   - Skills:
     - React (Frontend, Advanced)
     - Node.js (Backend, Advanced)
     - TypeScript (Full Stack, Expert)
     - Next.js (Frontend, Advanced)
     - ... (add more skills)

3. Info Section
   - Heading: "About Me"
   - Content: Your bio and background

4. Call to Action
   - Heading: "Let's Work Together"
   - Text: "Have a project in mind? Let's discuss it!"
   - Button: "Contact Me" → Link to /contact
```

## Troubleshooting

- **Page not showing**: Make sure the slug is exactly "home" (lowercase)
- **Sections not rendering**: Run `npm run typegen` in the frontend directory to regenerate TypeScript types
- **Images not loading**: Ensure images are uploaded and published in Sanity Studio

## Next Steps

After creating your home page, you can:
- Create additional pages (About, Contact, etc.) with different slugs
- Customize the styling in the component files
- Add more page builder sections as needed

