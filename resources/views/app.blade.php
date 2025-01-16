<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Zehir Motor - Adana'nın en güvenilir motosiklet yedek parça mağazası. Geniş ürün yelpazemiz ve uygun fiyatlarımızla hizmetinizdeyiz.">
        <meta name="keywords" content="motosiklet yedek parça, motor parçaları, Adana motor yedek parça, Zehir Motor, motosiklet aksesuarları">
        <meta name="author" content="Zehir Motor">
        <meta name="robots" content="index, follow">
        <meta property="og:title" content="Zehir Motor - Motosiklet Yedek Parça">
        <meta property="og:description" content="Adana'nın en güvenilir motosiklet yedek parça mağazası. Geniş ürün yelpazemiz ve uygun fiyatlarımızla hizmetinizdeyiz.">
        <meta property="og:image" content="{{ asset('logo.png') }}">
        <meta property="og:url" content="{{ url('/') }}">
        <meta property="og:type" content="website">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Zehir Motor - Motosiklet Yedek Parça">
        <meta name="twitter:description" content="Adana'nın en güvenilir motosiklet yedek parça mağazası. Geniş ürün yelpazemiz ve uygun fiyatlarımızla hizmetinizdeyiz.">
        <meta name="twitter:image" content="{{ asset('logo.png') }}">
        
        <title inertia>{{ config('app.name', 'Zehir Motor') }}</title>

        <!-- Canonical URL -->
        <link rel="canonical" href="{{ url('/') }}">

        <!-- Favicon and PWA Icons -->
        <link rel="icon" type="image/png" href="/logo.png">
        <link rel="apple-touch-icon" href="/logo.png">
        <meta name="theme-color" content="#eab308">

        <!-- PWA Manifest -->
        <link rel="manifest" href="/manifest.json">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead

        <!-- Google Analytics -->
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5B9Q9SZJ6H"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
        </script>
    </head>
    <body class="font-sans antialiased">
        <noscript>Bu web sitesini tam olarak görüntüleyebilmek için JavaScript'i etkinleştirmeniz gerekmektedir.</noscript>
        @inertia
    </body>
</html>
