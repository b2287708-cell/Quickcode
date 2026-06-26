// عامل الخدمة (Service Worker) لجعل الموقع تطبيق PWA
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
    // يسمح للتطبيق بالعمل بسلاسة
});