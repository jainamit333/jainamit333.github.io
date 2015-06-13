 var token = -1;
 var post_mat = [];
 var more_data = true;
 var limit = 0;
 var orientation = "timeline-inverted";
var jqueryloader = function(x,y) {
  //alert(x+"  "+y);
     switch(x){

       case "mainpage":

            switch(y){
               case "mvlist":

                  loadmvlist();
               break;

               case "trlist":
               case "snlist":
                  loadvlist(y);
               break;
               case "post":
               //alert(token+" "+ x);
                  scroller(token,x);
               break;
            }

       break;
       case "media":
       break;

     }
}

var loadmvlist = function(){
alert("q");
  var b = null;
  
  $.ajax({
    'async': false,
    dataType: 'jsonp',
     method:"GET",
    'global': false,
     url: "http://www.cinebrunch.com/api/media_v2.php?qtype=mvlist",
     success: function(data){
      alert(data);
      var trlistjson = jQuery.parseJSON(data);
      alert(trlistjson);
      $.each(trlistjson, function(key, val) {
        this.MediaName = this.MediaName.length > 23? this.MediaName.substring(0,25)+"...": this.MediaName;
        if(this.UserLike && this.UserWatch){
          $(".mvlist").append('<div class="col-sm-3 movie-section-unit movie-section-unit-scroller '+this.Release_cat+'" > <div class="team-member" > <img data-src="http://www.cinebrunch.com/images/media/smallposters/Poster'+this.MediaId+'.jpg" src="http://www.cinebrunch.com/images/media/smallposters/default.jpg" class="img-responsive img-rounded lazy-image" alt=""> <div class="media_poster_actionbar"> <i class="fa fa-heart selected"></i> <i class="fa fa-calendar selected"></i> </div> <h4 >'+this.MediaName+'</h4> <p class="text-muted"> <a class="badge blueBadge marginbtm5 margin2" href="">Feb 27</a> <a class="badge yellowBadge marginbtm5 margin2" href="">English</a> <a class="badge purpleBadge marginbtm5 margin2" href="">Drama</a> <a class="badge purpleBadge marginbtm5 margin2" href="">Action</a> </p> <ul class="list-inline social-buttons"> <li ><a href="#" ><i class="fa fa-google-plus"></i></a> </li> <li><a href="#"><i class="fa fa-facebook"></i></a> </li> <li><a href="#"><i class="fa fa-linkedin"></i></a> </li> </ul> </div></div>');
        }else if(this.UserLike && !this.UserWatch){
          $(".mvlist").append('<div class="col-sm-3 movie-section-unit movie-section-unit-scroller '+this.Release_cat+'" > <div class="team-member" > <img data-src="http://www.cinebrunch.com/images/media/smallposters/Poster'+this.MediaId+'.jpg" src="http://www.cinebrunch.com/images/media/smallposters/default.jpg" class="img-responsive img-rounded lazy-image" alt=""> <div class="media_poster_actionbar"> <i class="fa fa-heart selected"></i> <i class="fa fa-calendar "></i> </div> <h4 >'+this.MediaName+'</h4> <p class="text-muted"> <a class="badge blueBadge marginbtm5 margin2" href="">Feb 27</a> <a class="badge yellowBadge marginbtm5 margin2" href="">English</a> <a class="badge purpleBadge marginbtm5 margin2" href="">Drama</a> <a class="badge purpleBadge marginbtm5 margin2" href="">Action</a> </p> <ul class="list-inline social-buttons"> <li ><a href="#" ><i class="fa fa-google-plus"></i></a> </li> <li><a href="#"><i class="fa fa-facebook"></i></a> </li> <li><a href="#"><i class="fa fa-linkedin"></i></a> </li> </ul> </div></div>');
        }else if(!this.UserLike && this.UserWatch){
          $(".mvlist").append('<div class="col-sm-3 movie-section-unit movie-section-unit-scroller '+this.Release_cat+'" > <div class="team-member" > <img data-src="http://www.cinebrunch.com/images/media/smallposters/Poster'+this.MediaId+'.jpg" src="http://www.cinebrunch.com/images/media/smallposters/default.jpg" class="img-responsive img-rounded lazy-image" alt=""> <div class="media_poster_actionbar"> <i class="fa fa-heart"></i> <i class="fa fa-calendar selected"></i> </div> <h4 >'+this.MediaName+'</h4> <p class="text-muted"> <a class="badge blueBadge marginbtm5 margin2" href="">Feb 27</a> <a class="badge yellowBadge marginbtm5 margin2" href="">English</a> <a class="badge purpleBadge marginbtm5 margin2" href="">Drama</a> <a class="badge purpleBadge marginbtm5 margin2" href="">Action</a> </p> <ul class="list-inline social-buttons"> <li ><a href="#" ><i class="fa fa-google-plus"></i></a> </li> <li><a href="#"><i class="fa fa-facebook"></i></a> </li> <li><a href="#"><i class="fa fa-linkedin"></i></a> </li> </ul> </div></div>');
        }else{
        $(".mvlist").append('<div class="col-sm-3 movie-section-unit movie-section-unit-scroller '+this.Release_cat+'" > <div class="team-member" > <img data-src="http://www.cinebrunch.com/images/media/smallposters/Poster'+this.MediaId+'.jpg" src="http://www.cinebrunch.com/images/media/smallposters/default.jpg" class="img-responsive img-rounded lazy-image" alt=""> <div class="media_poster_actionbar"> <i class="fa fa-heart"></i> <i class="fa fa-calendar"></i> </div> <h4 >'+this.MediaName+'</h4> <p class="text-muted"> <a class="badge blueBadge marginbtm5 margin2" href="">Feb 27</a> <a class="badge yellowBadge marginbtm5 margin2" href="">English</a> <a class="badge purpleBadge marginbtm5 margin2" href="">Drama</a> <a class="badge purpleBadge marginbtm5 margin2" href="">Action</a> </p> <ul class="list-inline social-buttons"> <li ><a href="#" ><i class="fa fa-google-plus"></i></a> </li> <li><a href="#"><i class="fa fa-facebook"></i></a> </li> <li><a href="#"><i class="fa fa-linkedin"></i></a> </li> </ul> </div></div>');
      }
    });
    }
  });
}

