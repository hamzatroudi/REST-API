 var tabcontact= [

    { _id:1,
      name:'hamza',
      phone:'22505617',
      email:'troudi.hamza90@gmail.com'
    },
    { _id:2,
        name:'wael',
        phone:'21577797',
        email:'me-wael@hotmail.com'
      }

]

const contactReducer=(state=tabcontact,action)=>
{
    switch(action.type)
    {
        case 'ADD-CONTACT':
        return(
        state.concat(action.newcontact)
        )

        case 'EDIT-CONTACT':
        return (
        state.map(el=>(el._id == action.editcontact._id) ? el=action.editcontact : el)
        )

        case 'DELETE_CONTACT':
        return (
            state.filter((el,index)=>el._id!==action._id)
        )

        case 'UPDATE_CONTACTS':
        return (
           state=action.contacts
        )

       default :
      return state
    }

}

export default contactReducer