<!DOCTYPE html>
<html lang="en"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <title><?php bloginfo('name');?></title>
	<!-- Metropolia - Web Development Basics 
	  - This page test some html 5 tags -->
	<!-- author: Patrick Ausderau <patrick [dot] ausderau [at] metropolia [dot] fi> -->
    <!-- IE <= 8 don't support HTML 5 :( -->
    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url');?>">
  </head>
  <body>

<header id="firstHeader">
  		<hgroup>
  			<h1><abbr title="Hypertext Markup Language">HTML 5</abbr> structure and multimedia</h1>
  			<h2>A &lt;header&gt; section can contain headers</h2>
  			<h3>Grouped together in a &lt;hgroup&gt; sub-section</h3>
  		</hgroup>
  		<nav>
			<?php
			wp_nav_menu();
			
			?>
		</nav>
  	</header>