var loadvlist = function(y){
//alert("q");
  var b = y=="trlist" ? "trailer":"songs";
  $.ajax({
    'async': false,
     method:"GET",
    'global': false,
     url: "http://www.cinebrunch.com/api/videos_v2.php?type="+b,
    success: function(data){
  //    alert(data);
      var trlistjson = jQuery.parseJSON(data);
      $.each(trlistjson, function(key, val) {

        //if viewcount is null set it to 0
        //name should have fixed length
        //duration should not be null
        this.Title =  this.Title.substring(0, 85);

        if(this.ActionType == "UnLike"){

            $(".vlist").append('<div class="col-md-3 col-sm-6 portfolio-item video-scroller-unit video-scroller-unit-'+this.Type+'"> <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal"> <div class="portfolio-hover"> <div class="portfolio-hover-content"> <i class="fa fa-play fa-3x"></i> </div> </div> <img src="'+this.Thumbnail+'" class="img-responsive" alt=""> </a> <div class="portfolio-caption"> <div class="portfolio-caption-text"> <p class="text-muted">'+this.Title+'</p> </div> <div class="portfolio-caption-icon"> <span class="portfolio-caption-duration" style="">'+this.Duration+' min</span> <span class="portfolio-caption-viewcount" style="">'+this.ViewCount+' views</span> <i class="fa fa-heart "></i> <i class="fa fa-plus"></i> <i class="fa fa-share-square-o share"></i> </div> </div> </div>');
        }else{

           $(".vlist").append('<div class="col-md-3 col-sm-6 portfolio-item video-scroller-unit video-scroller-unit-'+this.Type+'"> <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal"> <div class="portfolio-hover"> <div class="portfolio-hover-content"> <i class="fa fa-play fa-3x"></i> </div> </div> <img src="'+this.Thumbnail+'" class="img-responsive" alt=""> </a> <div class="portfolio-caption"> <div class="portfolio-caption-text"> <p class="text-muted">'+this.Title+'</p> </div> <div class="portfolio-caption-icon"> <span class="portfolio-caption-duration" style="">'+this.Duration+' min</span> <span class="portfolio-caption-viewcount" style="">'+this.ViewCount+' views</span> <i class="fa fa-heart selected"></i> <i class="fa fa-plus"></i> <i class="fa fa-share-square-o share"></i> </div> </div> </div>');
        }

      });

    }
  });


}


