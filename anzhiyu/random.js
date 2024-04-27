var posts=["posts/63297.html","posts/16107.html","posts/56620.html","posts/33512.html","posts/7909.html","posts/8527.html","posts/41756.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };