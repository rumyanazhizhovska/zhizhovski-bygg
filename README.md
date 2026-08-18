# Zhizhovski Bygg

Offisiell nettside for **Zhizhovski Bygg AS**, bygget med Next.js 14.

Nettsiden fokuserer på:
- tydelig presentasjon av tjenester
- enkel navigasjon til prosjekter og kontakt
- et lett og skalerbart utgangspunkt for videre vekst

---

## Teknologi

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **CSS Modules**

---

## Kom i gang lokalt

```bash
npm install
npm run dev
```

Åpne deretter http://localhost:3000 i nettleseren.

For produksjonsbygg:

```bash
npm run build
npm run start
```

---

## Nåværende struktur

```text
src/
  app/
    (pages)/
      page.tsx
      services/page.tsx
      projects/page.tsx
      about-us/page.tsx
      contact/page.tsx
    layout.tsx
    sitemap.ts
    robots.ts
  components/
    Header/
    Menu/
    Sections/
    SectionNavigation/
    Footer/
```

---

## Skalering og ytelse – plan

Dette er en prioritert backlog for å løfte ytelse, vedlikeholdbarhet og synlighet.

### P0 (høyest prioritet)

1. **Establish Performance Baseline (Lighthouse + Web Vitals)**
   - Definer KPI-er: LCP, INP, CLS, TTFB
   - Mål baseline i staging/production

2. **Optimize Header/Project Images and Add Missing Public Assets**
   - Sikre at alle bildebaner finnes i `public/`
   - Bruk optimaliserte formater og riktige størrelser

3. **Expand Sitemap and Page Metadata for All Routes**
   - Legg alle offentlige sider i sitemap
   - Forbedre metadata per side (title/description/Open Graph)

4. **Create CI Pipeline: build + lint + typecheck**
   - Legg inn automatisk kvalitetssikring på hver PR

### P1

5. **Reduce Unnecessary Client Components in App Router**
   - Flytt komponenter til server-side der interaktivitet ikke trengs

6. **Add LocalBusiness and Service Structured Data**
   - Legg til schema.org-data for bedre SEO

7. **Set Up Analytics Funnel (Home → Services → Contact)**
   - Mål brukeratferd og konverteringsflyt

8. **Add Error/Uptime Monitoring for Production**
   - Fang runtime-feil og nedetid tidlig

9. **Add Performance Budget Check in CI**
   - Stopp PR-er med betydelige ytelsesregresjoner

### P2

10. **Introduce Content Management for Services/Projects**
    - Gjør innhold enklere å oppdatere uten kodeendringer

11. **Add Revalidation/Caching Strategy for Content Pages**
    - Sikre rask lastetid ved vekst i innhold

12. **Accessibility Pass: Navigation/Menu Keyboard + Screen Reader Audit**
    - Full gjennomgang av tastaturnavigasjon og skjermleser-støtte

---

## Forslag til labels for GitHub Issues

- `priority:P0`, `priority:P1`, `priority:P2`
- `area:performance`
- `area:seo`
- `area:observability`
- `area:accessibility`
- `area:ci`

---

## Målbilde

Målet er en rask, søkbar og vedlikeholdbar nettside som tåler økt trafikk og mer innhold uten at kompleksiteten øker unødvendig.
