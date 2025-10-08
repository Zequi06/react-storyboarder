import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        {/* Main Navigation */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <Link to="/" className="hover:underline transition-all">
            Início
          </Link>
          <Link to="/clinicas" className="hover:underline transition-all">
            Clínicas
          </Link>
          <Link to="/recomendacoes" className="hover:underline transition-all">
            Recomendações
          </Link>
          <Link to="/login" className="hover:underline transition-all">
            Login
          </Link>
        </div>

        {/* Scroll to Top Button */}
        <div className="flex justify-center mb-8">
          <Button 
            onClick={scrollToTop}
            variant="outline" 
            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
          >
            <ArrowUp className="mr-2 h-4 w-4" />
            Voltar ao Topo
          </Button>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link to="/politica-privacidade" className="hover:underline transition-all">
            Política de Privacidade
          </Link>
          <Link to="/termos-uso" className="hover:underline transition-all">
            Termos de Uso
          </Link>
          <Link to="/aviso-legal" className="hover:underline transition-all">
            Aviso Legal
          </Link>
          <Link to="/politica-cookies" className="hover:underline transition-all">
            Política de Cookies
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm opacity-80">
          © {new Date().getFullYear()} ComunicaVET. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
