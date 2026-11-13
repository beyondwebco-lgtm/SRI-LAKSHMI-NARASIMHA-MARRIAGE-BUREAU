import './globals.css';

export const metadata = {
  title: 'SRI LAKSHMI NARASIMHA MARRIAGE BUREAU | Pabboju Swathi | Amberpet, Hyderabad',
  description: 'Sri Lakshmi Narasimha Marriage Bureau - Bringing Hearts Together, Creating Relationships for a Lifetime. Under the leadership of State Secretary Pabboju Swathi. Specializing in Chary\'s and All Caste Marriages. Sivashakthi Marriage Bureau Welfare Association Regd. No: 596/2026. Patel Nagar, Amberpet, Hyderabad.',
  keywords: [
    'Sri Lakshmi Narasimha Marriage Bureau',
    'Marriage Bureau Hyderabad',
    'Pabboju Swathi',
    'Chary Marriage Bureau',
    'Amberpet Marriage Bureau',
    'Sivashakthi Marriage Bureau Welfare Association',
    'Telugu Matrimonial Services',
    'All Caste Marriages Hyderabad',
    'Software Engineer Matrimony',
    'Doctor Matrimony',
    'NRI Matrimony Hyderabad',
    'Regd No 596/2026',
  ],
  authors: [{ name: 'Pabboju Swathi - State Secretary' }],
  metadataBase: new URL('https://srilakshminarasimhamarriagebureau.com'),
  openGraph: {
    title: 'SRI LAKSHMI NARASIMHA MARRIAGE BUREAU | Traditional Matrimonial Services',
    description: 'Trusted matrimonial match-making for Chary\'s and all castes. Affiliated with Sivashakthi Marriage Bureau Welfare Association (Regd. No: 596/2026). Contact: 9100328050.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Sri Lakshmi Narasimha Marriage Bureau',
  },
};

export const viewport = {
  themeColor: '#800000',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🪔</text></svg>" />
      </head>
      <body className="bg-cream-100 text-darkbrown-800 antialiased selection:bg-gold-300 selection:text-maroon-900">
        {children}
      </body>
    </html>
  );
}

