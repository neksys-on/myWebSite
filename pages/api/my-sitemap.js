import { SitemapStream, streamToPromise } from 'sitemap';


export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
      cacheTime: 6000000,
    });


    // List of posts


    const links = [
      { url: `/`, changefreq: 'daily', priority: 0.9 },
      { url: `/presentation`, changefreq: 'daily', priority: 0.8 },
      { url: `/price`, changefreq: 'daily', priority: 0.7 },
      { url: `/info`, changefreq: 'daily', priority: 0.6 },
      { url: `/request`, changefreq: 'daily', priority: 0.5 },
    ];


    links.forEach(link => {
      smStream.write(link);
    });

    // End sitemap stream
    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      'Content-Type': 'application/xml'
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch(e) {
    console.log(e)
    res.send(JSON.stringify(e))
  }

}
