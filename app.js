function http() {
  return {
    get(url) {
      try {
        fetch(url)
          .then((res) => res.json())
          .then((post) => {
            console.log(post);
            return post;
          });
      } catch (err) {
        return Promise.reject(err);
      }
    },

    post(
      url,
      body = {
        id: 101,
        title: "foo",
        body: "bar",
        userId: 1,
      }
    ) {
      try {
        fetch(url, {
          method: "POST",
          body: JSON.stringify({ body }),
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((post) => {
            console.log(post);
            return post;
          });
      } catch (err) {
        return Promise.reject(err);
      }
    },

    put(
      url,
      body = {
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1,
      }
    ) {
      try {
        fetch(url, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ body }),
        })
          .then((res) => res.json())
          .then((post) => {
            console.log(post);
            return post;
          });
      } catch (err) {
        Promise.reject(err);
      }
    },

    delete(url) {
      try {
        fetch(url, { method: "DELETE" });
      } catch (err) {
        Promise.reject(err);
      }
    },
  };
}

const Mhttp = http();

Mhttp.get("https://jsonplaceholder.typicode.com/posts/1");
Mhttp.post("https://jsonplaceholder.typicode.com/posts");
Mhttp.put("https://jsonplaceholder.typicode.com/posts/1");
