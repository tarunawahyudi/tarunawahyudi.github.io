import {addSection} from "../components/blogComp";

export async function load() {
  try {

    const category = 'tekno';
    const response = await fetch(`https://api-berita-indonesia.vercel.app/antara/${category}`)
    const responseJson = await response.json();

    const posts = responseJson.data.posts;
    console.log(posts)

    posts.forEach(post => {
      addSection(post, 'blog_page');
    })
  } catch (e) {
    console.error(`there was an error: ${e}`);
  }
}
