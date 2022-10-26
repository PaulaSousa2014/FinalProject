import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

export const registro = async (email, password) => {
    const response = await supabase.auth.signUp({
        email,
        password
    })
   
    console.log(response)
}

export const recEmail = async (email) => {
   
    let { data, error } = await supabase.auth.resetPasswordForEmail(email)
    console.log(error)
    return error
    

}
export const updateUser = async (email, password) => {
const { user, error } = await supabase.auth.update({
    email,
    password,
    data: { hello: 'world' }
  })

}


export const login = async (email, password) => {
    const response = await supabase.auth.signInWithPassword({
        email,
        password

    })
    if(response.error){ 
        return false  
    }

    return response.data.user.id
    
}


// task: {
//             user_id: id;
//             title: 'Titulo';
//             description: 'Descripcion del task'
//         }

export const newTask = async (task) => {
    const response = await supabase.from('task')
        .insert(task)
    console.log(response);
    if(response.error){
        return false
    }
}

export const getTasks = async () => {
    const response = await supabase
        .from('task')
        .select('*')
        .order('id', { ascending: false })
    console.log(response)
   return  response.data
    
}

/*
task: {
            title: 'Titulo modificado',
            description: 'Descripcion del task modificado'
        }
*/
export const updateTask = async (taskId, task) => {

    const response = await supabase
        .from('task')
        .update(task)
        .eq('id', taskId)

    // TODO identificar el resulado y retornar lo que nos interesa, p.ej true si ha ido bien false si ha fallado
    console.log(response)
}

export const deleteTask = async (taskId) => {
    const response = await supabase
        .from('task')
        .delete()
        .eq('id', taskId)
       console.log(response)
}

export const logOut = async () => {
    const response = await supabase.auth.signOut()
    console.log(response)
}