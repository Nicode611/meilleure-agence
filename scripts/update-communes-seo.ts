/*
  Script: update-communes-seo.ts
  Objectif: Simplifier tous les fichiers JSON des communes pour ne conserver que:
    - nom
    - seo { title, description, keywords, canonical }
  + Pour les fichiers secondaires: ajouter { principale, principaleSlug }
  Usage: npx ts-node scripts/update-communes-seo.ts
*/

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

type CommuneOut = {
  nom: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
  };
  principale?: string;
  principaleSlug?: string;
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'src', 'data', 'communes');

function toSlug(input: string): string {
  return input
    .toString()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9\-\s]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function buildSeo(nom: string, slugOrId?: string): CommuneOut['seo'] {
  const place = nom;
  const slug = toSlug(slugOrId || nom);
  const title = `Meilleure agence | Comparateur d'agence immobilieres à ${place} ?`;
  const description = `Recevez 4 devis d'agence immobilière proche de ${place} avant de vous décider et économisez jusqu'à 50%`;
  const keywords = [
    `meilleure agence immobilière ${place}`,
    `comparateur agence immobilière ${place}`,
    `devis agence immobilière ${place}`,
    `estimation immobilière ${place}`,
    `agent immobilier ${place}`,
  ].join(', ');
  const canonical = `https://meilleure-agence.be/${slug}`;
  return { title, description, keywords, canonical };
}

function transformFile(filePath: string) {
  const raw = fs.readFileSync(filePath, 'utf8');
  let json: any;
  try {
    json = JSON.parse(raw);
  } catch (e) {
    console.error(`JSON invalide: ${filePath}`);
    return;
  }

  if (!Array.isArray(json.communes)) {
    console.warn(`Aucune clé communes[] dans ${filePath}`);
    return;
  }

  const secondaryRegex = /secondaires\/.*communes-([a-z0-9\-]+)\.json$/i;
  const isSecondaire = secondaryRegex.test(filePath);
  let principaleName: string | undefined;
  let principaleSlug: string | undefined;
  if (isSecondaire) {
    const match = filePath.match(secondaryRegex);
    principaleSlug = match?.[1];
    if (principaleSlug) {
      principaleName = principaleSlug
        .split('-')
        .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
        .join(' ')
        .replace(/\bDe\b|\bDu\b|\bDes\b/gi, (m) => m.toLowerCase());
    }
  }

  const simplified: CommuneOut[] = json.communes.map((c: any) => {
    const nom: string = c.nom || c.name || '';
    const slug: string | undefined = c.slug || c.id;
    const base: CommuneOut = {
      nom,
      seo: buildSeo(nom, slug),
    };
    if (isSecondaire && principaleName && principaleSlug) {
      base.principale = principaleName;
      base.principaleSlug = principaleSlug;
    }
    return base;
  });

  const output = JSON.stringify({ communes: simplified }, null, 2) + '\n';
  fs.writeFileSync(filePath, output, 'utf8');
  console.log(`OK ${path.relative(ROOT, filePath)} (${simplified.length})`);
}

function walkDir(dir: string) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const p = path.join(dir, item.name);
    if (item.isDirectory()) walkDir(p);
    else if (item.isFile() && item.name.endsWith('.json')) transformFile(p);
  }
}

function main() {
  if (!fs.existsSync(DATA_DIR)) {
    console.error('Dossier communes introuvable:', DATA_DIR);
    process.exit(1);
  }
  walkDir(DATA_DIR);
}

main();


