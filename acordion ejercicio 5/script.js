$(document).ready(function(){
	if($('.acordion').lenght != 0){ acordion(); }
});



function acordion(){
	prepareLayout();
	$('.tab_title').click(function(){
		var thisTab = $(this).parents('.tab_wrap');
		openTab(thisTab);
	});
}

function prepareLayout(){
	$('.acordion > div').each(function(){
		var thisTab = $(this);
		var thisText = thisTab.html();
		var thisTitle = thisTab.data('actitle');

		thisTab.addClass('tab_wrap');
		thisTab.html('');
		thisTab.append('<div class="tab_title">'+thisTitle+'</div>');
		thisTab.append('<div class="tab_content collapsedTab"><div class="tab_content_inner">'+thisText+'</div></div>');
	});
}

function openTab(thisTab){
	$('.tab_content').addClass('collapsedTab');
	thisTab.children('.tab_content').removeClass('collapsedTab');


	$('.tab_content.collapsedTab').hide(400);

	if(thisTab.children('.tab_content').hasClass('visibleTab')){
		$('.tab_content').removeClass('visibleTab');
		thisTab.children('.tab_content').hide(400);
	}else{
		$('.tab_content').removeClass('visibleTab');
		thisTab.children('.tab_content').addClass('visibleTab');
		thisTab.children('.tab_content').show(400);
	}
}