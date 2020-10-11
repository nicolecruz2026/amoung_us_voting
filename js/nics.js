var str = "";
var vote_count =  {
pang : 0,
wave : 0,
korn : 0, 
morn : 0,
punn : 0,
claire : 0, 
ohm : 0,
jackjoe: 0,
third: 0,
grace: 0,
	
};

$(document).ready(
	function(){
		$("#p1vote").click(
			function(){
				vote_count.pang++;
				$("#p1vote").html("("+vote_count.pang+")");
			}
		);
		$("#p2vote").click(
			function(){
				vote_count.wave++;
				$("#p2vote").html("("+vote_count.wave+")");
			}
		);
		$("#p3vote").click(
			function(){
				vote_count.korn++;
				$("#p3vote").html("("+vote_count.korn+")");
			}
		);
		$("#p4vote").click(
			function(){
				vote_count.morn++;
				$("#p4vote").html("("+vote_count.morn+")");
			}
		);
		$("#p5vote").click(
			function(){
				vote_count.punn++;
				$("#p5vote").html("("+vote_count.punn+")");
			}
		);
		$("#p6vote").click(
			function(){
				vote_count.claire++;
				$("#p6vote").html("("+vote_count.claire+")");
			}
		);
		$("#p7vote").click(
			function(){
				vote_count.ohm++;
				$("#p7vote").html("("+vote_count.ohm+")");
			}
		);
		$("#p9vote").click(
			function(){
				vote_count.third++;
				$("#p9vote").html("("+vote_count.third+")");
			}
		);
		$("#p10vote").click(
			function(){
				vote_count.grace++;
				$("#p10vote").html("("+vote_count.grace+")");

			}
		);
		$("#p8vote").click(
			function(){
				vote_count.jackjoe++;
				$("#p8vote").html("("+vote_count.jackjoe+")");
				
			}
		);
}
		);

