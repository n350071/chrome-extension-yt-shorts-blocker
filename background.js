chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = new URL(details.url);
    if (url.pathname.startsWith('/shorts/')) {
      return { redirectUrl: "about:blank" };
    }
  },
  { urls: ["*://www.youtube.com/shorts/*"] },
  ["blocking"]
);
