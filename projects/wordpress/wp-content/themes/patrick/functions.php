<?php
   if(function_exists('register_sidebar') ){
	   register_sidebar(array(
	   'name' =>"widgetArea",
	   'before_widget' => '<div id="widget">',
	   'after_widget' => '</div>'
	   ));
   }
?>