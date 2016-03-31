<?php
get_header();
get_sidebar();
?>

<article>
		<?php
		    if(have_posts()):
		        while(have_posts()):
				     the_post();
					 the_content();
				endwhile;		
		    endif;
		?>
	</article>
<?php
get_footer();
?>