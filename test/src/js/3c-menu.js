$(document).ready(function(){
	$( ".J_MenuItem" ).each( function( index ){
		$( this ).mouseover( function(){
			
			var catTop,
				borderTop = $( this ).offset().top-184,
				viewHeight = $( ".mallCategory" ).height(),
				scrollTop = $( ".mallCategory" ).scrollTop(),
				relaxHeight = viewHeight - ( borderTop - scrollTop );
			
			$( ".border" ).css( "top", borderTop ).show();
			$( ".cat-subcategory" ).show();
			$( ".shadow div" ).hide().eq( index ).show();
			
			var catHeight = $( ".cat-subcategory" ).height();
			if( catHeight <= relaxHeight ){
				catTop = borderTop-50;
			}else if( catHeight > relaxHeight && catHeight < viewHeight ){
				catTop = scrollTop + viewHeight - catHeight - 10;
			}else{
				catTop = scrollTop + 5;
			}
			$( ".cat-subcategory" ).css( "top", catTop );
			
			$( "span" ).show();
			$( this ).find( "span" ).hide();
		});

		$( ".mallCategory" ).mouseleave( function(){
			$( ".cat-subcategory" ).hide();
			$( ".border" ).hide();
			$( "span" ).show();
		});

	});
	$( ".J_MenuItem01" ).each( function( index ){
		$( this ).mouseover( function(){
			
			var catTop,
				borderTop = $( this ).offset().top-293,
				viewHeight = $( ".mallCategory" ).height(),
				scrollTop = $( ".mallCategory" ).scrollTop(),
				relaxHeight = viewHeight - ( borderTop - scrollTop );
			
			$( ".border" ).css( "top", borderTop ).show();
			$( ".cat-subcategory" ).show();
			$( ".shadow div" ).hide().eq( index ).show();
			
			var catHeight = $( ".cat-subcategory" ).height();
			if( catHeight <= relaxHeight ){
				catTop = borderTop-50;
			}else if( catHeight > relaxHeight && catHeight < viewHeight ){
				catTop = scrollTop + viewHeight - catHeight - 10;
			}else{
				catTop = scrollTop + 5;
			}
			$( ".cat-subcategory" ).css( "top", catTop );
			
			$( "span" ).show();
			$( this ).find( "span" ).hide();
		});

		$( ".mallCategory" ).mouseleave( function(){
			$( ".cat-subcategory" ).hide();
			$( ".border" ).hide();
			$( "span" ).show();
		});

	});
	$( ".J_MenuItem02" ).each( function( index ){
		$( this ).mouseover( function(){
			
			var catTop,
				borderTop = $( this ).offset().top-133,
				viewHeight = $( ".mallCategory" ).height(),
				scrollTop = $( ".mallCategory" ).scrollTop(),
				relaxHeight = viewHeight - ( borderTop - scrollTop );
			
			$( ".border" ).css( "top", borderTop ).show();
			$( ".cat-subcategory" ).show();
			$( ".shadow div" ).hide().eq( index ).show();
			
			var catHeight = $( ".cat-subcategory" ).height();
			if( catHeight <= relaxHeight ){
				catTop = borderTop-50;
			}else if( catHeight > relaxHeight && catHeight < viewHeight ){
				catTop = scrollTop + viewHeight - catHeight - 10;
			}else{
				catTop = scrollTop + 5;
			}
			$( ".cat-subcategory" ).css( "top", catTop );
			
			$( "span" ).show();
			$( this ).find( "span" ).hide();
		});

		$( ".mallCategory" ).mouseleave( function(){
			$( ".cat-subcategory" ).hide();
			$( ".border" ).hide();
			$( "span" ).show();
		});

	});
});