<?php
class MyFunction {

	private $title, $data, $error, $failed;

	public function __construct($title, $error='', $failed=''){
		$this->title = $title;
		$this->error = $error ? $error : '';
		$this->failed = $failed ? $failed : '';
	}

	public function get_title()
	{
		return $this->title;
	}

	public function operation_data($data)
	{

		$this->data = $data;

		$looping = (int)$this->data['looping'];

		if(!$looping){
			require_once $this->error;
		}elseif($looping < 100){
			require_once $this->failed;
		}else{
			echo "Jumlah looping : {$looping} <br/>";
			echo "<div class='mt-5 row justify-content-center'>";
			for($x=1; $x <= (int)$looping; $x+=1){
				echo $this->result_looping($x);
			}
			echo "</div>";
		}

	}

	public function result_looping($data)
	{
		$angka = '';
		if($data % 3 == 0 && $data % 5 == 0){
			$angka='ApaBole';
		}elseif ($data % 5 == 0) {
			$angka='Bole';
		}elseif ($data % 3 == 0) {
			$angka='Apa';
		}else{
			$angka=$data;
		}
		return "		
		<div class='card' style='width: 10rem;'>
		<div class='card-body'>
		<h5 class='card-title'>{$angka}</h5>
		</div>
		</div>
		";

	}
}