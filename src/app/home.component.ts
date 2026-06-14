import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface CakeSlide {
  title: string;
  description: string;
  imageUrl: string;
}

interface LocationInfo {
  name: string;
  type: string;
  address: string;
  schedule: string[];
  phone: string;
  phoneHref: string;
  whatsappHref: string;
  mapUrl: string;
}

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

interface CatalogGroup {
  title: string;
  description: string;
  items: string[];
}

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./app.component.scss']
})
export class HomeComponent {
  isNavOpen = false;

  readonly cakes: CakeSlide[] = [
    {
      title: 'Pasteles Reyes',
      description: 'Pasteles artesanales by Mirna Marcelo desde 2012.',
      imageUrl: 'assets/IMG_6774.JPG'
    },
    {
      title: 'Café de Reyes',
      description: 'Crepas, cafés, postres y desayunos para disfrutar en Altamirano.',
      imageUrl: 'assets/IMG_6772.JPG'
    },
    {
      title: 'Postres de la casa',
      description: 'Rebanadas, tartitas, brownies y fresas con crema.',
      imageUrl: 'assets/IMG_6773.JPG'
    }
  ];

  currentSlide = 0;

  readonly featuredProducts = [
    'Pasteles personalizados',
    'Pasteles de vitrina',
    'Postres y rebanadas'
  ];

  readonly displayCakes = [
    'Tres leches',
    'Chocolate',
    'Moka'
  ];

  readonly storeExtras = [
    'Postres individuales',
    'Velas de número',
    'Velas de chispa',
    'Accesorios para celebración'
  ];

  readonly locations: LocationInfo[] = [
    {
      name: 'Pasteles Reyes',
      type: 'Pastelería principal',
      address: 'Calle Ejército Mexicano Poniente #209, Ciudad Altamirano, México, 40666',
      schedule: ['Lunes a viernes: 8:00 am a 8:00 pm', 'Sábado y domingo: 8:00 am a 6:00 pm'],
      phone: '(767) 671 9000',
      phoneHref: '+527676719000',
      whatsappHref: 'https://wa.me/527676719000?text=Hola%20Pasteles%20Reyes%2C%20quiero%20hacer%20un%20pedido.',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Calle+Ejerci...'
    },
    {
      name: 'Café de Reyes',
      type: 'Pastelería y cafetería',
      address: 'De Las Américas, Vicente Guerrero, 40662 Ciudad Altamirano, Gro.',
      schedule: ['Lunes a sábado: 8:00 am a 6:00 pm', 'Domingo: cerrado'],
      phone: '(767) 688 2553',
      phoneHref: '+527676882553',
      whatsappHref: 'https://wa.me/527676882553?text=Hola%20Caf%C3%A9%20de%20Reyes%2C%20quiero%20hacer%20un%20pedido.',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=De+Las+Am%C3%A9ricas+Vicente+Guerrero+40662+Ciudad+Altamirano+Gro'
    }
  ];

  readonly contactPhone = {
    number: '(767) 671 9000',
    phoneHref: '+527676719000',
    whatsappHref: 'https://wa.me/527676719000?text=Hola%20Pasteles%20Reyes%2C%20quiero%20hacer%20un%20pedido%20y%20solicitar%20informaci%C3%B3n.'
  };

  readonly menuCategories: MenuCategory[] = [
    {
      title: 'Café y bebidas',
      items: [
        { name: 'Americano', price: '$35' },
        { name: 'Capuchino', options: [{name: 'Natural'}, {name: 'Vainilla francesa'}, {name: 'Caramelo'}, {name: 'Crema irlandesa'}], price: '$48' },
        { name: 'Café de la olla', price: '$25' },
        { name: 'Café frío', price: '$38' },
        { name: 'Frappes', options: [{name: 'Capuchino'}, {name: 'Oreo'}, {name: 'Chai'}, {name: 'Mazapán'}, {name: 'Moka'}, {name: 'Cajeta'}], price: '$75' },
        { name: 'Malteadas', options: [{name: 'Vainilla'}, {name: 'Fresa'}, {name: 'Chocolate'}], price: '$75' }
      ]
    },
    {
      title: 'Postres',
      items: [
        { name: 'Rebanada de Chocolate', price: '$65' },
        { name: 'Rebanada de Red Velvet', price: '$80' },
        { name: 'Tiramisú clásico', price: '$95' },
        { name: 'Tartitas de fruta', price: '$50' },
        { name: 'Brownie con helado', options: [{name: 'Vainilla'}, {name: 'Fresa'}, {name: 'Chocolate'}], price: '$95' },
        { name: 'Fresas con crema', price: '$75' }
      ]
    },
    {
      title: 'Desayunos y snacks',
      items: [
        { name: 'Crepa dulce', options: [{name: 'Nutella'}, {name: 'Lechera'}, {name: 'Chocolate'}, {name: 'Fresa'}, {name: 'Plátano'}, {name: 'Zarzamora'}], price: '$85' },
        { name: 'Hot Cakes', options: [{name: 'Con toppings a elegir'}], price: '$95' },
        { name: 'Chilaquiles solos', description: 'Con huevo estrellado, cecina o pechuga', price: '$60 / $120' },
        { name: 'Huevos al gusto', description: 'Con frijolitos, totopos y salsa casera', price: '$78' },
        { name: 'Boneless', options: [{name: 'BBQ'}, {name: 'Búfalo'}, {name: 'Habanero'}], price: '$80 / $120' },
        { name: 'Papas a la francesa', price: '$65' }
      ]
    }
  ];

  readonly cakeCatalog: CatalogGroup[] = [
    {
      title: 'Bizcochos',
      description: 'Base del pastel para pedidos personalizados.',
      items: ['Chocolate', 'Tres leches', 'Zanahoria', 'Red Velvet', 'Vainilla', 'Moka', 'Naranja']
    },
    {
      title: 'Rellenos tradicionales',
      description: 'Opciones clásicas disponibles para la mayoría de pedidos.',
      items: ['Fresa', 'Durazno', 'Chocolate', 'Manzana', 'Zarzamora']
    },
    {
      title: 'Rellenos por disponibilidad',
      description: 'Consultar al cotizar porque dependen de temporada o producción.',
      items: ['Frutos rojos', 'Crema pastelera', 'Cajeta', 'Queso crema']
    }
  ];

  readonly orderNotes = [
    'Pedidos pequeños: solicitar con mínimo 1 a 2 días de anticipación.',
    'Bodas, XV años y eventos grandes: solicitar con 1 a 2 semanas de anticipación.',
    'Eventos grandes requieren cita en pastelería para definir sabores, tamaño, colores, pisos y detalles.'
  ];

  private readonly slideTimer = window.setInterval(() => this.nextSlide(), 5000);

  ngOnDestroy(): void {
    window.clearInterval(this.slideTimer);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.cakes.length;
  }

  previousSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.cakes.length) % this.cakes.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }
}
