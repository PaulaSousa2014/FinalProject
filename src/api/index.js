// Conexión de la web con la base de datos Supabase
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

// Función para registrar nuevos clientes por email y contraseña y guardar en supabase
export const registro = async (email, password) => {
  const response = await supabase.auth.signUp({
    email,
    password,
  });

  console.log(response);
};

// Función para conectar el Nombre del usuario con supabase ( no llegue a terminar la conexión)
export const selectName = async () => {
  let { data: Profile, error } = await supabase.from("Profile").select("Name");
};

// Función para recuperar cuenta cuando se olvida el password (el usuario recibe un link para acceder la cuenta por email)
export const recEmail = async (email) => {
  let { data, error } = await supabase.auth.resetPasswordForEmail(email);
  console.log(error);
  return error;
};

// Función para actualizar los datos del usuarios (Esta siendo utilizada para cambiar la contraseña)
export const updateUser = async (email, password) => {
  const { user, error } = await supabase.auth.updateUser({
    email,
    password,
    data: { hello: "world" },
  });
  console.log(error);
};

// Función para logear el usuario segun email y contraseña guardado en supabase
export const login = async (email, password) => {
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (response.error) {
    return false;
  }

  return response.data.user.id;
};

// Función para crear nueva tarea y guardarla en supabase
export const newTask = async (task) => {
  const response = await supabase.from("task").insert(task);
  console.log(response);
  if (response.error) {
    return false;
  }
};

// Función para visualizar las tareas guardadas en supabase
export const getTasks = async () => {
  const response = await supabase
    .from("task")
    .select("*")
    .order("id", { ascending: false });
  console.log(response);
  return response.data;
};

// Función para actualizar los datos de una task guardada anteriormente
export const updateTask = async (taskId, task) => {
  const response = await supabase.from("task").update(task).eq("id", taskId);
  console.log(response);
};

// Función eliminar task guardada anteriormente
export const deleteTask = async (taskId) => {
  const response = await supabase.from("task").delete().eq("id", taskId);
  console.log(response);
};

// Función para hacer el logout del usuario
export const logOut = async () => {
  const response = await supabase.auth.signOut();
  console.log(response);
};
