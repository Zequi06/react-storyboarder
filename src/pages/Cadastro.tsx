import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import pataImage from "@/assets/pata.png";

const Cadastro = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    pais: "",
    estado: "",
    cidade: "",
    bairro: "",
    rua: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.senha !== formData.confirmarSenha) {
      toast({
        title: "Erro",
        description: "As senhas não coincidem",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Cadastro realizado!",
      description: "Bem-vindo ao ComunicaVET",
    });
    
    navigate("/");
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12 relative">
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
          <CardTitle className="text-3xl text-center font-bold">Junte-se a Nós</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nomeCompleto">Nome Completo:</Label>
              <Input
                id="nomeCompleto"
                type="text"
                value={formData.nomeCompleto}
                onChange={(e) => handleChange("nomeCompleto", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pais">País:</Label>
              <Select value={formData.pais} onValueChange={(value) => handleChange("pais", value)}>
                <SelectTrigger id="pais">
                  <SelectValue placeholder="Selecione o país" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="brasil">Brasil</SelectItem>
                  <SelectItem value="portugal">Portugal</SelectItem>
                  <SelectItem value="angola">Angola</SelectItem>
                  <SelectItem value="mocambique">Moçambique</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="estado">Estado:</Label>
              <Input
                id="estado"
                type="text"
                value={formData.estado}
                onChange={(e) => handleChange("estado", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cidade">Cidade:</Label>
              <Input
                id="cidade"
                type="text"
                value={formData.cidade}
                onChange={(e) => handleChange("cidade", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bairro">Bairro:</Label>
              <Input
                id="bairro"
                type="text"
                value={formData.bairro}
                onChange={(e) => handleChange("bairro", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rua">Rua:</Label>
              <Input
                id="rua"
                type="text"
                value={formData.rua}
                onChange={(e) => handleChange("rua", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email:</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="senha">Senha:</Label>
              <Input
                id="senha"
                type="password"
                value={formData.senha}
                onChange={(e) => handleChange("senha", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmarSenha">Confirmar senha:</Label>
              <Input
                id="confirmarSenha"
                type="password"
                value={formData.confirmarSenha}
                onChange={(e) => handleChange("confirmarSenha", e.target.value)}
                required
              />
            </div>

            <div className="text-center text-sm">
              Já possui uma conta?{" "}
              <Link to="/login" className="text-primary hover:underline font-semibold">
                Entre agora!
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
              <Button type="submit" className="flex-1 bg-[#00CED1] hover:bg-[#00CED1]/90 text-white">
                Cadastrar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cadastro;
