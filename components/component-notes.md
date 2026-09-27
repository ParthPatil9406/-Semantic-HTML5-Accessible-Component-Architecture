# Component Architecture

The static pages demonstrate reusable component boundaries conceptually:

- `site-header`: branding + primary navigation
- `sidebar`: workspace navigation
- `main`: page-specific content
- `card`: summary/content article
- `data-table`: caption + semantic headers
- `form-card`: labelled controls + fieldsets
- `dialog`: native modal dialog
- `site-footer`: footer navigation

When migrated to React/Vue/etc., preserve the same semantic DOM and accessible names.
