<template>
	<div class="hd">
		<h1>这是首页内容hdphp <span>www.baidu.com</span></h1>
		<!--<home></home>
		<router-link to="/hdphp">去hdphp</router-link>-->
		<router-view></router-view>
		<div v-for="v in goods">{{v.id}} - {{v.title}}</div>
		<div class="borde">
			1111111111111
		</div>
		<div v-for="v in users"> {{v.id}}- {{v.name}}</div>
	</div>
</template>
	
<script>
	import home from './org/Home'
	export default{
		components:{ home },
		computed:{
			goods(){
				return this.$store.getters.getAllNews;
			},
			users(){
				return this.$store.getters.getAllUsers;
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
   @boder1 :1px solid #ccc;
   @height30:30px;
   @backyello:yellow;
   @colorfff:#fff;
	body{
		h1{
			background: red;
			color: yellow;
			span{
				color:#2C3E50;
			}
		}
	}
.borde{
	border: @boder1;
	height: @height30;
	line-height: @height30;
	background: @backyello;
	color:@colorfff;
}
</style>