/*------------------------------------------
 Contact form
 ------------------------------------------*/


$(document).ready(function () {

    $("#buscarForm").submit(function(e){

        e.preventDefault();
        var $ = jQuery;

        var postData 		= $(this).serializeArray(),
            formURL 		= $(this).attr("action");

        $.ajax(
            {
                url : formURL,
                type: "POST",
                data : postData,
                success:function(data)
                {
                    res = JSON.parse(data);
                    obj = null; 
                    $(".resultados").html("");
                    if(res!=''){
                        $.each( res, function( key, value ) {
                            $(".resultados").append('<div class="media webdesigntuts-listaBusqueda"><div class="media-left"><img src="img/icon/disk.png" class="media-object" style="width:60px"></div><div class="media"><div class="media-body mediabody-bootstrap"><h5 class="media-heading mediaheading-bootstrap">'+value.nombre+' <small><br><i style="font-size:10px;"><b>AUTOR:</b> '+value.email+'</i></small></h5></div></div><p>'+value.email+'</p></div>');
                          //console.log( value.nombre )
                        });
                    }else{
                        $(".resultados").append('<h5>sin resultados ...</h5><br><button class="media listaBusquedaButton"><div class="media"><div class="media-body mediabody-bootstrap"><h5 class="media-heading mediaheading-bootstrap">AGREGAR NUEVO +</div></div></button>');
                    }
                    
                },
                error: function(data)
                {
                    alert("Error occurd! Please try again");
                }
            });

        return false;

    });
});


