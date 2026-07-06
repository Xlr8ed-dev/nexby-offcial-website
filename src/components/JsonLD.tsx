import { Helmet } from "react-helmet-async";

interface JsonLDProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Renders a JSON-LD <script type="application/ld+json"> block via Helmet
 * so it is captured by react-snap prerendering and visible to crawlers.
 *
 * Usage:
 *   <JsonLD schema={organizationSchema} />
 *   <JsonLD schema={[organizationSchema, faqSchema]} />
 */
const JsonLD = ({ schema }: JsonLDProps) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(Array.isArray(schema) ? schema : schema)}
      </script>
    </Helmet>
  );
};

export default JsonLD;
