<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if(isset($_POST['preferences'])){
  $preferences = $_POST['preferences'];
  $find = array("\"", "[", "]");
  $preferences = str_replace($find, "", $preferences);

  $news_array =  array();

  foreach ($preferences as $v) {
    $url = "https://newsapi.org/v1/articles?source=" . $v . "&sortBy=top&apiKey=e82d1e3a8d12464ea931d1372996ddf7";
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_TIMEOUT, 5);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $data = curl_exec($ch);
    curl_close($ch);
    $data = json_decode($data, true);

    $status = $data['status'];
    $source = $data['source'];
    $source = str_replace("-", " ", $source);
    $i = 0;
    foreach ($data['articles'] as $v) {
      $add_news = '<div class="news-container animated fadeIn" style="background-image: url(\'' . $v['urlToImage'] . '\'); background-size:cover; background-position:center;">
        <a class="news-overlay" href="' . $v['url'] . '" target="_blank">
            <p class="text-overlay">' . $v['title'] . '<br><small>' . $source . '</small></p>
            <p class="text-overlay-description">' . $v['description'] . '<br><small>' . $source . '</small></p>
        </a>
      </div>';
      $news_array[] = $add_news;
      if ($i >= 4) {
        break;
      }
      $i++;
    }
  }
  shuffle($news_array);
  foreach ($news_array as $news) {
    echo $news;
  }
}else {
  echo "An Error Has Occured :(";
}

?>
