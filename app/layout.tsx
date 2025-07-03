import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dr. Navjot Simi IPS - Official Profile & UPSC Guidance',
  description: 'Official website of Dr. Navjot Simi IPS Officer. Comprehensive guidance for civil services aspirants, citizen services, and community engagement.',
  keywords: 'Dr. Navjot Simi, IPS Officer, UPSC preparation, civil services, police officer, mentorship, education, Bihar Police, DSP Patna',
  authors: [{ name: 'Dr. Navjot Simi IPS' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover',
  robots: 'index, follow',
  themeColor: '#1e293b',
  colorScheme: 'dark',
  openGraph: {
    title: 'Dr. Navjot Simi IPS - Official Profile & UPSC Guidance',
    description: 'IPS Officer | Comprehensive guidance for civil services aspirants',
    type: 'website',
    locale: 'en_IN',
    images: ['/image.png'],
    siteName: 'Dr. Navjot Simi IPS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Navjot Simi IPS',
    description: 'IPS Officer | Civil Services Guidance',
    images: ['/image.png'],
    creator: '@siminavjot',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Dr. Navjot Simi IPS',
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Dr. Navjot Simi IPS',
    'application-name': 'Dr. Navjot Simi IPS',
    'msapplication-TileColor': '#1e293b',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#1e293b',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* PWA and Mobile App Support */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1e293b" />
        
        {/* iOS Splash Screens */}
        <link rel="apple-touch-startup-image" href="/splash-2048x2732.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/splash-1668x2224.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/splash-1536x2048.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/splash-1125x2436.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/splash-1242x2208.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/splash-750x1334.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/splash-640x1136.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        
        {/* Android Chrome */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.pexels.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//images.pexels.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/image.png" as="image" type="image/png" />
        <link rel="preload" href="/image copy.png" as="image" type="image/png" />
      </head>
      <body className={`${inter.className} antialiased safe-area-top safe-area-bottom`}>
        <div id="root" className="min-h-screen">
          {children}
        </div>
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
        
        {/* Mobile App Install Prompt */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              let deferredPrompt;
              window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                deferredPrompt = e;
                // Show install button or banner
                const installBanner = document.createElement('div');
                installBanner.innerHTML = \`
                  <div style="position: fixed; bottom: 20px; left: 20px; right: 20px; background: #1e293b; color: white; padding: 16px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); z-index: 1000; display: flex; align-items: center; justify-content: space-between;">
                    <div>
                      <div style="font-weight: bold; margin-bottom: 4px;">Install Dr. Navjot Simi IPS App</div>
                      <div style="font-size: 14px; opacity: 0.8;">Get quick access to UPSC resources and citizen services</div>
                    </div>
                    <button id="installBtn" style="background: #3b82f6; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; margin-left: 12px;">Install</button>
                    <button id="dismissBtn" style="background: transparent; color: white; border: none; padding: 8px; margin-left: 8px; opacity: 0.6;">✕</button>
                  </div>
                \`;
                document.body.appendChild(installBanner);
                
                document.getElementById('installBtn').addEventListener('click', () => {
                  deferredPrompt.prompt();
                  deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                      console.log('User accepted the install prompt');
                    }
                    deferredPrompt = null;
                    installBanner.remove();
                  });
                });
                
                document.getElementById('dismissBtn').addEventListener('click', () => {
                  installBanner.remove();
                });
              });
            `,
          }}
        />
      </body>
    </html>
  );
}