import './bootstrap';
import '../css/app.css';

import "primereact/resources/themes/lara-dark-amber/theme.css";
import 'primeicons/primeicons.css';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<PrimeReactProvider><App {...props} /></PrimeReactProvider>);
    },
    progress: {
        color: '#4B5563',
    },
});