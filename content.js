function handleShortsPage() {
  if (location.pathname.startsWith("/shorts/")) {
    console.log("Redirecting from shorts page...");
    location.replace("about:blank");
  }
}

// 初回ロード時にチェック
handleShortsPage();

// YouTube のページ内遷移を検知する
window.addEventListener("yt-navigate-finish", () => {
  setTimeout(handleShortsPage, 50);
});
