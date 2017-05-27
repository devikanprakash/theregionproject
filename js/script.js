$('[data-svg-url]').each(function(){
			var duration= $(this).data('vivus-duration')||150;
			var type= $(this).data('vivus-type')||'delayed';
			new Vivus(this, {
				duration:duration, 
				type:type, 
				file:$(this).data('svg-url')
			});
		});