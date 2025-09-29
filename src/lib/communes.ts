import fs from 'fs';
import path from 'path';

export type Seo = {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
};

export type Commune = {
  nom: string;
  seo: Seo;
  principale?: string;
  principaleSlug?: string;
  slug: string;
};

export type CommunesGrouped = Record<string, Commune[]>; // key = group slug (principaleSlug or slug)

const root = process.cwd();
const communesDir = path.join(root, 'src', 'data', 'communes');

function readJson(file: string): any {
  const content = fs.readFileSync(file, 'utf8');
  return JSON.parse(content);
}

function slugFromCanonical(canonical: string): string {
  try {
    const url = new URL(canonical);
    return url.pathname.replace(/^\//, '');
  } catch {
    return canonical.split('/').pop() || '';
  }
}

export function getAllCommunes(): Commune[] {
  const files = [
    path.join(communesDir, 'principales', 'communes-principales.json'),
    path.join(communesDir, 'secondaires', 'communes-brabant-wallon.json'),
    path.join(communesDir, 'secondaires', 'communes-bruxelles.json'),
    path.join(communesDir, 'secondaires', 'communes-charleroi.json'),
    path.join(communesDir, 'secondaires', 'communes-liege.json'),
    path.join(communesDir, 'secondaires', 'communes-mons.json'),
    path.join(communesDir, 'secondaires', 'communes-namur.json'),
  ];

  const all: Commune[] = [];
  for (const f of files) {
    if (!fs.existsSync(f)) continue;
    const json = readJson(f);
    if (!Array.isArray(json?.communes)) continue;
    for (const c of json.communes) {
      const slug = slugFromCanonical(c.seo?.canonical || '');
      all.push({
        nom: c.nom,
        seo: c.seo,
        principale: c.principale,
        principaleSlug: c.principaleSlug,
        slug,
      });
    }
  }
  return all;
}

export function getCommuneBySlug(slug: string): Commune | undefined {
  const all = getAllCommunes();
  return all.find((c) => c.slug === slug);
}

export function groupCommunesByPrincipale(communes: Commune[]): CommunesGrouped {
  const grouped: CommunesGrouped = {};
  for (const c of communes) {
    const groupSlug = c.principaleSlug || c.slug; // secondaires regroupées par principaleSlug, principales par leur propre slug
    if (!grouped[groupSlug]) grouped[groupSlug] = [];
    grouped[groupSlug].push(c);
  }
  Object.values(grouped).forEach((arr) => arr.sort((a, b) => a.nom.localeCompare(b.nom)));
  return grouped;
}

export function getPrincipaleNames(communes: Commune[]): Record<string, string> {
  const map: Record<string, string> = {};
  for (const c of communes) {
    // une principale n'a pas de principaleSlug
    if (!c.principaleSlug) {
      map[c.slug] = c.nom; // conserve accents/casse exacts
    }
  }
  return map;
}


