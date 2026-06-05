const DEV_TO_USERNAME = "sxryadipta"; 

async function loadArticles() {
  const container = document.getElementById("dev-articles");
  const res = await fetch(
    `https://dev.to/api/articles?username=${DEV_TO_USERNAME}&per_page=5`
  );
  const articles = await res.json();
  container.innerHTML = articles.map(a => `<samp><a href="${a.url}">${a.title}</a></samp>`).join("<br>");
   
}

document.addEventListener("DOMContentLoaded", loadArticles);