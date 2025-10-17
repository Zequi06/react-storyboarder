import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import pataImage from "@/assets/pata.png";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const VerificarCodigo = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [code, setCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (code.length !== 6) {
      toast({
        title: "Código inválido",
        description: "Por favor, insira o código de 6 dígitos",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Código verificado!",
      description: "Redirecionando para redefinir sua senha",
    });
    
    // Aqui você redirecionaria para a página de nova senha
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${pataImage})`,
          backgroundSize: '80%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <Card className="w-full max-w-md shadow-xl relative z-10">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Esqueceu a senha</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-center">
                <InputOTP
                  maxLength={6}
                  value={code}
                  onChange={(value) => setCode(value)}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <p className="text-sm text-center font-medium">
                Insira o código enviado em seu e-mail para confirmar sua identidade
              </p>
            </div>

            <div className="flex justify-center gap-6 pt-4">
              <button
                type="button"
                className="text-foreground font-medium hover:underline"
                onClick={() => navigate("/recuperar-senha")}
              >
                cancelar
              </button>
              <Button type="submit" className="bg-[#00CED1] hover:bg-[#00CED1]/90 text-white px-8">
                Continuar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerificarCodigo;
