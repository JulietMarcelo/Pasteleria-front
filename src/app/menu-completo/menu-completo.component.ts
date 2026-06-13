import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  name: string;
  description?: string;
  options?: string[];
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
        { name: 'Chilaquiles acompañados', description: 'Acompañados de frijolitos', options: ['Huevo estrellado', 'Cecina', 'Pechuga'], price: '$120.00' },
        { name: 'Huevos al gusto', description: 'Con frijolitos, totopos y salsa casera', options: ['Chorizo', 'Tocino', 'Nopales', 'Divorciados', 'Espinaca', 'Revuelto con frijoles', 'En torta', 'Champiñones', 'Jamón', 'A la Mexicana'], price: '$78.00' },
        { name: 'Ensalada Fresca', description: 'Lechuga, manzana, fresa, nuez, arándanos, queso panela y pechuga asada', price: '$110.00' },
        { name: 'Ensalada Verde', description: 'Lechuga, espinacas, apio, aguacate, almendras, queso de cabra y pechuga asada', price: '$110.00' },
        { name: 'Vegetales Asados', description: 'Calabacita, zanahoria, brócoli, pimiento, requesón', options: ['Pechuga asada', 'Cecina'], price: '$110.00' },
        { name: 'Caldito de pollo', description: 'Calabacitas, zanahoria, chayote y brócoli', price: '$80.00' },
        { name: 'Omelette', description: 'Acompañado de frijolitos, totopos y salsa casera', options: ['Champiñones', 'Espinaca', 'Jamón'], price: '$95.00' },
        { name: 'Enchiladas Suizas', price: '$95.00' },
        { name: 'Cuernitos', description: 'Jamón y queso filadelfia', price: '$65.00' },
        { name: 'Huevos Napolitanos', description: 'Jamón, cebolla, jitomate y queso manchego', price: '$95.00' },
        { name: 'Tostadas (2)', description: 'Queso de cabra asado y aguacate', price: '$75.00' },
        { name: 'Pechuga a la plancha', description: 'Frijoles, totopos, salsa casera, lechuga y aguacate', price: '$120.00' },
        { name: 'Sábana de filete', description: 'Nopales asados, cebollitas, frijolitos y salsa casera', price: '$140.00' }
      ]
    },
    {
      title: 'Snacks y Especialidades',
      items: [
        { name: 'Alitas (10 pz)', description: 'Con papas, vegetales y aderezo Ranch', options: ['BBQ', 'Búfalo', 'Habanero'], price: '$190.00' },
        { name: 'Alitas (6 pz)', description: 'Con papas, vegetales y aderezo Ranch', options: ['BBQ', 'Búfalo', 'Habanero'], price: '$120.00' },
        { name: 'Boneless (10 pz)', description: 'Con papas, vegetales y aderezo Ranch', options: ['BBQ', 'Búfalo', 'Habanero'], price: '$120.00' },
        { name: 'Boneless (6 pz)', description: 'Con papas, vegetales y aderezo Ranch', options: ['BBQ', 'Búfalo', 'Habanero'], price: '$80.00' },
        { name: 'Bandeja de carnes frías y quesos', description: 'Aproximado para 4 personas', price: '$650.00' },
        { name: 'Papas a la Francesa', price: '$65.00' },
        { name: 'Papas gajo', options: ['Chorizo', 'Tocino'], price: '$65.00' },
        { name: 'Tender Chicken Burguer', price: '$90.00' },
        { name: 'Filete de pescado a la plancha', description: 'Acompañado de vegetales al vapor', price: '$140.00' },
        { name: 'Filete de pescado a la plancha gratinado', description: 'Acompañado de vegetales al vapor', price: '$160.00' },
        { name: 'Alambre de la casa', description: 'Nopales, pimiento morrón, cebolla y queso Oaxaca', price: '$110.00' }
      ]
    },
    {
      title: 'Cafés, Bebidas y Antojos',
      items: [
        { name: 'Crepa Dulce', options: ['Nutella', 'Lechera', 'Chocolate', 'Fresa', 'Plátano', 'Zarzamora', 'Chispas de chocolate', 'Nuez', 'Almendra'], price: '$85.00' },
        { name: 'Crepa Salada', options: ['Chorizo con Queso Oaxaca', 'Jamón con Queso Filadelfia', 'Champiñones y Queso Manchego'], price: '$85.00' },
        { name: 'Hot Cakes', options: ['Fresa', 'Plátano', 'Zarzamora', 'Nutella', 'Lechera', 'Chocolate', 'Miel', 'Chispas de chocolate', 'Nuez', 'Almendras'], price: '$95.00' },
        { name: 'Tazón de fruta', description: 'Con granola y yogurth', price: '$95.00' },
        { name: 'Frappes', options: ['Capuchino', 'Oreo', 'Chai', 'Mazapán', 'Moka', 'Cajeta'], price: '$75.00' },
        { name: 'Frappe Nutella', price: '$80.00' },
        { name: 'Malteadas', options: ['Vainilla', 'Fresa', 'Chocolate'], price: '$75.00' },
        { name: 'Café Americano', price: '$35.00' },
        { name: 'Café Capuchino', options: ['Natural', 'Vainilla francesa', 'Caramelo', 'Crema irlandesa'], price: '$48.00' },
        { name: 'Café de la olla', price: '$25.00' },
        { name: 'Café frío', price: '$38.00' },
        { name: 'Agua Litro', price: '$25.00' },
        { name: 'Agua 1/2 Litro', price: '$15.00' },
        { name: 'Refrescos', options: ['Coca', 'Pepsi', 'Sabor'], price: '$35.00' },
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
        { name: 'Brownie con helado', options: ['Helado de Vainilla', 'Fresa', 'Chocolate'], price: '$95.00' },
        { name: 'Fresas con crema', price: '$75.00' },
        { name: 'Fresas con crema con helado', options: ['Helado de Vainilla', 'Fresa', 'Chocolate'], price: '$95.00' }
      ]
    }
  ];
}