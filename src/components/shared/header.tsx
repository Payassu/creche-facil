import { Link } from 'react-router-dom';
import { Baby, Phone } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuListItem,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu.tsx';
import { Button } from '@/components/ui/button.tsx';

const Header = () => (
  <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
          <Baby className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="text-xl text-foreground">Creche Fácil</span>
      </Link>

      {/* Desktop Nav */}
      <nav>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Sobre nós</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-44">
                  <NavigationMenuListItem
                    href="/about/creche-facil"
                    title="Quem somos"
                  />
                  <NavigationMenuListItem
                    href="/about/partners"
                    title="Parceiros"
                  />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Recursos</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-48">
                  <NavigationMenuListItem href="/faq" title="FAQ" />
                  <NavigationMenuListItem
                    href="/safety-guidelines"
                    title="Segurança"
                  />
                  <NavigationMenuListItem
                    href="/parenting-tips"
                    title="Parentalidade"
                  />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/contact"
                  className="text-sm font-medium flex-row place-items-center"
                >
                  <Phone className="h-3 w-3 mr-1" />
                  Contactar
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/*Auth Buttons*/}
      <div className="flex flex-row items-center justify-evenly w-56">
        <Button variant="default" size="sm" asChild>
          <Link to="/login">Iniciar Sessão</Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link to="/register">Registar</Link>
        </Button>
      </div>
    </div>
  </header>
);

export default Header;
