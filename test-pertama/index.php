<?php 
require_once(dirname(__FIlE__).'/MyFunctions.php');
$heading = new MyFunction("ApaBole");
$title = new MyFunction("Dana Bagus Indonesia");
$input_data = new  MyFunction("Hasil Looping", 'partial/error.php', 'partial/failed.php');
?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
     <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <title>
     Test <?=$title->get_title() ?>
    </title>
  </head>
  <body>

    <div class="container">
      <!-- Row introduction and form input looping -->
      <div class="row justify-content-center">
        <div class="col-lg-12 col-xs-12 col-sm-12">
          <h1 class="text-center mt-5">Program kecil bernama "<?=$heading->get_title(); ?>" </h1>
          <center>
            <blockquote class="blockquote-footer mt-3 text-justify">
              Program ini akan mencetak baris angka sesuai jumlah looping yang anda inginkan, <br>  
              <strong>Minimal jumlah looping angka yang di inputkan adalah <cite>100 atau > dari</cite>  </strong>
            </blockquote>
          </center>
        </div>

        <div class="col-lg-4 col-xs-6 col-sm-6">
          <?php require_once(dirname(__FIlE__).'./partial/Form.php') ?>
        </div>
      </div>

      <!-- Row hasil looping -->
      <div class="row justify-content-center">
        <div class="col-lg-12 col-xs-12 col-sm-12">
          <?php if(isset($_REQUEST['start'])): ?>
            <h4 class="text-secondary">
              <?=$input_data->get_title() ?>
            </h4>
            <!-- Jalankan fungsi looping  dari form innpuut -->
            <?=$input_data->operation_data($_REQUEST)?>

          <?php endif; ?>
        </div>
      </div>
      
    </div>
    

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

  </body>
</html>
