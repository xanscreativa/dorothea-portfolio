export function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dorothea Alexandra Manuputty',
    jobTitle: 'Graphic Designer & Video Editor',
    url: 'https://xansstudio.com',
    sameAs: [
      // Add professional social links here
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'XANS Studio',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}