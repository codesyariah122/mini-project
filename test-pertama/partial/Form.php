<form action="<?php $_SERVER['PHP_SELF']?>" method="post">
	<div class="mb-3 mt-3">
		<p class="text-lead">
			Input jumlah looping angka yang anda inginkan dari form di bawah ini
		</p>
		<label for="looping" class="form-label">Masukan Jumlah Looping <small class="text-danger">
			(*minimal 100 atau lebih dari)
		</small></label>
		<input type="number" name="looping" class="form-control" id="looping" placeholder="(100 or >)">
	</div>
	<div class="mb-3">
		<div class="d-grid gap-2">
			<button type="submit" class="btn btn-primary rounded-pill" name="start">Start Looping</button>
			<button type="reset" class="btn btn-dark rounded-pill">Reset</button>
		</div>
	</div>
</form>
