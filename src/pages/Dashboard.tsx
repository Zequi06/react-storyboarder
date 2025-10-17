import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { PawPrint, Calendar, FileText, MapPin } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Meu Painel</h1>
          <Button variant="outline" onClick={() => navigate("/")}>
            Sair
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Bem-vindo de volta!</h2>
          <p className="text-muted-foreground">
            Gerencie as informações do seu pet aqui
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Meus Pets</CardTitle>
              <PawPrint className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">
                pets cadastrados
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/clinicas")}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Clínicas</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Ver</div>
              <p className="text-xs text-muted-foreground">
                clínicas próximas
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Consultas</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                próximas consultas
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/recomendacoes")}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dicas</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Ver</div>
              <p className="text-xs text-muted-foreground">
                recomendações
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 pb-4 border-b">
                <div className="bg-[#00CED1]/10 p-2 rounded-full">
                  <PawPrint className="h-5 w-5 text-[#00CED1]" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Consulta agendada</p>
                  <p className="text-sm text-muted-foreground">
                    Consulta com Dr. Silva agendada para 20/10/2025
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Há 2 horas</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-4 border-b">
                <div className="bg-[#00CED1]/10 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-[#00CED1]" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Vacina aplicada</p>
                  <p className="text-sm text-muted-foreground">
                    Vacina antirrábica aplicada em Thor
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Há 1 dia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#00CED1]/10 p-2 rounded-full">
                  <FileText className="h-5 w-5 text-[#00CED1]" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Novo pet cadastrado</p>
                  <p className="text-sm text-muted-foreground">
                    Mia foi adicionada ao seu perfil
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Há 3 dias</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
