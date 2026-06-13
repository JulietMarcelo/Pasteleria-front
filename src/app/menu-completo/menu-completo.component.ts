import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  name: string;
  detail?: string;
  price: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

@Component({
  standalone: true,
  selector: 'app-menu-completo',
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-completo.component.html',
  styleUrls: ['../app.component.scss']
})
export class MenuCompletoComponent {
  readonly menuCategories: MenuCategory[] = [
    {
      title: 'Desayunos y Platos Fuertes',
      items: [
        { name: 'Chilaquiles solos', price: '$60.00' },
        { name: 'Chilaquiles acompañados', detail: 'Acompañados de frijolitos. Proteína a elegir: Huevo estrellado, cecina o pechuga', price: '$120.00' },
        { name: 'Huevos al gusto', detail: 'Acompañados de frijolitos, totopos y salsa casera. Opciones: Chorizo, Tocino, Nopales, Divorciados, Espinaca, Revuelto con frijoles, En torta, Champiñones, Jamón o A la Mexicana', price: '$78.00' },
        { name: 'Ensalada Fresca', detail: 'Lechuga, manzana, fresa, nuez, arándanos, queso panela y pechuga asada', price: '$110.00' },
        { name: 'Ensalada Verde', detail: 'Lechuga, espinacas, apio, aguacate, almendras, queso de cabra y pechuga asada', price: '$110.00' },
        { name: 'Vegetales Asados', detail: 'Calabacita, zanahoria, brócoli, pimiento, requesón y pechuga asada o cecina', price: '$110.00' },
        { name: 'Caldito de pollo', detail: 'Calabacitas, zanahoria, chayote y brócoli', price: '$80.00' },
        { name: 'Omelette', detail: 'Acompañado de frijolitos, totopos y salsa casera. Ingrediente: Champiñones, Espinaca o Jamón', price: '$95.00' },
        { name: 'Enchiladas Suizas', price: '$95.00' },
        { name: 'Cuernitos', detail: 'Jamón y queso filadelfia', price: '$65.00' },
        { name: 'Huevos Napolitanos', detail: 'Jamón, cebolla, jitomate y queso manchego', price: '$95.00' },
        { name: 'Tostadas (2)', detail: 'Queso de cabra asado y aguacate', price: '$75.00' },
        { name: 'Pechuga a la plancha', detail: 'Frijoles, totopos, salsa casera, lechuga y aguacate', price: '$120.00' },
        { name: 'Sábana de filete', detail: 'Nopales asados, cebollitas, frijolitos y salsa casera', price: '$140.00' }
      ]
    },
    {
      title: 'Snacks y Especialidades',
      items: [
        { name: 'Alitas (10 pz)', detail: 'Con papas, vegetales y aderezo Ranch. Salsa: BBQ, Búfalo o Habanero', price: '$190.00' },
        { name: 'Alitas (6 pz)', detail: 'Con papas, vegetales y aderezo Ranch. Salsa: BBQ, Búfalo o Habanero', price: '$120.00' },
        { name: 'Boneless (10 pz)', detail: 'Con papas, vegetales y aderezo Ranch. Salsa: BBQ, Búfalo o Habanero', price: '$120.00' },
        { name: 'Boneless (6 pz)', detail: 'Con papas, vegetales y aderezo Ranch. Salsa: BBQ, Búfalo o Habanero', price: '$80.00' },
        { name: 'Bandeja de carnes frías y quesos', detail: 'Aproximado para 4 personas', price: '$650.00' },
        { name: 'Papas a la Francesa', price: '$65.00' },
        { name: 'Papas gajo', detail: 'Con Chorizo o tocino', price: '$65.00' },
        { name: 'Tender Chicken Burguer', price: '$90.00' },
        { name: 'Filete de pescado a la plancha', detail: 'Acompañado de vegetales al vapor', price: '$140.00' },
        { name: 'Filete de pescado a la plancha gratinado', detail: 'Acompañado de vegetales al vapor', price: '$160.00' },
        { name: 'Alambre de la casa', detail: 'Nopales, pimiento morrón, cebolla y queso Oaxaca', price: '$110.00' }
      ]
    },
    {
      title: 'Cafés, Bebidas y Antojos',
      items: [
        { name: 'Crepa Dulce', detail: 'Toppings: Nutella, Lechera, Chocolate, Fresa, Plátano, Zarzamora, Chispas de chocolate, Nuez o Almendra', price: '$85.00' },
        { name: 'Crepa Salada', detail: 'Opciones: Chorizo con Queso Oaxaca, Jamón con Queso Philadelfia, o Champiñones y Queso Manchego', price: '$85.00' },
        { name: 'Hot Cakes', detail: 'Toppings: Fresa, Plátano, Zarzamora, Nutella, Lecherra, Chocolate, Miel, Chispas de chocolate, Nuez o Almendras', price: '$95.00' },
        { name: 'Tazón de fruta', detail: 'Granola y yogurth', price: '$95.00' },
        { name: 'Frappes', detail: 'Sabores: Capuchino, Oreo, Chai, Mazapán, Moka o Cajeta', price: '$75.00' },
        { name: 'Frappe Nutella', price: '$80.00' },
        { name: 'Malteadas', detail: 'Sabores: Vainilla, Fresa o Chocolate', price: '$75.00' },
        { name: 'Café Americano', price: '$35.00' },
        { name: 'Café Capuchino', detail: 'Sabores: Natural, Vainilla francesa, Caramelo o Crema irlandesa', price: '$48.00' },
        { name: 'Café de la olla', price: '$25.00' },
        { name: 'Café frío', price: '$38.00' },
        { name: 'Agua Litro', price: '$25.00' },
        { name: 'Agua 1/2 Litro', price: '$15.00' },
        { name: 'Refrescos', detail: 'Coca, Pepsi o Sabor', price: '$35.00' },
        { name: 'Ponche de frutas (Copa)', price: '$45.00' },
        { name: 'Ponche de frutas (Jarra)', price: '$150.00' }
      ]
    },
    {
      title: 'Postres',
      items: [
        { name: 'Chocolate', price: '$65.00' },
        { name: 'Imposible', price: '$65.00' },
        { name: 'Napolitano', price: '$50.00' },
        { name: 'Queso y zarzamora', price: '$65.00' },
        { name: '3 leches c/ fresa', price: '$80.00' },
        { name: 'Zanahoria', price: '$80.00' },
        { name: 'Red Velvet', price: '$80.00' },
        { name: 'Tiramisú Clásico', price: '$95.00' },
        { name: 'Tartitas de fruta', price: '$50.00' },
        { name: 'Brownie con helado', detail: 'Helado de Vainilla, Fresa o Chocolate', price: '$95.00' },
        { name: 'Fresas con crema', price: '$75.00' },
        { name: 'Fresas con crema con helado', detail: 'Helado de Vainilla, Fresa o Chocolate', price: '$95.00' }
      ]
    }
  ];
}