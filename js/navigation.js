// -------------------------------------
// Template: JS > Navigation
// -------------------------------------


// Toggles class open to display/hide the whole navigation
$( ".navigation-list, body" ).addClass( "closed" );

$( ".nav-toggle" ).click(function() {
	$( ".navigation-list, body" ).toggleClass( "open" ).toggleClass( "closed" );
});


// Togglse class open to display/hide folders
$( ".navigation-item.folder .item-name--parent" ).each(function() {
	$( this ).click(function() {
			$( this ).parent( ".navigation-item.folder" ).toggleClass( "open" );
	});
});
