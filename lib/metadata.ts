


interface Metadata {
  title: string;
  description: string;
  keywords?: string[];
  authors?: { name: string; url: string }[];
  openGraph?: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    locale: string;
    type: string;
    images?: { url: string; width: number; height: number; type: string }[];
  };

  verification?: {
    google?: string;
    yandex?: string;
  };
  metadataBase: URL;
  favicon?: string;
}

export const createMetadata = (data: {
  title: string;
  description: string;
  keywords?: string[];
  exactUrl?: string;
  image?: string;
}): Metadata => {
  const { title, description, keywords, exactUrl, image } = data;

  const metadata: Metadata = {
    title,
    description,
    keywords,
    authors: [{ name: 'Benkerroum Nour-Eddine', url: 'https://codeflownb.com' }],
    openGraph: {
      title,
      description,
      url: exactUrl || 'https://codeflownb.com',
      siteName: title,
      locale: 'fr-FR',
      type: 'website',
      images: image ? [{ url: image, width: 1200, height: 630, type: 'image/jpeg' }] : undefined,
    },

    verification: {
      google: 's1HiFJgqXcjTp-SIqXD9ink5akEzXyyGc45b2S1x7EM',
      yandex: '75318e4097177399',
    },
    metadataBase: new URL('https://codeflownb.com'),

    favicon: '/favicon.ico',
  };

  return metadata;
};
