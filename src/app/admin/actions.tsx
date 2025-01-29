'use server'

interface LoginState {
  error: string
  success: boolean
}

export async function login(_prevState: LoginState, formData: FormData) {
  const username = formData.get('username')
  const password = formData.get('password')

  if (username === 'admin' && password === '1234') {
    return { error: '', success: true }
  }

  return { error: 'Identifiants incorrects', success: false }
} 