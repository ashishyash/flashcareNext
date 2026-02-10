import { LoginForm } from '@/components/login-form'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center  bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Flash Care
          </h1>
          <p className="text-slate-400">
            Hospital Administrator Login
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
