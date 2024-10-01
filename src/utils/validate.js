export const checkValidData = (email,password,name) =>{
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
  const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)
  const isNameValid = /^[a-z][-a-z0-9_]*$/.test(name)
  if(!isEmailValid) return "Email ID is not valid"
  if(!isPasswordValid) return "Password is not valid"
  if(!isNameValid) return "Nam is not valuid"

  return null;
}