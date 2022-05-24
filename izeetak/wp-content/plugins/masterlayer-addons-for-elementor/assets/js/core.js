!function(t,e,i,a){"use strict";var n=function(e,i){this.elm=e,this.$elm=t(e),this.opts=i,this.config=this.$elm.data("config")};n.defaults=(n.prototype={defaults:{contain:!0,imagesLoaded:!0,arrowShape:"M34.2,49.6C34.2,49.6,34.2,49.6,34.2,49.6l6.8-6.8c0.5-0.5,1.3-0.5,1.8,0c0.5,0.5,0.5,1.3,0,1.8l-4.6,4.5h27.6 c0.7,0,1.3,0.6,1.3,1.3s-0.6,1.3-1.3,1.3H38.3l4.6,4.5c0.5,0.5,0.5,1.3,0,1.8c-0.5,0.5-1.3,0.5-1.8,0l-6.8-6.8c0,0,0,0,0,0 C33.7,50.9,33.7,50.1,34.2,49.6z",percentPosition:!1,adaptiveHeight:!1,cellAlign:"center",groupCells:!0,dragThreshold:20,wrapAround:!1,autoPlay:!1,navArrow:1,filters:!1,equalHeightCells:!1,randomVerOffset:!1,draggable:!0,column:3,gap:"30px",stretch:"",prevNextButtons:!1,arrowStyle:"arrow-style-1",arrowPosition:"middle",arrowMiddleOffset:"0px",arrowTopOffset:"40px",pageDots:!1,dotStyle:"dot-style-1",dotOffset:"40px",filter:!1,stretch:"",initialIndex:0},init:function(){return this.args=t.extend({},this.defaults,this.opts,this.config),this.responsive(),this.build(),this.event(),this},build:function(){var i=this,a=i.args.stretch,n=(i.args.prevNextButtons,i.args.arrowStyle,i.args.arrowPosition),s=(i.args.arrowMiddleOffset,i.args.arrowTopOffset,i.args.arrowShape,i.args.pageDots),r=(i.args.dotStyle,i.args.dotOffset,i.args.filter),o=(i.args.stretchOpacity,i.args.autoPlay),l=(i.args.groupCells,i.args.cellAlign,"filter-"+(new Date).getTime());if(t("html").is('[dir="rtl"]'))switch(i.args.cellAlign){case"left":i.args.cellAlign="right";break;case"right":i.args.cellAlign="left"}i.$elm.alterClass("arrow-position-*","arrow-position-"+n),s?i.$elm.alterClass("bullets-*","bullets-yes"):i.$elm.alterClass("bullets-*","bullets-no"),!i.$elm.find(".flickity-viewport").length&&i.$elm.children().addClass("item-carousel"),"stretch-both"==a&&(i.args.initialIndex=1),o&&(i.args.autoPlay=5e3),r&&(i.$elm.alterClass("filter-*",l),i.filter(l)),i.$elm.waitForImages(function(){switch(i.$elm.flickity(i.args),a){case"stretch-right":if(t("html").is('[dir="rtl"]')){var n=i.$elm.width(),s=(o=i.$elm.find(".flickity-viewport")).offset().left,r=t("<div />").addClass("flickity-wrap");o.wrap(r).css("overflow","visible").parent().css({"padding-left":s,"margin-left":-s,overflow:"hidden"})}else{n=i.$elm.width();var o=i.$elm.find(".flickity-viewport");s=e.innerWidth-(n+o.offset().left),r=t("<div />").addClass("flickity-wrap");o.wrap(r).css("overflow","visible").parent().css({"padding-right":s,"margin-right":-s,overflow:"hidden"})}break;case"stretch-both":n=i.$elm.width(),o=i.$elm.find(".flickity-viewport");var l=e.innerWidth-(n+o.offset().left),d=o.offset().left;r=t("<div />").addClass("flickity-wrap");o.wrap(r).css("overflow","visible").parent().css({"padding-right":l,"margin-right":-l,overflow:"hidden","padding-left":d,"margin-left":-d})}})},filter:function(e){var i=this,a=i.args.filterAll,n=i.args.filterCat.split(","),s=t("<div />").attr("id",e).addClass("carousel-filter");i.$elm.before(s),a&&t('<div class="filter-item" data-filter="*">All</div>').appendTo(s);for(var r=0;r<n.length;r++)t('<div class="filter-item" data-filter="'+n[r].replace(" ","-").toLowerCase()+'">'+n[r]+"</div>").appendTo(s)},event:function(){var e=this,i=e.args.activeIndex;t(".carousel-filter .filter-item").on("click",function(){var i=t(this).parent().attr("id"),a=t(this).data("filter");if("*"!==a){var n=t("."+i+" .item-carousel").not("."+a),s=t("."+i+" .item-carousel."+a);n.hide(),s.show()}else t("."+i+" .item-carousel").show();t("."+i).find(".ctr-edit").remove(),e.args.fullRight&&e.$elm.find(".flickity-viewport").unwrap(),e.$elm.flickity("destroy"),e.$elm.waitForImages(function(){e.$elm.flickity(e.args)})});var a=e.$elm.find(".item-carousel.is-selected"),n=e.$elm.find(".item-carousel");i?(a.length>=i&&a.eq(i-1).addClass("active"),e.$elm.on("select.flickity",function(t,n){a=e.$elm.find(".item-carousel.is-selected"),e.$elm.find(".item-carousel").removeClass("active"),a.length>=i&&a.eq(i-1).addClass("active")})):e.$elm.on("mouseleave",function(){n.removeClass("active")}),n.each(function(e,i){t(i).on("mouseenter",function(){n.removeClass("active"),t(i).addClass("active")})})},responsive:function(){var i=this,a=i.$elm.find(".item-carousel"),n=i.args.column,s=i.args.gap,r=i.args.columnTablet,o=i.args.gapTablet,l=i.args.columnMobile,d=i.args.gapMobile,f="",c=0,p=function(){var t="desktop";switch(matchMedia("only screen and (max-width: 1024px)").matches&&(t="tablet"),matchMedia("only screen and (max-width: 768px)").matches&&(t="mobile"),!n&&(n=3),!r&&(r=n),!l&&(l=r),!s&&(s=30),!o&&(o=s),!d&&(d=o),t){case"tablet":f="calc( (100% - "+(r-1)*o+"px) / "+r+")",c=o;break;case"mobile":f="calc( (100% - "+(l-1)*d+"px) / "+l+")",c=d;break;default:f="calc( (100% - "+(n-1)*s+"px) / "+n+")",c=s}a.css({width:f,"margin-right":c+"px"})};p(),t(e).on("resize",p)}}).defaults,t.fn.masterCarouselBox=function(t){return this.each(function(){new n(this,t).init()})}}(jQuery,window,document),function(t,e,i,a){"use strict";var n=function(e,i){this.elm=e,this.$elm=t(e),this.opts=i,this.config=this.$elm.data("config")};n.defaults=(n.prototype={defaults:{filters:".projects-filter",layoutMode:"grid",defaultFilter:"*",gapHorizontal:30,gapVertical:30,showNavigation:!0,showPagination:!0,gridAdjustment:"responsive",rewindNav:!1,auto:!1,mediaQueries:[{width:1200,cols:4},{width:992,cols:3},{width:768,cols:2},{width:480,cols:1}],columns:"5,3,2,1",filterStyle:"filter-style-1",filterColor:"light",displayType:"bottomToTop",displayTypeSpeed:100},init:function(){return this.args=t.extend({},this.defaults,this.opts,this.config),this.build(),this.event(),this},build:function(){var t=this,e=t.config.columns,i=t.args.mediaQueries,a=t.args.filterStyle,n=t.args.filterColor;t.args.filterMargin,t.$elm.attr("class").split(" ");t.$elm.find(".projects-filter").alterClass("filter-style-*",a),t.$elm.find(".projects-filter").alterClass("filter-color-*","filter-color"+n),i="1,1,1,1"==e?[{width:1200,cols:1},{width:930,cols:1},{width:768,cols:1},{width:480,cols:1}]:i,i="2,2,1,1"==e?[{width:1200,cols:2},{width:930,cols:2},{width:768,cols:1},{width:480,cols:1}]:i,i="3,3,2,1"==e?[{width:1200,cols:3},{width:930,cols:3},{width:768,cols:2},{width:480,cols:1}]:i,i="4,3,2,1"==e?[{width:1200,cols:4},{width:930,cols:3},{width:768,cols:2},{width:480,cols:1}]:i,i="5,3,2,1"==e?[{width:1200,cols:5},{width:930,cols:3},{width:768,cols:2},{width:480,cols:1}]:i,i="6,4,3,2"==e?[{width:1200,cols:6},{width:930,cols:4},{width:768,cols:3},{width:480,cols:2}]:i,t.args.mediaQueries=i,"mosaic"==t.args.layoutMode&&matchMedia("only screen and (max-width: 1300px)").matches&&(t.args.gridAdjustment="responsive",t.args.sortToPreventGaps=!0),t.$elm.waitForImages(function(){t.$elm.find(".galleries").cubeportfolio(t.args)})},event:function(){var e=this.$elm.find(".cbp-item");e.each(function(i,a){t(a).on("mouseenter",function(){e.removeClass("active"),t(a).addClass("active")})}),this.$elm.on("mouseleave",function(){e.removeClass("active")})}}).defaults,t.fn.masterPortfolio=function(t){return this.each(function(){new n(this,t).init()})}}(jQuery,window,document),function(t,e,i,a){"use strict";var n=function(e,i){this.elm=e,this.$elm=t(e),this.opts=i,this.config=this.$elm.data("config")};n.defaults=(n.prototype={defaults:{autoplay:"no",autoplaySpeed:6,kenburns:"no",kenburnsZoom:2,kenburnsDuration:10},init:function(){return this.args=t.extend({},this.defaults,this.opts,this.config),this.build(),this.event(),this},build:function(){var e=this,i=e.args.subEffIn.eff,a=e.args.subEffOut.eff,n=e.args.titleEffIn.eff,s=e.args.titleEffOut.eff,r=e.args.descEffIn.eff,o=e.args.descEffOut.eff,l=e.args.url1EffIn.eff,d=e.args.url1EffOut.eff,f=e.args.url1EffIn.eff,c=e.args.url1EffOut.eff,p=e.args.wrapEffIn.eff,u=(e.args.wrapEffOut.eff,e.args.bgEffIn.eff),g=(e.args.bgEffOut.eff,e.$elm.find(".slide"));if(e.$elm.find(".content-wrap .slide").each(function(){t('<span class="dot"></span>').appendTo(e.$elm.find(".nav-dots"))}),e.$elm.find(".content-wrap .slide.active").length){var h=e.$elm.find(".content-wrap .slide.active").first().index();e.$elm.find(".content-wrap .slide").eq(h).css("z-index",2),e.$elm.find(".nav-dots .dot").eq(h).addClass("active")}else e.$elm.find(".bg-wrap .bg").first().addClass("active"),e.$elm.find(".content-wrap .slide").first().addClass("active").css("z-index",2),e.$elm.find(".nav-dots .dot").first().addClass("active");switch("zoomOut"==p&&e.$elm.find(".slide").addClass("cb-zoom"),u){case"zoomOut":e.$elm.find(".bg-wrap").addClass("cb-zoom");break;case"vslide":e.$elm.find(".bg-wrap").addClass("cb-vslide2")}e.params={images:{none:{out:{},set:{next:{opacity:1,x:0,y:0,scale:1},prev:{opacity:1,x:0,y:0,scale:1}},in:{}},fade:{out:{next:{opacity:0,duration:1},prev:{opacity:0,duration:1}},set:{next:{opacity:0},prev:{opacity:0}},in:{opacity:1,duration:1}},fadeScale:{out:{next:{opacity:0,duration:.3,delay:.5},prev:{opacity:0,duration:.3,delay:.5}},set:{next:{scale:.9,opacity:0},prev:{scale:.9,opacity:0}},in:{opacity:1,scale:1,duration:.6}},reveal:{out:{next:{},prev:{}},set:{next:{clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",scale:1.3},prev:{clipPath:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",scale:1.3}},in:{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",scale:1,ease:Power2.out,duration:1.2}},reveal2:{out:{next:{},prev:{}},set:{prev:{clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",scale:1.3},next:{clipPath:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",scale:1.3}},in:{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",scale:1,ease:Power2.out,duration:1.2}},slide:{out:{next:{x:"-100%",duration:.5,ease:"power2.inOut"},prev:{x:"100%",duration:.5,ease:"power2.inOut"}},set:{next:{x:"100%"},prev:{x:"-100%"}},in:{x:0,duration:.5,ease:"power2.inOut"}},vslide:{out:{next:{y:"-100%",duration:1.2},prev:{y:"100%",duration:1.2}},set:{next:{y:"100%"},prev:{y:"-100%"}},in:{y:0,duration:1.2}},fadeRight:{out:{next:{x:50,opacity:0,duration:.3},prev:{x:-50,opacity:0,duration:.3}},set:{next:{x:-50,opacity:0,duration:.3},prev:{x:50,opacity:0,duration:.3}},in:{x:0,opacity:1,duration:.3,delay:.5}},fadeLeft:{out:{next:{x:-50,opacity:0,duration:.3},prev:{x:50,opacity:0,duration:.3}},set:{next:{x:50,opacity:0,duration:.3},prev:{x:-50,opacity:0,duration:.3}},in:{x:0,opacity:1,duration:.3,delay:.5}},slideScale:{out:{next:{x:"-100%",duration:.3,delay:.3},prev:{x:"100%",duration:.3,delay:.3}},set:{next:{x:"100%",scale:2},prev:{x:"-100%",scale:2}},in:{x:0,scale:1,duration:.6}},zoomOut:{out:{next:{y:-50,scale:1.2,opacity:0,duration:1.5},prev:{y:-50,scale:1.2,opacity:0,duration:1.5}},set:{next:{y:50,scale:.95,opacity:0,zIndex:2},prev:{y:50,scale:.95,opacity:0,zIndex:2}},in:{y:0,scale:1,opacity:1,duration:1}}},text:{none:{out:{},set:{next:{opacity:1,x:0,y:0,scale:1},prev:{opacity:1,x:0,y:0,scale:1}},in:{}},slide:{out:{next:{x:"-80vw",opacity:0,duration:.3},prev:{x:"80vw",opacity:0,duration:.3}},set:{next:{x:"80vw"},prev:{x:"-80vw"}},in:{x:0,opacity:1,duration:.3,delay:.3}},fade:{out:{next:{opacity:0,duration:.3},prev:{opacity:0,duration:.3}},set:{},in:{x:0,opacity:1,duration:.3,delay:.3}},fadeUp:{out:{next:{y:-20,opacity:0,duration:.3},prev:{y:20,opacity:0,duration:.3}},set:{next:{y:20,opacity:0,duration:.3},prev:{y:-20,opacity:0,duration:.3}},in:{y:0,opacity:1,duration:.3,delay:.5}},fadeDown:{out:{next:{y:20,opacity:0,duration:.3},prev:{y:-20,opacity:0,duration:.3}},set:{next:{y:-20,opacity:0,duration:.3},prev:{y:20,opacity:0,duration:.3}},in:{y:0,opacity:1,duration:.3,delay:.5}},textSlide:{out:{next:{y:"-120%",duration:.3},prev:{y:"120%",duration:.3}},set:{next:{y:"120%"},prev:{y:"-120%"}},in:{y:0,duration:.3,delay:.5}},fadeRight:{out:{next:{opacity:0,x:100,duration:.3},prev:{opacity:0,x:100,duration:.3}},set:{next:{opacity:0,x:-100},prev:{opacity:0,x:-100}},in:{opacity:1,x:0,duration:.3}},zoomOut:{out:{next:{y:-50,scale:1.2,opacity:0,duration:1.5},prev:{y:-50,scale:1.2,opacity:0,duration:1.5}},set:{next:{y:50,scale:.9,opacity:0},prev:{y:50,scale:.9,opacity:0}},in:{y:0,scale:1,opacity:1,duration:1.5,delay:1.5}}},url:{none:{out:{},set:{next:{opacity:1,x:0,y:0,scale:1},prev:{opacity:1,x:0,y:0,scale:1}},in:{}},slide:{out:{next:{x:"-80vw",opacity:0,duration:.3},prev:{x:"80vw",opacity:0,duration:.3}},set:{next:{x:"80vw"},prev:{x:"-80vw"}},in:{x:0,opacity:1,duration:.3,delay:.3}},fade:{out:{next:{opacity:0,duration:.3},prev:{opacity:0,duration:.3}},set:{},in:{x:0,opacity:1,duration:.3,delay:.3}},fadeUp:{out:{next:{y:-20,opacity:0,duration:.3},prev:{y:20,opacity:0,duration:.3}},set:{next:{y:20,opacity:0,duration:.3},prev:{y:-20,opacity:0,duration:.3}},in:{y:0,opacity:1,duration:.3,delay:.5}},fadeDown:{out:{next:{y:20,opacity:0,duration:.3},prev:{y:-20,opacity:0,duration:.3}},set:{next:{y:-20,opacity:0,duration:.3},prev:{y:20,opacity:0,duration:.3}},in:{y:0,opacity:1,duration:.3,delay:.5}},slideUp:{out:{next:{y:"-120%",duration:.3},prev:{y:"120%",duration:.3}},set:{next:{y:"120%"},prev:{y:"-120%"}},in:{y:0,duration:.3,delay:.5}},zoomOut:{out:{next:{y:-50,scale:1.2,opacity:0,duration:1.5},prev:{y:-50,scale:1.2,opacity:0,duration:1.5}},set:{next:{y:50,scale:.9,opacity:0},prev:{y:50,scale:.9,opacity:0}},in:{y:0,scale:1,opacity:1,duration:1.5,delay:1.5}}}},"textSlide"!=i&&"textSlide"!=a||(Splitting({target:g.find(".sub-title").get(),by:"lines"}),g.find(".sub-title").find("> span").wrap('<span class="text-wrap"></span>')),"textSlide"!=n&&"textSlide"!=s||(Splitting({target:g.find(".title").get(),by:"lines"}),g.find(".title").find("> span").wrap('<span class="text-wrap"></span>')),"textSlide"!=r&&"textSlide"!=o||(g.find(".desc").children().length?(Splitting({target:g.find(".desc").children().get(),by:"lines"}),g.find(".desc").children().find("> span, > i").wrap('<span class="text-wrap"></span>')):(Splitting({target:g.find(".desc").get(),by:"lines"}),g.find(".desc").find("> span").wrap('<span class="text-wrap"></span>'))),"slideUp"!=l&&"slideUp"!=d||g.find(".url1").find("> *").wrap('<span class="text-wrap"><span class="url-wrap"></span></span>'),"slideUp"!=f&&"slideUp"!=c||g.find(".url2").find("> *").wrap('<span class="text-wrap"><span class="url-wrap"></span></span>')},event:function(){var e=this,i=(e.args.subEffIn.eff,e.args.subEffOut.eff,e.args.titleEffIn.eff,e.args.titleEffOut.eff,e.args.descEffIn.eff,e.args.descEffOut.eff,e.args.wrapEffIn.eff,e.args.wrapEffOut.eff,e.args.autoplay),a=e.args.autoplaySpeed,n=e.args.kenburns,s=e.args.kenburnsZoom,r=e.args.kenburnsDuration/1e3,o=e.$elm.find(".content-wrap .slide"),l=e.$elm.find(".bg-wrap .bg"),d=e.$elm.find(".control-wrap .arrow-next"),f=e.$elm.find(".control-wrap .arrow-prev"),c=e.$elm.find(".control-wrap .nav-dots .dot"),p=e.$elm.find(".content-wrap .slide.active").first().index(),u=0,g="next",h=!1;function m(t){h||(h=!0,g=t,y(u="next"==t?p===o.length-1?0:p+1:0===p?o.length-1:p-1))}function y(i){o.eq(p),o.eq(i);var a,n;Promise.all([v(),(a=e.args.bgEffOut.eff,n=t.extend({},e.params.images[a].out[g],e.args.bgEffOut.prop),gsap.to(l[p],n)),w(),$(),C(),k(),q(),I(),z(),O(),T(),P(),S(),E(),b()]).then(function(){x()})}function v(){"yes"==n&&(gsap.set(l[u],{scale:1}),gsap.killTweensOf(l[p])),c.eq(p).removeClass("active"),c.eq(u).addClass("active"),o.eq(u).addClass("animating"),gsap.set(l[p],{zIndex:1}),gsap.set(l[u],{zIndex:2,visibility:"visible"}),gsap.set(o[p],{zIndex:1}),gsap.set(o[u],{zIndex:2,visibility:"visible",opacity:1}),o.eq(u).find(".sub-title").length&&(o.eq(u).find(".sub-title .text-wrap").length?gsap.set(o.eq(u).find(".sub-title"),{opacity:1}):gsap.set(o.eq(u).find(".sub-title"),{opacity:0})),o.eq(u).find(".title").length&&(o.eq(u).find(".title .text-wrap").length?gsap.set(o.eq(u).find(".title"),{opacity:1}):gsap.set(o.eq(u).find(".title"),{opacity:0})),o.eq(u).find(".desc").length&&(o.eq(u).find(".desc .text-wrap").length?gsap.set(o.eq(u).find(".desc"),{opacity:1}):gsap.set(o.eq(u).find(".desc"),{opacity:0})),o.eq(u).find(".url1").length&&(o.eq(u).find(".url1 .text-wrap").length?gsap.set(o.eq(u).find(".url1"),{opacity:1}):gsap.set(o.eq(u).find(".url1"),{opacity:0})),o.eq(u).find(".url2").length&&(o.eq(u).find(".url2 .text-wrap").length?gsap.set(o.eq(u).find(".url2"),{opacity:1}):gsap.set(o.eq(u).find(".url2"),{opacity:0}))}function x(){o.eq(p).removeClass("active"),l.eq(p).removeClass("active"),o.eq(u).removeClass("animating"),o.eq(u).addClass("active"),l.eq(u).addClass("active"),gsap.set(o[p],{visibility:"hidden",zIndex:0}),gsap.set(l[p],{visibility:"hidden",zIndex:0}),p=u,h=!1,"yes"==n&&gsap.to(l[u],{duration:r,scale:s,ease:"zoom"})}function w(){var i=e.args.bgEffIn.eff,a=e.params.images[i].set,n=t.extend({},e.params.images[i].in,e.args.bgEffIn.prop);if(a[g]&&gsap.set(l[u],a[g]),n)return gsap.to(l[u],n)}function b(){var i=e.args.wrapEffOut.eff,a=t.extend({},e.params.images[i].out[g],e.args.wrapEffOut.prop);return gsap.to(o[p],a)}function E(){var i=e.args.wrapEffIn.eff,a=e.params.images[i].set,n=t.extend({},e.params.images[i].in,e.args.wrapEffIn.prop);if(a[g]&&gsap.set(o[u],a[g]),n)return gsap.to(o[u],n)}function $(){if(o.eq(p).find(".sub-title").length){var i=o.eq(p).find(".sub-title");i.find(".text-wrap").length&&(i=i.find(".text-wrap > *"));var a=e.args.subEffOut.eff,n=t.extend({},e.params.text[a].out[g],e.args.subEffOut.prop);return gsap.to(i,n)}}function C(){if(o.eq(u).find(".sub-title").length){var i=o.eq(u).find(".sub-title");i.find(".text-wrap").length&&(i=i.find(".text-wrap > *"));var a=e.args.subEffIn.eff,n=e.params.text[a].set,s=t.extend({},e.params.text[a].in,e.args.subEffIn.prop);return n[g]&&gsap.set(i,n[g]),s?gsap.to(i,s):void 0}}function k(){if(o.eq(p).find(".title").length){var i=o.eq(p).find(".title");i.find(".text-wrap").length&&(i=i.find(".text-wrap > *"));var a=e.args.titleEffOut.eff,n=t.extend({},e.params.text[a].out[g],e.args.titleEffOut.prop);return gsap.to(i,n)}}function q(){if(o.eq(u).find(".title").length){var i=o.eq(u).find(".title");i.find(".text-wrap").length&&(i=i.find(".text-wrap > *"));var a=e.args.titleEffIn.eff,n=e.params.text[a].set,s=t.extend({},e.params.text[a].in,e.args.titleEffIn.prop);return n[g]&&gsap.set(i,n[g]),s?gsap.to(i,s):void 0}}function I(){if(o.eq(p).find(".desc").length){var i=o.eq(p).find(".desc");i.find(".text-wrap").length&&(i=i.find(".text-wrap > *"));var a=e.args.descEffOut.eff,n=t.extend({},e.params.text[a].out[g],e.args.descEffOut.prop);return gsap.to(i,n)}}function z(){if(o.eq(u).find(".desc").length){var i=o.eq(u).find(".desc");i.find(".text-wrap").length&&(i=i.find(".text-wrap > *"));var a=e.args.descEffIn.eff,n=e.params.text[a].set,s=t.extend({},e.params.text[a].in,e.args.descEffIn.prop);return n[g]&&gsap.set(i,n[g]),s?gsap.to(i,s):void 0}}function O(){if(o.eq(p).find(".url1").length){var i=o.eq(p).find(".url1");i.find(".text-wrap").length&&(i=i.find(".text-wrap > *"));var a=e.args.url1EffOut.eff,n=t.extend({},e.params.url[a].out[g],e.args.url1EffOut.prop);return gsap.to(i,n)}}function T(){if(o.find(".url1").length){var i=o.eq(u).find(".url1");i.find(".text-wrap").length&&(i=i.find(".text-wrap > *"));var a=e.args.url1EffIn.eff,n=e.params.url[a].set,s=t.extend({},e.params.url[a].in,e.args.url1EffIn.prop);return n[g]&&gsap.set(i,n[g]),s?gsap.to(i,s):void 0}}function P(){if(o.eq(p).find(".url2").length){var i=o.eq(p).find(".url2");i.find(".text-wrap").length&&(i=i.find(".text-wrap > *"));var a=e.args.url2EffOut.eff,n=t.extend({},e.params.url[a].out[g],e.args.url2EffOut.prop);return gsap.to(i,n)}}function S(){if(o.eq(u).find(".url2").length){var i=o.eq(u).find(".url2");i.find(".text-wrap").length&&(i=i.find(".text-wrap > *"));var a=e.args.url2EffIn.eff,n=e.params.url[a].set,s=t.extend({},e.params.url[a].in,e.args.url2EffIn.prop);return n[g]&&gsap.set(i,n[g]),s?gsap.to(i,s):void 0}}"yes"==n&&gsap.to(l[p],{duration:r,scale:s,ease:"zoom",delay:.3}),d.on("click",function(){m("next")}),f.on("click",function(){m("prev")}),c.each(function(e,i){t(i).on("click",function(){!function(t){if(h)return;if(t==p)return;h=!0,g=(u=t)>p?"next":"prev",y(u)}(e)})}),e.$elm.swipe({swipe:function(t,e,i,a,n,s){m("left"==e?"next":"prev")}}),"yes"==i&&setInterval(function(){m("next")},a)}}).defaults,t.fn.masterSlider=function(t){return this.each(function(){new n(this,t).init()})}}(jQuery,window,document),function(t,e,i,a){"use strict";var n=function(e,i){this.elm=e,this.$elm=t(e),this.opts=i,this.config=this.$elm.data("config")};n.defaults=(n.prototype={defaults:{event:"appear"},init:function(){return this.args=t.extend({},this.defaults,this.opts,this.config),this.build(),this},build:function(){var t=this,e=t.args.delay,i=t.args.effect;"none"!==i&&i&&(t.$elm.addClass("master-animation"),e&&t.css("animation-delay",e+"ms"),t.$elm.appear(function(){t.$elm.addClass(i)},{accTop:100}))}}).defaults,t.fn.masterImageEffect=function(t){return this.each(function(){new n(this,t).init()})}}(jQuery,window,document),function(t,e,i,a){"use strict";var n=function(e,i){this.elm=e,this.$elm=t(e),this.opts=i,this.config=this.$elm.data("config")};n.defaults=(n.prototype={defaults:{barColor:"#42d9be",trackColor:"#eef3f7",lineCap:"round",scaleColor:!1,scaleLength:0,lineWidth:3,size:140,animate:{duration:700,enabled:!0},percent:70},init:function(){return this.args=t.extend({},this.defaults,this.opts,this.config),this.build(),this},build:function(){var t=this,e=t.$elm.find(".chart"),i=t.args.percent,a=t.$elm.find(".percent");e.easyPieChart(t.args),e.data("easyPieChart").update(0),t.$elm.appear(function(){e.data("easyPieChart").update(i),a.countTo({from:0,to:i,speed:500})})}}).defaults,t.fn.masterPieChart=function(t){return this.each(function(){new n(this,t).init()})}}(jQuery,window,document),function(t,e,i,a){"use strict";var n=function(e,i){this.elm=e,this.$elm=t(e),this.opts=i,this.config=this.$elm.data("config")};n.prototype={defaults:{},init:function(){return this.args=t.extend({},this.defaults,this.opts,this.config),this.build(),this},build:function(){var e=this,i=e.$elm.find(".slick-slider-nav"),a=e.$elm.find(".slick-content-item");a.length&&a.find(".slick-nav-item").remove().appendTo(i);var n=e.$elm.find(".slick-container");if(n.length){var s=!1;t("html").is('[dir="rtl"]')&&(s=!0);var r={speed:700,infinite:!0,focusOnSelect:!0,rtl:s};n.each(function(){t(this).find(".slick-slider, .slick-slider-nav").each(function(){var e=t(this),i=e.data("slick");null==i&&(i={}),i=t.extend({},r,i),void 0!==e.data("navTarget")&&e.data("navTarget").length&&(i.asNavFor=t(e.data("navTarget")));var a=e.slick(i);void 0===this.unifato&&(this.unifato={}),this.unifato.slick={},this.unifato.slick.instance=a})})}}},t.fn.masterSlick=function(t){return this.each(function(){new n(this,t).init()})}}(jQuery,window,document),function(t,e,i,a){"use strict";var n=function(e,i){this.elm=e,this.$elm=t(e),this.opts=i,this.config=this.$elm.data("config")};n.defaults=(n.prototype={defaults:{color:"#3B5E75",size:5,gap:2,shape:"circle",image:"",animation:"random",rotate3D:!1},init:function(){return this.args=t.extend({},this.defaults,this.config),this.build(),this},build:function(){var t,a,n,s,r,o,l=this,d="dots-"+(new Date).getTime(),f=l.args.color,c=l.args.size,p=l.args.shape,u=l.args.image,g=l.args.gap,h=l.args.animation,m=l.args.rotate3D,y=l.args.moving,v=(l.$elm.find(".canvas-dots canvas").attr("id",d),l.$elm);s=v.innerWidth(),r=v.innerHeight();var x=new THREE.Vector3(0,0,0),w=0,b=function(t){if("circle"==p)var e=new THREE.Geometry,i=new THREE.PointsMaterial({size:c,sizeAttenuation:!1,map:l.circlePoint(f,c),transparent:!0});else e=new THREE.Geometry,i=new THREE.PointsMaterial({size:c,color:f,sizeAttenuation:!1});new TimelineMax;for(var n=c+g,s=0,r=t.height;s<r;s+=n)for(var d=0,u=t.width;d<u;d+=n)if(t.data[4*d+4*s*t.width+3]>128){var m=new THREE.Vector3;switch(h){case"vertical":m.x=d-t.width/2,m.y=-s+1e3*Math.random()-500,m.z=0;break;case"horizontal":m.x=d+1e3*Math.random()-500,m.y=-s+t.height/2,m.z=0;break;case"slideInLeft":m.x=d-1e3*Math.random()-500,m.y=-s+t.height/2,m.z=0;break;case"slideInRight":m.x=d+1e3*Math.random()+500,m.y=-s+t.height/2,m.z=0;break;case"slideInTop":m.x=d-t.width/2,m.y=-s+1e3*Math.random()+500,m.z=0;break;case"slideInBottom":m.x=d-t.width/2,m.y=-s-1e3*Math.random()-500,m.z=0;break;case"center":m.x=d-t.width/2,m.y=s-t.height/2,m.z=0;break;case"zoomIn":var y=t.width/2,v=t.height/2;m.x=-.01*(d-y),m.y=-.01*(s-v),m.z=0;break;default:m.x=1e3*Math.random()-500,m.y=1e3*Math.random()-500,m.z=500*-Math.random()}m.destination={x:d-t.width/2,y:-s+t.height/2,z:0},m.speed=Math.random()/200+.015,e.vertices.push(m)}o=new THREE.Points(e,i),a.add(o),l.$elm.appear(function(){requestAnimationFrame($)})},E=function(){s=v.innerWidth(),r=v.innerHeight(),t.setSize(s,r),n.aspect=s/r,n.updateProjectionMatrix()},$=function(e){requestAnimationFrame($);for(var i=o.geometry.vertices.length,s=0;s<i;s++){var r=o.geometry.vertices[s];r.destination&&(r.x+=(r.destination.x-r.x)*r.speed,r.y+=(r.destination.y-r.y)*r.speed,r.z+=(r.destination.z-r.z)*r.speed)}if(y&&e-w>500&&e<3e5){var l=Math.floor(Math.random()*o.geometry.vertices.length),d=o.geometry.vertices[l],f=o.geometry.vertices[o.geometry.vertices.length-l];f&&gsap.to(d,2*Math.random()+1,{x:f.x,y:f.y,ease:Power2.easeInOut}),d&&gsap.to(f,2*Math.random()+1,{x:d.x,y:d.y,ease:Power2.easeInOut}),w=e}o.geometry.verticesNeedUpdate=!0,m&&(n.position.x=15*Math.sin(e/5e3)),n.lookAt(x),t.render(a,n)};THREE.ImageUtils.crossOrigin="",(t=new THREE.WebGLRenderer({canvas:i.getElementById(d),antialias:!0,alpha:!0})).setSize(s,r),t.setClearColor(0,0),a=new THREE.Scene,(n=new THREE.PerspectiveCamera(100,s/r,1,1e3)).position.set(0,0,280),n.lookAt(x),a.add(n),(new THREE.TextureLoader).load(u,function(t){var e=i.createElement("canvas");e.width=t.image.width,e.height=t.image.height;var a=e.getContext("2d");a.drawImage(t.image,0,0);var n=a.getImageData(0,0,t.image.width,t.image.height);b(n)},void 0,function(t){console.error("An error happened.")}),e.addEventListener("resize",E,!1)},circlePoint:function(t,e){var a=i.createElement("canvas");a.width=a.height=e;var n=a.getContext("2d"),s=new THREE.Texture(a),r=e/2;return n.beginPath(),n.arc(r,r,e/2,0,2*Math.PI,!1),n.closePath(),n.fillStyle=t,n.fill(),s.needsUpdate=!0,s}}).defaults,t.fn.masterPngDots=function(t){return this.each(function(){new n(this,t).init()})}}(jQuery,window,document),function(t,e,i,a){"use strict";var n=function(e,i){this.elm=e,this.$elm=t(e),this.opts=i,this.config=this.$elm.data("config")};n.defaults=(n.prototype={defaults:{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:["#f7ccaf","#f6cacd","dbf5f8","#c5d8f8","#c5f8ce","#f7afbd","#b2d6ef","#f1ecb7"]},shape:{type:"triangle"},size:{value:50,random:!0,anim:{enable:!0,speed:1}},opacity:{value:.2},move:{direction:"right",attract:{enable:!0}},line_linked:{enable:!0,distance:150,opacity:.4,width:1}},retina_detect:!0,number:100,shape:"triangle",color:"#f7ccaf|#f6cacd|#dbf5f8",size:10,direction:"none",lines:!0,lineColor:"#ffffff",lineOpacity:.4,lineWidth:1,speed:1},init:function(){return this.args=t.extend({},this.defaults,this.config),this.build(),this},build:function(){var t=this,e="cp-"+(new Date).getTime(),i=t.args.number,a=t.args.shape,n=t.args.color.split("|"),s=t.args.size,r=t.args.opacity,o=t.args.direction,l=t.args.speed,d=t.args.lines,f=t.args.lineColor,c=t.args.lineOpacity,p=t.args.lineWidth;t.$elm.find(".canvas-particles").attr("id",e);if(t.args.particles.number.value=i,t.args.particles.shape.type=a,t.args.particles.color.value=n,t.args.particles.size.value=s,t.args.particles.opacity.value=r,t.args.particles.move.direction=o,t.args.particles.move.speed=l,t.args.particles.line_linked.enable=d,t.args.particles.line_linked.color=f,t.args.particles.line_linked.opacity=c,t.args.particles.line_linked.width=p,t.args.json){var u=JSON.parse(t.args.json);particlesJS(e,u)}else particlesJS(e,t.args)}}).defaults,t.fn.masterParticles=function(t){return this.each(function(){new n(this,t).init()})}}(jQuery,window,document);