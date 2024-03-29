$(function () {
  //Scrollable links
  $("a.scroll-link").click(function () {
    var offset = -$("#main-nav").height();
    $.scrollTo($(this).attr("href"), {
      duration: 500,
      offset: offset,
    });
    return false;
  });

  //Scroll animation
  AOS.init({
    offset: 0,
    duration: 800,
    disable: "mobile",
  });

  //Misc
  $("[data-copy-to]").each(function () {
    $($(this).attr("data-copy-to")).html($(this).html());
  });

  //Phones
  var zi = 500;
  $(".header-phone-no")
    .mouseenter(function () {
      zi++;
      var el = $("#" + $(this).attr("data-target"));
      el.addClass("active");
      el.find(".header-phone-pic").css({ zIndex: zi });
    })
    .mouseleave(function () {
      $("#" + $(this).attr("data-target")).removeClass("active");
    });

  function bsIs(env) {
    return $("#environment-" + env).is(":visible");
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js").then(
      function (registration) {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}
