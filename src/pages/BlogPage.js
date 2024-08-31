import {addSection} from "../components/blogComp";

export async function load() {
  try {
    const response = await fetch('https://newsapi.org/v2/everything?q=developer&apiKey=4f4e982eef06402e80e34e880be0d7b5')
    const responseJson = await response.json();
    const articles = responseJson.articles;

    const filteredArticles = articles.filter(article => article.urlToImage);
    filteredArticles.forEach(article => {
      addSection(article, 'blog_page');
    })
  } catch (e) {
    console.error(`there was an error: ${e}`);
  }
}
