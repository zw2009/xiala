let users = {
	state:{
		users:[
			{id:1,name:'zhangwei'},
			{id:2,name:'zhangling'}
		]
	},
	getters:{
		getAllUsers(state){
			return state.users;
		}
	}
}

export default users;