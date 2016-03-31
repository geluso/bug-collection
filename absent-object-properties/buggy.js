var data = require("./reddit_search.json");

function buggy() {
  // Iterate through reddit search results and try to print images.
  data.data.children.forEach(function(item) {
    console.log(item.data.preview.images[0].source.url);
  });
}

function working() {
  data.data.children.forEach(function(item) {
    // only print the image source if the object has a preview property.
    if (item.data.preview) {
      console.log(item.data.preview.images[0].source.url);
    }
  });
}

// run the working version if any argument is provided.
if (process.argv[2]) {
  working();
} else {
  buggy();
}
