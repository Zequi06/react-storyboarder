import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import pataImage from "@/assets/pata.png";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative">
      <div 
        className="absolute inset-0 opacity-10 bg-repeat"
        style={{
          backgroundImage: `url(${pataImage})`,
          backgroundSize: '200px',
        }}
      />
      <Card className="w-full max-w-md shadow-xl relative z-10">
        <CardHeader>
          <CardTitle className="text-3xl text-center font-bold">Seja Bem Vindo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email:</Label>
            <Input id="email" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="senha">Senha:</Label>
            <Input id="senha" type="password" />
          </div>
          
          <div className="text-sm">
            Esqueceu sua senha?{" "}
            <Link to="/recuperar-senha" className="text-[#00CED1] hover:underline font-semibold">
              Recupere aqui
            </Link>
          </div>

          <div className="flex gap-4 pt-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => navigate("/")}
            >
              Voltar
            </Button>
            <Button className="flex-1 bg-[#00CED1] hover:bg-[#00CED1]/90 text-white">
              Entrar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
