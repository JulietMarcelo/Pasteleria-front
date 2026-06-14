import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface MenuOption {
  name: string;
  price?: string;
}

interface MenuItem {
  name: string;
  description?: string;
  options?: MenuOption[];
  price: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
  selectedOption?: MenuOption;
  notes?: string;
}

@Component({
  standalone: true,
  selector: 'app-menu-completo',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './menu-completo.component.html',
  styleUrls: ['../app.component.scss']
})
export class MenuCompletoComponent {
  cart: CartItem[] = [];
  isCartOpen = false;
  isNavOpen = false;
  itemWithOptions: MenuItem | null = null;
  deliveryMethod: 'pickup' | 'delivery' = 'pickup';
  deliveryAddress: string = '';
  deliveryReferences: string = '';
  readonly deliveryCost = 30;
  readonly phoneNumber = '527676719000'; // Número de Pasteles Reyes

  readonly menuCategories: MenuCategory[] = [
    {
      title: 'Desayunos y Platos Fuertes',
      items: [
        { name: 'Chilaquiles solos', price: '$60.00' },
        { name: 'Chilaquiles acompañados', description: 'Acompañados de frijolitos', options: [{ name: 'Huevo estrellado' }, { name: 'Cecina' }, { name: 'Pechuga' }], price: '$120.00' },
        { name: 'Huevos al gusto', description: 'Con frijolitos, totopos y salsa casera', options: [{ name: 'Chorizo' }, { name: 'Tocino' }, { name: 'Nopales' }, { name: 'Divorciados' }, { name: 'Espinaca' }, { name: 'Revuelto con frijoles' }, { name: 'En torta' }, { name: 'Champiñones' }, { name: 'Jamón' }, { name: 'A la Mexicana' }], price: '$78.00' },
        { name: 'Ensalada Fresca', description: 'Lechuga, manzana, fresa, nuez, arándanos, queso panela y pechuga asada', price: '$110.00' },
        { name: 'Ensalada Verde', description: 'Lechuga, espinacas, apio, aguacate, almendras, queso de cabra y pechuga asada', price: '$110.00' },
        { name: 'Vegetales Asados', description: 'Calabacita, zanahoria, brócoli, pimiento, requesón', options: [{ name: 'Pechuga asada' }, { name: 'Cecina' }], price: '$110.00' },
        { name: 'Caldito de pollo', description: 'Calabacitas, zanahoria, chayote y brócoli', price: '$80.00' },
        { name: 'Omelette', description: 'Acompañado de frijolitos, totopos y salsa casera', options: [{ name: 'Champiñones' }, { name: 'Espinaca' }, { name: 'Jamón' }], price: '$95.00' },
        { name: 'Enchiladas Suizas', price: '$95.00' },
        { name: 'Cuernitos', description: 'Jamón y queso filadelfia', price: '$65.00' },
        { name: 'Huevos Napolitanos', description: 'Jamón, cebolla, jitomate y queso manchego', price: '$95.00' },
        { name: 'Tostadas', description: 'Queso de cabra asado y aguacate', price: '$75.00' },
        { name: 'Pechuga a la plancha', description: 'Frijoles, totopos, salsa casera, lechuga y aguacate', price: '$120.00' },
        { name: 'Sábana de filete', description: 'Nopales asados, cebollitas, frijolitos y salsa casera', price: '$140.00' }
      ]
    },
    {
      title: 'Snacks y Especialidades',
      items: [
        { name: 'Alitas (10 pz)', description: 'Con papas, vegetales y aderezo Ranch', options: [{ name: 'BBQ' }, { name: 'Búfalo' }, { name: 'Habanero' }], price: '$190.00' },
        { name: 'Alitas (6 pz)', description: 'Con papas, vegetales y aderezo Ranch', options: [{ name: 'BBQ' }, { name: 'Búfalo' }, { name: 'Habanero' }], price: '$120.00' },
        { name: 'Boneless (10 pz)', description: 'Con papas, vegetales y aderezo Ranch', options: [{ name: 'BBQ' }, { name: 'Búfalo' }, { name: 'Habanero' }], price: '$120.00' },
        { name: 'Boneless (6 pz)', description: 'Con papas, vegetales y aderezo Ranch', options: [{ name: 'BBQ' }, { name: 'Búfalo' }, { name: 'Habanero' }], price: '$80.00' },
        { name: 'Bandeja de carnes frías y quesos', description: 'Aproximado para 4 personas', price: '$650.00' },
        { name: 'Papas a la Francesa', price: '$65.00' },
        { name: 'Papas gajo', options: [{ name: 'Chorizo' }, { name: 'Tocino' }], price: '$65.00' },
        { name: 'Tender Chicken Burguer', price: '$90.00' },
        { name: 'Filete de pescado a la plancha', description: 'Acompañado de vegetales al vapor', price: '$140.00' },
        { name: 'Filete de pescado a la plancha gratinado', description: 'Acompañado de vegetales al vapor', price: '$160.00' },
        { name: 'Alambre de la casa', description: 'Nopales, pimiento morrón, cebolla y queso Oaxaca', price: '$110.00' }
      ]
    },
    {
      title: 'Cafés, Bebidas y Antojos',
      items: [
        { name: 'Crepa Dulce', options: [{ name: 'Nutella' }, { name: 'Lechera' }, { name: 'Chocolate' }, { name: 'Fresa' }, { name: 'Plátano' }, { name: 'Zarzamora' }, { name: 'Chispas de chocolate' }, { name: 'Nuez' }, { name: 'Almendra' }], price: '$85.00' },
        { name: 'Crepa Salada', options: [{ name: 'Chorizo con Queso Oaxaca' }, { name: 'Jamón con Queso Filadelfia' }, { name: 'Champiñones y Queso Manchego' }], price: '$85.00' },
        { name: 'Hot Cakes', options: [{ name: 'Fresa' }, { name: 'Plátano' }, { name: 'Zarzamora' }, { name: 'Nutella' }, { name: 'Lechera' }, { name: 'Chocolate' }, { name: 'Miel' }, { name: 'Chispas de chocolate' }, { name: 'Nuez' }, { name: 'Almendras' }], price: '$95.00' },
        { name: 'Tazón de fruta', description: 'Con granola y yogurth', price: '$95.00' },
        { name: 'Frappes', options: [{ name: 'Capuchino' }, { name: 'Oreo' }, { name: 'Chai' }, { name: 'Mazapán' }, { name: 'Moka' }, { name: 'Cajeta' }], price: '$75.00' },
        { name: 'Frappe Nutella', price: '$80.00' },
        { name: 'Malteadas', options: [{ name: 'Vainilla' }, { name: 'Fresa' }, { name: 'Chocolate' }], price: '$75.00' },
        { name: 'Café Americano', price: '$35.00' },
        { name: 'Café Capuchino', options: [{ name: 'Natural' }, { name: 'Vainilla francesa' }, { name: 'Caramelo' }, { name: 'Crema irlandesa' }], price: '$48.00' },
        { name: 'Café de la olla', price: '$25.00' },
        { name: 'Café frío', price: '$38.00' },
        { name: 'Agua Litro', price: '$25.00' },
        { name: 'Agua 1/2 Litro', price: '$15.00' },
        { name: 'Refrescos', options: [{ name: 'Coca' }, { name: 'Pepsi' }], price: '$35.00' },
        { name: 'Ponche de frutas (Copa)', price: '$45.00' },
        { name: 'Ponche de frutas (Jarra)', price: '$150.00' }
      ]
    },
    {
      title: 'Postres',
      items: [
        {
          name: 'Rebanada de pastel',
          description: 'Elige tu sabor favorito de nuestros pasteles de vitrina.',
          price: 'Desde $50.00',
          options: [
            { name: 'Napolitano', price: '$50.00' },
            { name: 'Chocolate', price: '$65.00' },
            { name: 'Imposible', price: '$65.00' },
            { name: 'Queso y zarzamora', price: '$65.00' },
            { name: '3 leches c/ fresa', price: '$80.00' },
            { name: 'Zanahoria', price: '$80.00' },
            { name: 'Red Velvet', price: '$80.00' }
          ]
        },
        { name: 'Tiramisú Clásico', price: '$95.00' },
        { name: 'Tartitas de fruta', price: '$50.00' },
        { name: 'Brownie con helado', options: [{ name: 'Helado de Vainilla' }, { name: 'Fresa' }, { name: 'Chocolate' }], price: '$95.00' },
        { name: 'Fresas con crema', price: '$75.00' },
        { name: 'Fresas con crema con helado', options: [{ name: 'Helado de Vainilla' }, { name: 'Fresa' }, { name: 'Chocolate' }], price: '$95.00' }
      ]
    }
  ];

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  // Abre el modal de opciones o agrega el producto si no tiene
  addToCart(item: MenuItem) {
    if (item.options && item.options.length > 0) {
      this.itemWithOptions = item;
      return;
    }

    const cartId = item.name;
    const existing = this.cart.find(c => c.id === cartId);
    if (existing) {
      existing.quantity++;
    } else {
      this.cart.push({ id: cartId, name: item.name, price: item.price, quantity: 1 });
    }
    this.isCartOpen = true; // Abre el carrito automáticamente al agregar
  }

