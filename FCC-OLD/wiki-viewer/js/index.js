// JavaScript Document
//wiki viewer JS code
/*$("#sub-btn").click(function()
{
	$(".search").val("test");
});*/
var URL_rand = "https://en.wikipedia.org/wiki/Special:Random";
var URL_base = "";
$("#sub-btn").click(function(e) 
{
	if ($(".search").val() === "")
	{
		$(".search").val("Random");
	}
	else
	{
		$.ajax({url: "http://en.wikipedia.org/w/api.php",
				dataType: "jsonp",
				data: {
					'action': "opensearch",
					'format': "jsonp",
					'search': $(".search").val()
					},
					success: function(data)
					{
						console.log(data);
					}
					
					});
				
	}

});
