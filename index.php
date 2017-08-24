<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <div id="main-content">
      <div class="news-container">
        <a class="news-overlay" href="" target="_blank">
            <p class="text-overlay">news headline Goes Here, This Is A Sample. news headline Goes Here, This Is A Sample</p>
            <p class="news-source">AP News</p>
        </a>
      </div>
      <?php
      $url = "https://newsapi.org/v1/articles?source=associated-press&sortBy=top&apiKey=e82d1e3a8d12464ea931d1372996ddf7";

      //$url = 'http://localhost:8080/stocks';
      $ch = curl_init($url);
      curl_setopt($ch, CURLOPT_TIMEOUT, 5);
      curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      $data = curl_exec($ch);
      curl_close($ch);
      $data = json_decode($data, true);
      //var_dump($data['articles']['1']);

      foreach ($data['articles'] as $v) {
        //echo '<p><img src="' . $v['urlToImage'] . '"/><br><strong>' . $v['title'] . '</strong></p>';
        echo '<div class="news-container" style="background-image: url(\'' . $v['urlToImage'] . '\'); background-size:cover; background-position:center;">
          <a class="news-overlay" href="' . $v['url'] . '" target="_blank">
              <p class="text-overlay">' . $v['title'] . '</p>
          </a>
        </div>';
      }

      ?>

    </div>
    <div id="menu-bar">

    </div>


  <script src="js/jquery-3.2.1.min.js" charset="utf-8"></script>
  <script src="js/functions.min.js" charset="utf-8"></script>
  </body>
</html>
