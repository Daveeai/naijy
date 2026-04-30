document.addEventListener("DOMContentLoaded", function () {

  var container          = document.getElementById("categories");
  var coreContainer      = document.getElementById("core-platforms");
  var strategicContainer = document.getElementById("strategic-platforms");

  if (!container || !coreContainer || !strategicContainer) {
    console.error("One or more containers missing in HTML.");
    return;
  }

  // =============================
  // Platform Stats
  // =============================
  var statCategories = document.getElementById("stat-categories");
  var statSpecial    = document.getElementById("stat-special");
  var statStrategic  = document.getElementById("stat-strategic");

  if (statCategories) statCategories.textContent = categories.length;
  if (statSpecial)    statSpecial.textContent    = corePlatforms.length;
  if (statStrategic)  statStrategic.textContent  = strategicPlatforms.length;

  // =============================
  // Render Categories
  // =============================
  categories.forEach(function(cat) {

    var tile = document.createElement("div");
    tile.classList.add("category-tile");

    var title = document.createElement("h3");
    title.textContent = cat.name;
    tile.appendChild(title);

    var desc = document.createElement("p");
    desc.classList.add("category-description");
    desc.textContent = cat.description;
    tile.appendChild(desc);

    var count = document.createElement("p");
    count.classList.add("category-count");
    count.textContent = cat.platforms.length + " platforms";
    tile.appendChild(count);

    var list = document.createElement("ul");
    list.classList.add("platform-list");

    cat.platforms.forEach(function(p) {

      var li = document.createElement("li");
      var platformId = p.name.toLowerCase().replace(/\s+/g, "");

      li.innerHTML =
        '<a href="platform.html?platform=' + platformId + '" class="platform-link">' +
        '<strong>' + p.name + '</strong> <em>' + p.tag + '</em>' +
        '</a>';

      list.appendChild(li);
    });

    tile.appendChild(list);
    container.appendChild(tile);
  });

  // =============================
  // Render Special Platforms
  // =============================
  corePlatforms.forEach(function(core) {

    var tile = document.createElement("div");
    tile.classList.add("core-tile");

    var platformId = core.name.toLowerCase().replace(/\s+/g, "");

    tile.innerHTML =
      '<a href="platform.html?platform=' + platformId + '" class="platform-link">' +
      '<h3>' + core.name + '</h3>' +
      '<p class="core-line1">' + core.line1 + '</p>' +
      '<p class="core-line2">' + core.line2 + '</p>' +
      '</a>';

    coreContainer.appendChild(tile);
  });

  // =============================
  // Render Strategic Platforms
  // =============================
  strategicPlatforms.forEach(function(sp) {

    var tile = document.createElement("div");
    tile.classList.add("strategic-tile");

    var platformId = sp.name.toLowerCase().replace(/\s+/g, "");

    tile.innerHTML =
      '<a href="platform.html?platform=' + platformId + '" class="platform-link">' +
      '<h3>' + sp.name + '</h3>' +
      '<p>' + sp.line1 + '</p>' +
      '<p>' + sp.line2 + '</p>' +
      '</a>';

    strategicContainer.appendChild(tile);
  });

  // =============================
  // Search Filter
  // =============================
  var searchInput = document.getElementById("search-input");

  if (searchInput) {
    searchInput.addEventListener("input", function() {

      var query = this.value.toLowerCase().trim();
      var tiles = document.querySelectorAll(".category-tile");

      tiles.forEach(function(tile) {

        var items = tile.querySelectorAll(".platform-list li");
        var anyVisible = false;

        items.forEach(function(item) {
          var text = item.textContent.toLowerCase();
          if (!query || text.includes(query)) {
            item.style.display = "";
            anyVisible = true;
          } else {
            item.style.display = "none";
          }
        });

        tile.style.display = (!query || anyVisible) ? "" : "none";
      });

    });
  }

  // =============================
  // Click Counter
  // =============================
  var clickCount      = parseInt(localStorage.getItem("naijyClicks") || "0");
  var counterElement  = document.getElementById("total-clicks");

  if (counterElement) counterElement.textContent = clickCount;

  document.body.addEventListener("click", function(e) {
    if (
      e.target.closest(".category-tile") ||
      e.target.closest(".core-tile") ||
      e.target.closest(".strategic-tile")
    ) {
      clickCount++;
      localStorage.setItem("naijyClicks", clickCount);
      if (counterElement) counterElement.textContent = clickCount;
    }
  });

  // =============================
  // Smooth Scroll for Quick Links
  // =============================
  document.querySelectorAll('.quick-links a[href^="#"]').forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      var targetId = this.getAttribute("href").substring(1);
      var target   = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 60,
          behavior: "smooth"
        });
      }
    });
  });

});
