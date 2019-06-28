let news = {
	state:{
		news:[
			{id:1,title:"baidu"},
			{id:2,title:"souhu"},
			{id:3,title:"tengxun"}
		]
	},
	getters:{
		getAllNews(state){
			return state.news;
		}
	}
}

export default news;
