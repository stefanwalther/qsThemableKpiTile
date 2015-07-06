define(["jquery","underscore","./properties","./lib/js/extensionUtils","text!./lib/partials/template.ng.html","text!./lib/css/style.css","text!./config/layouts.json"],function(a,b,c,d,e,f,g){"use strict";d.addStyleToHeader(f,"swr-themablekpitile");var h=JSON.parse(g);return{initialProperties:{showTitles:!1},definition:c,snapshot:{canTakeSnapshot:!0},template:e,controller:["$scope","$element","$sce",function(a,b,c){function d(){return a.layout.props&&a.layout.props.layoutMode?a.get(a.layout.props.kpiComparison>0?"comparisonPositiveColor":a.layout.props.kpiComparison<0?"comparisonNegativeColor":"comparisonNeutralColor"):""}function e(){return a.layout.props&&a.layout.props.layoutMode?void(a.kpiIcon=c.trustAsHtml(a.layout.props.kpiComparison>0?a.get("comparisonPositiveIcon"):a.layout.props.kpiComparison<0?a.get("comparisonNegativeIcon"):a.get("comparisonNeutralIcon"))):""}a.get=function(b){if(!a.layout.props||!a.layout.props.layoutMode)return"";var c={tileBackgroundColor:"#E7E7E7",titleColor:"#333333",comparisonPositiveColor:"#006600",comparisonNegativeColor:"#CC0000",comparisonNeutralColor:"#333333",comparisonPositiveIcon:"&#9650;",comparisonNegativeIcon:"&#9660;",comparisonNeutralIcon:"&#9654;"};switch(a.layout.props.layoutMode){case"default":return c[b];case"custom":return a.layout.props[b];case"template":var d=a.layout.props.layoutTemplate;return h[d]?h[d][b]:""}},a.setStyles=function(){var c=14,f=b.height()-c;a.tileStyle={backgroundColor:a.get("tileBackgroundColor")},a.titleStyle={color:a.get("titleColor"),fontSize:Math.max(f/6,12)+"px"},a.kpiStyle={color:a.get("kpiColor"),fontSize:Math.max(f/4,12)+"px",paddingTop:Math.max(f/10)+"px"},a.kpiComparisonStyle={fontSize:Math.max(f/6,10)+"px",color:d()},e()},a.$watch(function(){return{h:b.height(),w:b.width()}},function(b,c){!b||b.h===c.h&&b.w===c.w||a.setStyles()},!0),a.$watch(function(){return{kpiComparison:a.layout.props?a.layout.props.kpiComparison:null,layoutMode:a.layout.props?a.layout.props.layoutMode:null,layoutTemplate:a.layout.props?a.layout.props.layoutTemplate:null}},function(b,c){!b||b.kpiComparison===c.kpiComparison&&b.layoutMode===c.layoutMode&&b.layoutTemplate===c.layoutTemplate||a.setStyles()},!0),a.setStyles()}]}});