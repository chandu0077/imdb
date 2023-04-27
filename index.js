$(document).ready(function () {
  //   var title = $(".title").text();

  $("#title_movie").click(function () {
    // functionality for tabs
    $("#title_movie").addClass("common_click");
    $("#title_id").removeClass("common_click");
    $("#title_n_year").removeClass("common_click");

    //functionality for search bar
    $("#titleSearch").show();
    $("#yearSearch").hide();
    $("#idSearch").hide();
  });

  $("#title_n_year").click(function () {
    // functionality for tabs
    $("#title_n_year").addClass("common_click");
    $("#title_movie").removeClass("common_click");
    $("#title_id").removeClass("common_click");

    // functionality for search bar

    $("#titleSearch").hide();
    $("#yearSearch").show();
    $("#idSearch").hide();
  });
  $("#title_id").click(function () {
    // functionality for tabs
    $("#title_id").addClass("common_click");
    $("#title_n_year").removeClass("common_click");
    $("#title_movie").removeClass("common_click");

    //functionality for search bar
    $("#titleSearch").hide();
    $("#yearSearch").hide();
    $("#idSearch").show();
  });

  $("#casting").click(function () {
    //functionality for tab bg-color change
    $("#casting").addClass("commonTwoHeading");
    $("#imdbDetailMovie").removeClass("commonTwoHeading");
    $("#more").removeClass("commonTwoHeading");

    //functionality for data display
    $("#aboutCasting").show();
    $("#aboutImdbDetails").hide();
    $("#aboutMore").hide();
  });

  $("#imdbDetailMovie").click(function () {
    //functionality for tab bg-color change
    $("#casting").removeClass("commonTwoHeading");
    $("#imdbDetailMovie").addClass("commonTwoHeading");
    $("#more").removeClass("commonTwoHeading");

    //functionality for data display
    $("#aboutCasting").hide();
    $("#aboutImdbDetails").show();
    $("#aboutMore").hide();
  });

  $("#more").click(function () {
    //functionality for tab bg-color change
    $("#casting").removeClass("commonTwoHeading");
    $("#imdbDetailMovie").removeClass("commonTwoHeading");
    $("#more").addClass("commonTwoHeading");

    //functionality for data display
    $("#aboutImdbDetails").hide();
    $("#aboutMore").hide();
    $("#aboutMore").show();
  });

  $("#titleSearchBtn").click(function () {
    var title = $("#input1").val();

    var link = "https://www.omdbapi.com/?t=" + title + "&apikey=a74025be";
    console.log("/////", title);
    getResponse(link);
  });

  $("#searchYearBtn").click(function () {
    var title = $("#title").val();
    var year = $("#year").val();
    var link =
      "https://www.omdbapi.com/?t=" + title + "y=" + year + "&apikey=a74025be";

    getResponse(link);
  });

  function getResponse(link) {
    var pageOne = $("#pageOne");

    $.ajax({
      type: "GET",
      url: link,
      success: (response) => {
        console.log("success", response);
        pageOne.hide();

        $("#pageOne").hide();
        $("#pageTwo").show();

        $("#aboutCasting").show();
        $("#aboutImdbDetails").hide();
        $("#aboutMore").hide();

        // console.log("😊😊😊", response);
        var movieTitle = $(".movieTitle");
        var movieType = $(".movieType");
        var moviePoster = $(".moviePoster");
        var movieReleased = $(".movieReleased");
        var movieLanguage = $(".movieLanguage");
        var movieRuntime = $(".movieRuntime");
        var movieGenre = $(".movieGenre");
        var moviePlot = $(".moviePlot");
        var movieActors = $(".movieActors");
        var movieDirector = $(".movieDirector");
        var movieWriter = $(".movieWriter");
        var movieYear = $(".movieYear");

        var imdbId = $(".imdbID");
        var imdbRating = $(".imdbRating");
        var imdbVotes = $(".imdbVotes");
        var metaScore = $(".metaScore");
        var country = $(".country");
        var awards = $(".awards");
        var dvd = $(".dvd");
        var boxOffice = $(".boxOffice");
        var production = $(".production");
        var website = $(".website");

        movieTitle.text(response.Title);
        movieType.text(response.Type);
        moviePoster.attr("src", response.Poster);
        movieReleased.text(response.Released);
        movieLanguage.text(response.Language);
        movieRuntime.text(response.Runtime);
        movieGenre.text(response.Genre);
        moviePlot.text(response.Plot);
        movieActors.text(response.Actors);
        movieDirector.text(response.Director);
        movieWriter.text(response.Writer);
        movieYear.text(response.Year);
        imdbId.text(response.imdbID);
        imdbRating.text(response.imdbRating);
        imdbVotes.text(response.imdbVotes);
        metaScore.text(response.Metascore);
        country.text(response.Country);
        awards.text(response.Awards);
        dvd.text(response.DVD);
        boxOffice.text(response.BoxOffice);
        production.text(response.Production);
        website.text(response.Website);
      },
      timeout: 5000,
      error: (request, errorType, errorMessage) => {
        console.log("error", errorMessage, errorType);
        pageOne.hide();
        // if (errorType === "timeout") {
        //   //   $(".time-out").show();
        // } else {
        //   console.log("success");
        // }
      },
    });
  }
  //   var url = "http://www.omdbapi.com/?t=hello"

  //   var blogUrl = "http://www.chanduBlog.com/blog/243/"

  //   http://www.chanduBlog.com/shoes/

  //   http://www.chanduBlog.com/?type="shoes"

  //   http://www.omdbapi.com/?i=tt3896198&apikey=a74025be

  //https://www.omdbapi.com/?t=hello&apikey=ec77ca9c
});
