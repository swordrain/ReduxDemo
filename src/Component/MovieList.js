import React, {Component} from 'react';
import $ from 'jquery';

export default class MovieList extends Component{

	componentDidUpdate() {
	    var $wd = $(window),
	        $img = $('img'),
	        imgTop,          //图片距离顶部高度
	        scTop,             //滚动条高度
	        wH,           //窗口高度
	        $movieList = $("#movieList");
	    wH = $wd.height();         //获得可视浏览器的高度
	    scTop = $movieList.scrollTop();       //获取滚动条到顶部的垂直高度
	    var loadImage = ()=>{
	    	$img.each(function(){
	            imgTop =  $(this).offset().top;
	            if( imgTop - wH < scTop &&     //图片必须出现在窗口底部上面
	                //imgTop - wH > 0 &&        //排除首页图片
	                $(this).attr('src') != $(this).data('url')){          //排除已经加载过的图片
	                   $(this).attr({
	                       src: $(this).data('url')
	                   });
	            }
	        });
	    }
	    loadImage();
	    $movieList.scroll( function() { //简单起见，只监听MovieList组件的滚动事件，窗口的滚动其实也需要触发加载的
	    	console.log('scroll');
	        scTop = $movieList.scrollTop();       //获取滚动条到顶部的垂直高度
	        loadImage();
	    });
	}

	render() {
		var self = this;
		/*var list = this.props.movies.map((item)=>{
						console.log(this.props.addFavorite);
						return <li className='list-group-item' style={{'cursor': 'pointer' }} onClick={this.props.addFavorite.bind(event, item)}>{item.title}</li>
					});*/
		
		var list = this.props.movies.map((item)=>{
			return (
				<div className="panel panel-success">
  					<div className="panel-heading">
  						<a target="_blank" href={item.alt}>{item.title}({item.original_title})</a> - {item.year} / {item.rating.average}

  						<button className='btn btn-xs btn-default pull-right' onClick={this.props.addFavorite.bind(event, item)}>Add to favorites</button>
  					</div>
  					<div className="panel-body">
  						<div className='pull-left'>
  							<h5>Directors</h5>
  							{
  								item.directors.map((director)=>{
  									return (<a target="_blank" href={director.alt}><img data-url={director.avatars?director.avatars.small:''} alt={director.name} title={director.name}/></a>)
  								})
  							}
  						</div>
  						<div className='pull-right'>
  						<h5>Casts</h5>
    					{item.casts.map((cast)=>{
    						return (<a target="_blank" href={cast.alt}><img data-url={cast.avatars?cast.avatars.small:''} alt={cast.name} title={cast.name}/></a>)	
    					})}
    					</div>
  					</div>
				</div>
				)
		});

		return (
			<div style={this.props.style} id='movieList'>
			<h2>Movie List</h2>
			{list}
			
			</div>
			)
	}
}