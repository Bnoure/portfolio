import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { NextApiRequest, NextApiResponse } from 'next';

interface Projet {
    slug: string; // Utilisez `slug` pour identifier les projets plutôt que `id`
}

const fetchProjets = async (): Promise<Projet[]> => {
    return [
        { slug: 'portfolio' },
        { slug: 'secondround' },
        { slug: 'arc' },
        { slug: 'rental' },
        { slug: 'koalapp' }
    ];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { locale } = req.query as { locale?: string };
    const hostname = `https://www.codeflownb.com/${locale ? `${locale}/` : ''}`;

    const smStream = new SitemapStream({ hostname });
    const projets = await fetchProjets();

    const links = [
        { url: '/', changefreq: 'daily', priority: 1, lastmodISO: new Date().toISOString() },
        { url: '/about', changefreq: 'monthly', priority: 0.8, lastmodISO: new Date().toISOString() },
        { url: '/projets', changefreq: 'monthly', priority: 0.8, lastmodISO: new Date().toISOString() },
        // Ajoutez d'autres pages statiques si nécessaire
    ];

    projets.forEach(projet => {
        links.push({
            url: `/projets/${projet.slug}`,
            changefreq: 'monthly',
            priority: 0.7,
            lastmodISO: new Date().toISOString() // Supposons que vous mettez à jour la dernière modification lors de l'exécution de cette fonction
        });
    });

    // Gérer les locales pour les URL
    const locales = ['en', 'fr', ''];
    locales.forEach(loc => {
        links.forEach(link => {
            smStream.write({ ...link, url: `/${loc}${link.url}`.replace('//', '/') });
        });
    });

    // Stream les liens au sitemap
    Readable.from(links).pipe(smStream).on('end', () => {
        res.end();
    });

    res.writeHead(200, { 'Content-Type': 'application/xml' });
    const sitemapOutput = await streamToPromise(smStream);
    res.write(sitemapOutput);
    res.end();
}