  // Agrega el producto con la opción seleccionada desde el modal
  selectOptionAndAddToCart(option: MenuOption) {
    if (!this.itemWithOptions) return;

    const item = this.itemWithOptions;
    const cartId = `${item.name} (${option.name})`;
    const price = option.price || item.price;

    const existing = this.cart.find(c => c.id === cartId);

    if (existing) {
      existing.quantity++;
    } else {
      this.cart.push({
        id: cartId,
        name: item.name,
        price: price,
        quantity: 1,
        selectedOption: option
      });
    }

    this.isCartOpen = true;
    this.itemWithOptions = null; // Cierra el modal
  }

  // Cierra el modal de opciones
  cancelOptionSelection() {
    this.itemWithOptions = null;
  }

  increaseQuantity(item: CartItem) {
    item.quantity++;
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.removeFromCart(item);
    }
  }

  removeFromCart(itemToRemove: CartItem): void {
    this.cart = this.cart.filter(item => item.id !== itemToRemove.id);
    if (this.cart.length === 0) {
      this.isCartOpen = false;
    }
  }

  getCartSubtotal(): number {
    return this.cart.reduce((total, current) => {
      // Limpiamos el texto del precio (ej. "$60.00" -> 60)
      const priceStr = current.price.replace(/[^0-9.-]+/g, "");
      const price = parseFloat(priceStr) || 0;
      return total + (price * current.quantity);
    }, 0);
  }

  getCartTotal(): number {
    const subtotal = this.getCartSubtotal();
    if (this.deliveryMethod === 'delivery') {
      return subtotal + this.deliveryCost;
    }
    return subtotal;
  }

  sendWhatsAppOrder() {
    if (this.cart.length === 0) return;

    let message = '*¡Hola Pasteles Reyes!* 👋\nMe gustaría hacer el siguiente pedido:\n\n';
    this.cart.forEach(item => {
      let itemMessage = `▪️ ${item.quantity}x *${item.id}* - ${item.price}\n`;
      if (item.notes && item.notes.trim() !== '') {
        itemMessage += `   *Nota:* ${item.notes.trim()}\n`;
      }
      message += itemMessage;
    });

    message += `\n*Subtotal: $${this.getCartSubtotal().toFixed(2)}*\n`;
    if (this.deliveryMethod === 'delivery') {
      message += `*Envío: $${this.deliveryCost.toFixed(2)}*\n`;
      message += `\n*Total: $${this.getCartTotal().toFixed(2)}*\n\n`;
      message += `*MODO DE ENTREGA: Envío a domicilio* 🛵\n`;
      message += `*Dirección:* ${this.deliveryAddress}\n`;
      if (this.deliveryReferences && this.deliveryReferences.trim() !== '') {
        message += `*Referencias:* ${this.deliveryReferences.trim()}\n`;
      }
    } else {
      message += `\n*Total: $${this.getCartTotal().toFixed(2)}*\n\n`;
      message += `*MODO DE ENTREGA: Pasaré a recoger* 🛍️\n`;
    }

    message += '¿Me confirman de recibido? ¡Gracias!';

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${this.phoneNumber}?text=${encodedMessage}`, '_blank');
  }
}