var scroller = function (l_token,l_context) {
//  alert(l_token+"  "+l_context);
	var code = Math.random().toString(36).substr(2);
  var context = l_context;

	if(l_token == -1 || (limit < 120 && post_mat.length < 8 && more_data) ){
  //  alert("ajaz call");
    //    alert("scr"+l_token+" "+code+" "+l_context);
    $.ajax({
			method:"Get",
			url: "http://www.cinebrunch.com/api/scroller_v2.php?token="+l_token+"&code="+code+"&context="+l_context,
			success: function(data){
        //alert(data);
				try{
					if(data.length > 0){

					var obj = jQuery.parseJSON(data);

					if(obj.length < 20){
						more_data = false;
					}
					$.each(obj, function(key, val) {
					//  alert(this.ID);
					token = this.ID;
					var valueToPush = { };
					valueToPush["ID"] = this.ID;
					valueToPush["TYPE"] = this.TYPE;
					valueToPush["TITLE"] = this.TITLE;
					valueToPush["TARGETTYPE"] = this.TARGETTYPE;
					valueToPush["TARGETID"] = this.TARGETID;
					valueToPush["TARGETNAME"] = this.TARGETNAME;
					valueToPush["TARGETON"] = this.TARGETON;
					valueToPush["TARGETONID"] = this.TARGETONID;
					valueToPush["CONTENT"] = this.CONTENT;
					valueToPush["AUTHORID"] = this.AUTHORID;
					valueToPush["AUTHRNAME"] = this.AUTHRNAME;
					valueToPush["AUTHORHOMEPAGE"] = this.AUTHORHOMEPAGE;
					valueToPush["GROUPID"] = this.GROUPID;
					valueToPush["PRIVACY"] = this.PRIVACY;
					valueToPush["DESCRIPTION"] = this.DESCRIPTION;
					valueToPush["PARENTID"] = this.PARENTID;
					valueToPush["FLAG"] = this.FLAG;
					valueToPush["REPORTFLAG"] = this.REPORTFLAG;
					valueToPush["RATING"] = this.RATING;
					valueToPush["COVERIMAGE"] = this.COVERIMAGE;
					valueToPush["ATTR1"] = this.ATTR1;
					valueToPush["ATTRV1"] = this.ATTRV1;
					valueToPush["ATTR2"] = this.ATTR2;
					valueToPush["ATTRV2"] = this.ATTRV2;
					valueToPush["ATTR3"] = this.ATTR3;
					valueToPush["ATTRV3"] = this.ATTRV3;
					valueToPush["ATTR4"] = this.ATTR4;
					valueToPush["ATTRV4"] = this.ATTRV4;
					valueToPush["ATTR5"] = this.ATTR5;
					valueToPush["ATTRV5"] = this.ATTRV5;
					valueToPush["CONTENTTYPE"] = this.CONTENTTYPE;
					valueToPush["PRIORITY"] = this.PRIORITY;
					valueToPush["CREATEDBY"] = this.CREATEDBY;
					valueToPush["CREATEDON"] = this.CREATEDON;
					valueToPush["LASTUPDATEDBY"] = this.LASTUPDATEDBY;
					valueToPush["LASTUPDATEDON"] = this.LASTUPDATEDON;
					valueToPush["TARGETHOME"] = this.TARGETHOME;

					post_mat.push(valueToPush);

					limit++;
					});
				}
				} catch (e) {
						alert("un able ti parse");
				}

				if(post_mat.length > 0){
				//  alert(post_mat.length);
					var counter = 0;

					while(counter < 3 && (post_mat.length-counter>0)){
          //  alert(post_mat[counter].TYPE);
            if(orientation == ""){
              orientation = "timeline-inverted";
            }else{
              orientation = "";
            }
						switch(post_mat[counter].TYPE){

								case "SHARE":
								case "share":
              //  $('.timeline').append('<li class="'+orientation+'"><div class="timeline-image"><img class="img-circle img-responsive" src="img/about/4.jpg" alt=""></div><div class="timeline-panel"><div class="timeline-body">'+post_mat[counter].TYPE+'</div></div></li>');
              $('.timeline').append('<li class="'+orientation+'"><div class="timeline-image"><img class="img-circle img-responsive" src="http://www.cinebrunch.com/images/media/square/Poster'+ post_mat[counter].TARGETID+'.jpg" onerror="this.onerror=null;this.src=\'http://www.cinebrunch.com/images/media/square/default.jpg\';"></div><div class="timeline-panel"><div class="timeline-body"><div class="row vlist col-xl-12 col-sm-12 col-md-12 col-lg-12 text-left borderShadow1" ><div class="col-xl-12 header"><Div class="col-md-10 col-sm-10 col-xs-10 col-lg-10 text-left  "><a class=" object">Share</a> <span class="object_connector">by</span> <a class="object" href="'+ post_mat[counter].AUTHORHOMEPAGE+'">'+ post_mat[counter].AUTHRNAME+'</a></Div><Div class="col-md-1 col-sm-1 col-xs-1 col-xl-1 text-right"><div class="btn-group"><span class="fa fa-chevron-down dropdown-toggle pointer clipDD" data-toggle="dropdown"></span><ul class="dropdown-menu dropdown-menu-right" role="menu"><li><a href="#">Report Spam</a></li></ul></div></Div></div><div class="col-xl-12 col-sm-12 col-md-12 col-lg-12 margintop5" ><div class="form-control sharecontent">'+ post_mat[counter].CONTENT+'</div><div class="row sharecontentseq1" >'+ post_mat[counter].ATTRV1+'</div></div><div class="col-md-12 col-sm-12  text-right when" >'+ post_mat[counter].CREATEDON+'</div></div></div></div></li>');
									break;
								case "THOUGHT":
								case "thought":

            //    $('.timeline').append('<li class="'+orientation+'"><div class="timeline-image"><img class="img-circle img-responsive" src="img/about/4.jpg" alt=""></div><div class="timeline-panel"><div class="timeline-body">'+post_mat[counter].TYPE+'</div></div></li>');
										  $('.timeline').append('<li class="'+orientation+'"><div class="timeline-image"><img class="img-circle img-responsive" src="http://www.cinebrunch.com/images/media/square/Poster'+ post_mat[counter].TARGETID+'.jpg" onerror="this.onerror=null;this.src=\'http://www.cinebrunch.com/images/media/square/default.jpg\';"></div><div class="timeline-panel"><div class="timeline-body"><div class="row vlist col-xl-12 col-sm-12 col-md-12 col-lg-12 text-left borderShadow1"><div class="col-xl-12 header"><Div class="col-md-10 col-sm-10 col-xs-10 col-lg-10 text-left "><a class="bold object">Thought</a><span class="object_connector">by</span><a class="object" href="'+ post_mat[counter].AUTHORHOMEPAGE+'">'+ post_mat[counter].AUTHRNAME+'</a><span class="object_connector">for</span><a class="object" href="'+ post_mat[counter].TARGETHOME+'">'+ post_mat[counter].TARGETNAME+'</a></Div><Div class="col-md-2 col-sm-2 col-xs-1 col-lg-2 text-right"><div class="btn-group"> <span class=" fa fa-chevron-down dropdown-toggle pointer clipDD" data-toggle="dropdown"></span><ul class="dropdown-menu dropdown-menu-right" role="menu"><li><a href="#">Report Spam</a></li></ul></div></Div></div><Div class="col-md-12 col-sm-12 col-xs-12 col-xl-12 margintop5"></Div><div class="col-xl-12 content text-left"><Div class="col-md-12 col-sm-12 col-xs-12 col-lg-12 text-left"><div class="panel panel-default text-left"><div class="panel-body text-left" style="font: 16px/18px Georgia, serif;">'+ post_mat[counter].CONTENT+'</div></div></Div></div><div class="col-md-12 col-sm-12 col-xs-12 col-xl-12 contentFooter text-right when">'+ post_mat[counter].CREATEDON+'</div></div>');
										break;
										case "ALBUMS":
										case "albums":
                //    $('.timeline').append('<li class="'+orientation+'"><div class="timeline-image"><img class="img-circle img-responpnsive" src="img/about/4.jpg" alt=""></div><div class="timeline-panel"><div class="timeline-body">'+post_mat[counter].TYPE+'</div></div></li>');
                $('.timeline').append('<li class="'+orientation+'"><div class="timeline-image"><img class="img-circle img-responsive" src="http://www.cinebrunch.com/images/albums/'+ post_mat[counter].CONTENT+'" onerror="this.onerror=null;this.src=\'http://www.cinebrunch.com/images/albums/square/Default.jpg\';"></div><div class="timeline-panel"><div class="timeline-body"><div class="row  col-xl-12 col-sm-12 col-md-12 col-lg-12 text-left borderShadow1" > <div class="col-xl-12 header"> <Div class="col-md-10 col-sm-10 col-xs-10 col-xl-10 text-left"><a class="bold object">Album</a><span class="object_connector">by</span><a class="bold object" href="'+ post_mat[counter].AUTHORHOMEPAGE+'">'+ post_mat[counter].AUTHRNAME+'</a> </Div> <Div class="col-md-1 col-sm-1 col-xs-1 col-xl-1 text-right"> <div class="btn-group"> <span class="fa fa-chevron-down dropdown-toggle pointer" data-toggle="dropdown"></span> <ul class="dropdown-menu dropdown-menu-right" role="menu"> <li><a href="#">Report Spam</a></li> </ul> </div> </Div> </div><div class="panel panel-default"><div class="panel-body"><div class="col-xl-12 col-sm-12 col-md-12 col-lg-12 content text-left" > <Div class="col-md-9 col-sm-10 col-xs-10 col-lg-8 albumname">'+ post_mat[counter].TITLE+'</Div><Div class="col-md-2 col-sm-10 col-xs-10 col-lg-2 albumplay"> <button type="button" class="btn btn-sm btn-default ListAll rondell-item albumSongs bold borderShadow"  data-toggle="modal" data-target="#myModalNT"  onclick=\'playSongs("'+ post_mat[counter].ID+'",this)\'>Play All <span class="glyphicon glyphicon-play green" ></span></button></div><span class="col-md-6 col-sm-6 col-xs-12 col-lg-6 text-left">  <div class="albumsplayed"> <span>Played :</span> <span class=" albumcountervalue droidfont" >'+ post_mat[counter].ATTRV1+'</span></div> </span> <Div class="col-md-6 col-sm-6 col-xs-12 col-lg-6 text-left"> <Span class="slabofont"> '+ post_mat[counter].ATTRV2+' </Span> </div> </div></div></div><div class="col-md-12 col-sm-12 emptyheight"></div> <div class="col-md-12 col-sm-12 text-right when"> '+ post_mat[counter].CREATEDON+' </div> </div></div></div></li>');
												break;
                        case "REVIEW":
												case "review":
                  //      $('.timeline').append('<li class="'+orientation+'"><div class="timeline-image"><img class="img-circle img-responsive" src="img/about/4.jpg" alt=""></div><div class="timeline-panel"><div class="timeline-body">'+post_mat[counter].TYPE+'</div></div></li>');
											$('.timeline').append('<li class="'+orientation+'"><div class="timeline-image"><img class="img-circle img-responsive" src="http://www.cinebrunch.com/images/media/square/Poster'+ post_mat[counter].TARGETID+'.jpg" alt=""></div><div class="timeline-panel"><div class="timeline-body"><div class="row vlist col-xl-12 col-sm-12 col-md-12 col-lg-12 text-left borderShadow1" ><div class="col-xl-12 header"><Div class="col-md-10 col-sm-10 col-xs-10 col-xl-10 text-left"><a class="object">Review</a><span class="object_connector">by</span><a class="object" href="'+ post_mat[counter].AUTHORHOMEPAGE+'">'+ post_mat[counter].AUTHRNAME+'</a><span class="object_connector">for</span><a class="object" href="'+ post_mat[counter].TARGETHOME+'">'+ post_mat[counter].TARGETNAME+'</a></Div><Div class="col-md-1 col-sm-1 col-xs-1 col-xl-1 text-right"><div class="btn-group"><span class="fa fa-chevron-down dropdown-toggle pointer clipDD" data-toggle="dropdown"></span><ul class="dropdown-menu dropdown-menu-right" role="menu"><li><a href="#">Report Spam</a></li></ul></div></Div></div><Div class="col-md-12 col-sm-12 col-xs-12 col-xl-12 margintop5 "><span class="reviewtitle" >'+ post_mat[counter].TITLE+'</span><span class="reviewoverallrating">Overrall Rating :</span><span class="reviewoverallrating">'+ post_mat[counter].RATING +'</span></Div><div class="col-xl-12 text-center droidfont"><Div class="col-md-6 col-sm-6 col-xs-6 col-xl-6 text-left text-small bold margintop5"><span class="reviewsubratinglabel">Music : </span><span class="reviewsubratingvalue">'+ post_mat[counter].ATTRV1+'</span></Div><Div class="col-md-6 col-sm-6 col-xs-6 col-xl-6 text-left text-small bold margintop5"><span class="reviewsubratinglabel">Story : </span><span class="reviewsubratingvalue">'+ post_mat[counter].ATTRV2+'</span></Div><Div class="col-md-6 col-sm-6 col-xs-6 col-xl-6 text-left text-small bold margintop5"><span class="reviewsubratinglabel">Direction : </span><span class="reviewsubratingvalue">'+ post_mat[counter].ATTRV3+'</span></Div><Div class="col-md-6 col-sm-6 col-xs-6 col-xl-6 text-left text-small bold margintop5"><span class="reviewsubratinglabel">Cast-Rating : </span><span class="reviewsubratingvalue">'+ post_mat[counter].ATTRV4 +'</span></Div></div><div class="col-xl-12 content text-left "><Div class="col-md-12 col-sm-12 col-xs-12 col-xl-12 text-left margintop5"><div class="panel panel-default text-left"><div class="panel-body text-left" style="font: 16px/18px Georgia, serif;">'+ post_mat[counter].CONTENT+'</div></div></Div></div><div class="col-md-12 col-sm-12 col-xs-12 contentFooter text-right when">'+ post_mat[counter].CREATEDON+'</div></div></div></div></li>');
														break;
								default:

						}

						counter++;
					}
					post_mat.splice(0, 3);

				}

			}
		});
	}else{

		var counter = 0;

  //  alert("non ajaz call");
		while(counter < 3 && (post_mat.length-counter>0)){

      if(orientation == ""){
        orientation = "timeline-inverted";
      }else{
        orientation = "";
      }
      switch(post_mat[counter].TYPE){

          case "SHARE":
          case "share":
        //  $('.timeline').append('<li class="'+orientation+'"><div class="timeline-image"><img class="img-circle img-responsive" src="img/about/4.jpg" alt=""></div><div class="timeline-panel"><div class="timeline-body">'+post_mat[counter].TYPE+'</div></div></li>');
        $('.timeline').append('<li class="'+orientation+'"><div class="timeline-image"><img class="img-circle img-responsive" src="http://www.cinebrunch.com/images/media/square/Poster'+ post_mat[counter].TARGETID+'.jpg" onerror="this.onerror=null;this.src=\'http://www.cinebrunch.com/images/media/square/default.jpg\';"></div><div class="timeline-panel"><div class="timeline-body"><div class="row vlist col-xl-12 col-sm-12 col-md-12 col-lg-12 text-left borderShadow1" ><div class="col-xl-12 header"><Div class="col-md-10 col-sm-10 col-xs-10 col-lg-10 text-left  "><a class=" object">Share</a> <span class="object_connector">by</span> <a class="object" href="'+ post_mat[counter].AUTHORHOMEPAGE+'">'+ post_mat[counter].AUTHRNAME+'</a></Div><Div class="col-md-1 col-sm-1 col-xs-1 col-xl-1 text-right"><div class="btn-group"><span class="fa fa-chevron-down dropdown-toggle pointer clipDD" data-toggle="dropdown"></span><ul class="dropdown-menu dropdown-menu-right" role="menu"><li><a href="#">Report Spam</a></li></ul></div></Div></div><div class="col-xl-12 col-sm-12 col-md-12 col-lg-12 margintop5" ><div class="form-control sharecontent">'+ post_mat[counter].CONTENT+'</div><div class="row sharecontentseq1" >'+ post_mat[counter].ATTRV1+'</div></div><div class="col-md-12 col-sm-12  text-right when" >'+ post_mat[counter].CREATEDON+'</div></div></div></div></li>');
            break;
          case "THOUGHT":
          case "thought":

      //    $('.timeline').append('<li class="'+orientation+'"><div class="timeline-image"><img class="img-circle img-responsive" src="img/about/4.jpg" alt=""></div><div class="timeline-panel"><div class="timeline-body">'+post_mat[counter].TYPE+'</div></div></li>');
                $('.timeline').append('<li class="'+orientation+'"><div class="timeline-image"><img class="img-circle img-responsive" src="http://www.cinebrunch.com/images/media/square/Poster'+ post_mat[counter].TARGETID+'.jpg" onerror="this.onerror=null;this.src=\'http://www.cinebrunch.com/images/media/square/default.jpg\';"></div><div class="timeline-panel"><div class="timeline-body"><div class="row vlist col-xl-12 col-sm-12 col-md-12 col-lg-12 text-left borderShadow1"><div class="col-xl-12 header"><Div class="col-md-10 col-sm-10 col-xs-10 col-lg-10 text-left "><a class="bold object">Thought</a><span class="object_connector">by</span><a class="object" href="'+ post_mat[counter].AUTHORHOMEPAGE+'">'+ post_mat[counter].AUTHRNAME+'</a><span class="object_connector">for</span><a class="object" href="'+ post_mat[counter].TARGETHOME+'">'+ post_mat[counter].TARGETNAME+'</a></Div><Div class="col-md-2 col-sm-2 col-xs-1 col-lg-2 text-right"><div class="btn-group"> <span class=" fa fa-chevron-down dropdown-toggle pointer clipDD" data-toggle="dropdown"></span><ul class="dropdown-menu dropdown-menu-right" role="menu"><li><a href="#">Report Spam</a></li></ul></div></Div></div><Div class="col-md-12 col-sm-12 col-xs-12 col-xl-12 margintop5"></Div><div class="col-xl-12 content text-left"><Div class="col-md-12 col-sm-12 col-xs-12 col-lg-12 text-left"><div class="panel panel-default text-left"><div class="panel-body text-left" style="font: 16px/18px Georgia, serif;">'+ post_mat[counter].CONTENT+'</div></div></Div></div><div class="col-md-12 col-sm-12 col-xs-12 col-xl-12 contentFooter text-right when">'+ post_mat[counter].CREATEDON+'</div></div>');
              break;
              case "ALBUMS":
              case "albums":
          //    $('.timeline').append('<li class="'+orientation+'"><div class="timeline-image"><img class="img-circle img-responpnsive" src="img/about/4.jpg" alt=""></div><div class="timeline-panel"><div class="timeline-body">'+post_mat[counter].TYPE+'</div></div></li>');
          $('.timeline').append('<li class="'+orientation+'"><div class="timeline-image"><img class="img-circle img-responsive" src="http://www.cinebrunch.com/images/albums/'+ post_mat[counter].CONTENT+'" onerror="this.onerror=null;this.src=\'http://www.cinebrunch.com/images/albums/square/Default.jpg\';"></div><div class="timeline-panel"><div class="timeline-body"><div class="row  col-xl-12 col-sm-12 col-md-12 col-lg-12 text-left borderShadow1" > <div class="col-xl-12 header"> <Div class="col-md-10 col-sm-10 col-xs-10 col-xl-10 text-left"><a class="bold object">Album</a><span class="object_connector">by</span><a class="bold object" href="'+ post_mat[counter].AUTHORHOMEPAGE+'">'+ post_mat[counter].AUTHRNAME+'</a> </Div> <Div class="col-md-1 col-sm-1 col-xs-1 col-xl-1 text-right"> <div class="btn-group"> <span class="fa fa-chevron-down dropdown-toggle pointer" data-toggle="dropdown"></span> <ul class="dropdown-menu dropdown-menu-right" role="menu"> <li><a href="#">Report Spam</a></li> </ul> </div> </Div> </div><div class="panel panel-default"><div class="panel-body"><div class="col-xl-12 col-sm-12 col-md-12 col-lg-12 content text-left" > <Div class="col-md-9 col-sm-10 col-xs-10 col-lg-8 albumname">'+ post_mat[counter].TITLE+'</Div><Div class="col-md-2 col-sm-10 col-xs-10 col-lg-2 albumplay"> <button type="button" class="btn btn-sm btn-default ListAll rondell-item albumSongs bold borderShadow"  data-toggle="modal" data-target="#myModalNT"  onclick=\'playSongs("'+ post_mat[counter].ID+'",this)\'>Play All <span class="glyphicon glyphicon-play green" ></span></button></div><span class="col-md-6 col-sm-6 col-xs-12 col-lg-6 text-left">  <div class="albumsplayed"> <span>Played :</span> <span class=" albumcountervalue droidfont" >'+ post_mat[counter].ATTRV1+'</span></div> </span> <Div class="col-md-6 col-sm-6 col-xs-12 col-lg-6 text-left"> <Span class="slabofont"> '+ post_mat[counter].ATTRV2+' </Span> </div> </div></div></div><div class="col-md-12 col-sm-12 emptyheight"></div> <div class="col-md-12 col-sm-12 text-right when"> '+ post_mat[counter].CREATEDON+' </div> </div></div></div></li>');
                  break;
                  case "REVIEW":
                  case "review":
            //      $('.timeline').append('<li class="'+orientation+'"><div class="timeline-image"><img class="img-circle img-responsive" src="img/about/4.jpg" alt=""></div><div class="timeline-panel"><div class="timeline-body">'+post_mat[counter].TYPE+'</div></div></li>');
                $('.timeline').append('<li class="'+orientation+'"><div class="timeline-image"><img class="img-circle img-responsive" src="http://www.cinebrunch.com/images/media/square/Poster'+ post_mat[counter].TARGETID+'.jpg" alt=""></div><div class="timeline-panel"><div class="timeline-body"><div class="row vlist col-xl-12 col-sm-12 col-md-12 col-lg-12 text-left borderShadow1" ><div class="col-xl-12 header"><Div class="col-md-10 col-sm-10 col-xs-10 col-xl-10 text-left"><a class="object">Review</a><span class="object_connector">by</span><a class="object" href="'+ post_mat[counter].AUTHORHOMEPAGE+'">'+ post_mat[counter].AUTHRNAME+'</a><span class="object_connector">for</span><a class="object" href="'+ post_mat[counter].TARGETHOME+'">'+ post_mat[counter].TARGETNAME+'</a></Div><Div class="col-md-1 col-sm-1 col-xs-1 col-xl-1 text-right"><div class="btn-group"><span class="fa fa-chevron-down dropdown-toggle pointer clipDD" data-toggle="dropdown"></span><ul class="dropdown-menu dropdown-menu-right" role="menu"><li><a href="#">Report Spam</a></li></ul></div></Div></div><Div class="col-md-12 col-sm-12 col-xs-12 col-xl-12 margintop5 "><span class="reviewtitle" >'+ post_mat[counter].TITLE+'</span><span class="reviewoverallrating">Overrall Rating :</span><span class="reviewoverallrating">'+ post_mat[counter].RATING +'</span></Div><div class="col-xl-12 text-center droidfont"><Div class="col-md-6 col-sm-6 col-xs-6 col-xl-6 text-left text-small bold margintop5"><span class="reviewsubratinglabel">Music : </span><span class="reviewsubratingvalue">'+ post_mat[counter].ATTRV1+'</span></Div><Div class="col-md-6 col-sm-6 col-xs-6 col-xl-6 text-left text-small bold margintop5"><span class="reviewsubratinglabel">Story : </span><span class="reviewsubratingvalue">'+ post_mat[counter].ATTRV2+'</span></Div><Div class="col-md-6 col-sm-6 col-xs-6 col-xl-6 text-left text-small bold margintop5"><span class="reviewsubratinglabel">Direction : </span><span class="reviewsubratingvalue">'+ post_mat[counter].ATTRV3+'</span></Div><Div class="col-md-6 col-sm-6 col-xs-6 col-xl-6 text-left text-small bold margintop5"><span class="reviewsubratinglabel">Cast-Rating : </span><span class="reviewsubratingvalue">'+ post_mat[counter].ATTRV4 +'</span></Div></div><div class="col-xl-12 content text-left "><Div class="col-md-12 col-sm-12 col-xs-12 col-xl-12 text-left margintop5"><div class="panel panel-default text-left"><div class="panel-body text-left" style="font: 16px/18px Georgia, serif;">'+ post_mat[counter].CONTENT+'</div></div></Div></div><div class="col-md-12 col-sm-12 col-xs-12 contentFooter text-right when">'+ post_mat[counter].CREATEDON+'</div></div></div></div></li>');
                      break;
          default:

      }
			counter++;
		}
		post_mat.splice(0, 3);
	}
};
