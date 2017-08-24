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
var_dump($data['articles']['1']);

foreach ($data['articles'] as $v) {
  echo '<p><img src="' . $v['urlToImage'] . '"/><br><strong>' . $v['title'] . '</strong></p>';
  echo '<div class="news-container" style="background-image: url(\'' . $v['urlToImage'] . '\')">
    <div class="news-overlay">
        <p class="text-overlay">' . $v['title'] . '</p>
    </div>
  </div>';
}

?>
