import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function LoginPage() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Iniciar sesión</CardTitle>
          <CardDescription>Ingrese sus credenciales para continuar.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-2">
              <Label htmlFor="email">Correo</Label>
              <Input id="email" type="email" placeholder="usuario@utn.ac.cr" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" className="w-full">
              Ingresar
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <Button asChild variant="link" className="px-0">
            <Link to="/">Volver al inicio</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
