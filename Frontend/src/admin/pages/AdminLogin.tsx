import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Eye, EyeOff } from "lucide-react"
import { supabase } from "@/lib/supabase"

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

type FormData = z.infer<typeof formSchema>

interface Profile {
  role: string
  client_id?: string
}

export default function AdminLogin() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    setError(null)

    try {
      const email = data.email.trim()
      const password = data.password.trim()

      console.log('=== LOGIN ATTEMPT ===')
      console.log('Email:', email)
      console.log('Environment:', import.meta.env.MODE)
      console.log('Origin:', typeof window !== 'undefined' ? window.location.origin : 'SSR')
      console.log('===================')

      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      // Handle network/fetch errors separately
      if (authError) {
        console.error("Auth error details:", {
          message: authError.message,
          status: authError.status,
          name: authError.name,
          fullError: authError
        })

        // Specific handling for network/CORS errors
        if (authError.message?.includes('Failed to fetch') || 
            authError.message?.includes('NetworkError') ||
            authError.message?.includes('CORS')) {
          setError("Network error. Please check your internet connection and try again.")
        } else {
          setError(authError.message || "Authentication failed.")
        }
        return
      }

      if (!authData.user) {
        console.error("No user returned from auth")
        setError("Login failed. No user returned.")
        return
      }

      console.log("Auth successful for user:", authData.user.id)

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("role, client_id")
        .eq("id", authData.user.id)
        .single()

      if (profileError) {
        console.error("Profile fetch error:", {
          message: profileError.message,
          details: profileError.details,
          hint: profileError.hint,
          code: profileError.code
        })
        setError("Profile not found or access denied.")
        return
      }

      if (!profile) {
        console.error("No profile found for user:", authData.user.id)
        setError("Profile not found.")
        return
      }

      console.log("Profile found:", { role: profile.role, client_id: profile.client_id })

      if (profile.role === "super_admin") {
        navigate("/admin/super")
      } else if (profile.role === "client_admin") {
        navigate(`/admin/client/${profile.client_id}`)
      } else {
        console.error("Unauthorized role:", profile.role)
        setError("Unauthorized access.")
      }

    } catch (err: unknown) {
      console.error("Unexpected login error:", err)
      
      // Handle specific error types
      if (err instanceof TypeError && err.message.includes('fetch')) {
        setError("Network connection failed. Please check your internet and try again.")
      } else if (err instanceof Error) {
        setError(`Login error: ${err.message}`)
      } else {
        setError("An unexpected error occurred during login.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Warning Header */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-600 font-semibold text-center text-lg">
            THIS PAGE IS ONLY FOR ADMIN
          </p>
        </div>

        {/* Login Card */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Admin Login
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  {...register("email")}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    {...register("password")}
                    className={errors.password ? "border-red-500 pr-10" : "pr-10"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password.message}</p>
                )}
              </div>

              {/* Error Alert */}
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Authenticating...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            {/* Warning Footer */}
            <div className="pt-4 border-t">
              <p className="text-xs text-red-600 text-center">
                Unauthorized access is strictly prohibited.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
