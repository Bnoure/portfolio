import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { NextApiRequest, NextApiResponse } from 'next';

interface Projet {
    id: string;
    modifiedDate: string;
}

interface SitemapLink {
    url: string;
    changefreq: string;
    priority: number;
    lastmod?: string;
}

const fetchProjets = async (): Promise<Projet[]> => {
    return [
        { id: '1', modifiedDate: '2021-01-01' },
        { id: '2', modifiedDate: '2021-02-01' }
    ];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { locale } = req.query; // Extraction de la locale depuis la requête

    const hostname = `https://exemple.com/${locale}`; // Ajout de la locale au hostname
    const smStream = new SitemapStream({ hostname });

    const links: SitemapLink[] = [
        { url: '/', changefreq: 'daily', priority: 1 },
        { url: '/about', changefreq: 'monthly', priority: 0.8 },
        { url: '/projets', changefreq: 'monthly', priority: 0.8 }
    ];

    const projets = await fetchProjets();
    projets.forEach(projet => {
        links.push({
            url: `/projets/${projet.id}`,
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: projet.modifiedDate
        });
    });

    // Conversion des liens en un flux XML
    Readable.from(links).pipe(smStream).on('end', () => {
        res.end();
    });

    // Commencez à envoyer l'en-tête XML
    res.writeHead(200, { 'Content-Type': 'application/xml' });
    const sitemapOutput = await streamToPromise(smStream);
    res.write(sitemapOutput);
    res.end();
}
