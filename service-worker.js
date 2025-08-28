self.addEventListener("install", (event) => {
  console.log("Service Worker instalado!");
});

// Ativar notificações após fechar o app
self.addEventListener("activate", () => {
  console.log("SW ativado!");
  self.registration.showNotification("oiii clique aqui", {
    body: "Abra para ver uma surpresa 👀",
    icon: "icon.png",
    data: { url: "joia.html" }
  });
});

// Quando clicar na notificação
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
