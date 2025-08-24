async function getBlogs() {
  const response = await fetch("https://test-api-v1-vert.vercel.app/v1/blogs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log({ data });
  const heroCards = document.querySelector("#home .cards");

  const cards = data.map((blog) => {
    return `
        <div class="card" id="${blog.id}">
          <div class="image">
            <img src="${blog.image}" alt="${blog.title}" />
          </div>
          <h3>
          ${blog.title}
          </h3>
          <div class="avatar">
            <img src="${blog.authorImage}" alt="${blog.author}" />
            <span>${blog.author}</span>
          </div>
          <p class="description">
            ${blog.description}
          </p>
          <div class="read-more">
            <a href="/blog/${blog.id}">read more</a>
            <div>
              <i class="fa-solid fa-eye"></i>
              <span>${blog.viewers}</span>
            </div>
          </div>
        </div>
    `;
  });

  heroCards.innerHTML = cards.join("");
}

getBlogs();

async function getArticles() {
  const response = await fetch(
    "https://test-api-v1-vert.vercel.app/v1/articles",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  console.log({ data });
  const marketingCards = document.querySelector(".marketing .marketing-cards");

  const cards = data.map((article) => {
    return `
        <div class="card" id="${article.id}">
          <div class="image">
            <img src="${article.image}" alt="${article.title}" />
          </div>
          <h3>
          ${article.title}
          </h3>
          <p class="description">
          ${article.description}
          </p>
          <div class="price-avatar">
            <div class="avatar">
              <img src="${article.authorImage}" alt="${article.author}" />
            <span>${article.author}</span>
            </div>
            <div>
              <span class="discount">455%</span>
              <span class="price">$${article.price}</span>
            </div>
          </div>
        </div>
    `;
  });

  marketingCards.innerHTML = cards.join("");
}

getArticles();

/**
 *
 *
 * two
 * four
 * one
 * fife
 * three
 *
 */
