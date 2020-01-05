const postReducer =( state=[],action)=>{
    switch(action.type){
        case 'ADD_DATA':
            return state.concat([action.data])
        case 'DELETE_DATA':
            return state.filter((post)=>post.id!==action.id)
        case 'EDIT_POST':
            return state.map((post)=>post.id===action.id?{...post,editing:!post.editing}:post)
        case 'UPDATE_DATA':
            return state.map((post)=>{
                if(post.id === action.id) {
                  return {
                     ...post,
                     selectedCompany:action.data.newselectedCompany,
                     title:action.data.newtitle,
                     Openings:action.data.newOpenings,
                     Salary:action.data.newSalary,
                     editing:!post.editing

                     
                  }
                  
                }
                else return post;
            })
        default:
            return state;
    }

}
export default postReducer

// // newselectedCompany = this.getcompany.value
//         const newLocation = this.getlocation.value;
//         const newtitle = this.getjobTitle.value;
//         const newOpenings = this.getopenings.value;
//         const newSalary = this.getsalary.value;
