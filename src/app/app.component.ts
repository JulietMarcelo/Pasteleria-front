import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';

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
  mapUrl: string;
}

interface MenuItem {
  name: string;
  detail?: string;
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
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  readonly cakes: CakeSlide[] = [
    {
      title: 'Pasteles Reyes',
      description: 'Pasteles artesanales by Mirna Marcelo desde 2012.',
      imageUrl: 'assets/IMG_6774.JPG'
    },
    {
      title: 'Cafe de Reyes',
      description: 'Crepas, cafes, postres y desayunos para disfrutar en Altamirano.',
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
    'Postres y rebanadas',
    'Velas y accesorios'
  ];

  readonly displayCakes = [
    'Tres leches',
    'Chocolate',
    'Moka'
  ];

  readonly storeExtras = [
    'Postres individuales',
    'Velas de numero',
    'Velas de chispa',
    'Accesorios para celebracion'
  ];

  readonly locations: LocationInfo[] = [
    {
      name: 'Pasteles Reyes',
      type: 'Pasteleria principal',
      address: 'Calle Ejercito Mexicano Poniente #209, Ciudad Altamirano, Mexico, 40666',
      schedule: ['Lunes a viernes: 8:00 am a 8:00 pm', 'Sabado y domingo: 8:00 am a 6:00 pm'],
      phone: '(767) 671 9000',
      phoneHref: '+527676719000',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Calle+Ejercito+Mexicano+Poniente+209+Ciudad+Altamirano+40666'
    },
    {
      name: 'Cafe de Reyes',
      type: 'Pasteleria y cafeteria',
      address: 'De Las Americas, Vicente Guerrero, 40662 Ciudad Altamirano, Gro.',
      schedule: ['Lunes a sabado: 8:00 am a 6:00 pm', 'Domingo: cerrado'],
      phone: '(767) 688 2553',
      phoneHref: '+527676882553',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=De+Las+Americas+Vicente+Guerrero+40662+Ciudad+Altamirano+Gro'
    }
  ];

  readonly menuCategories: MenuCategory[] = [
    {
      title: 'Cafe y bebidas',
      items: [
        { name: 'Americano', price: '$35' },
        { name: 'Capuchino', detail: 'Natural, vainilla francesa, caramelo o crema irlandesa', price: '$48' },
        { name: 'Cafe de la olla', price: '$25' },
        { name: 'Cafe frio', price: '$38' },
        { name: 'Frappes', detail: 'Capuchino, Oreo, Chai, mazapan, moka o cajeta', price: '$75' },
        { name: 'Malteadas', detail: 'Vainilla, fresa o chocolate', price: '$75' }
      ]
    },
    {
      title: 'Postres',
      items: [
        { name: 'Chocolate', price: '$65' },
        { name: 'Red Velvet', price: '$80' },
        { name: 'Tiramisu clasico', price: '$95' },
        { name: 'Tartitas de fruta', price: '$50' },
        { name: 'Brownie con helado', detail: 'Vainilla, fresa o chocolate', price: '$95' },
        { name: 'Fresas con crema', price: '$75' }
      ]
    },
    {
      title: 'Desayunos y snacks',
      items: [
        { name: 'Crepa dulce', detail: 'Nutella, lechera, chocolate, fresa, platano o zarzamora', price: '$85' },
        { name: 'Hot Cakes', detail: 'Con toppings a elegir', price: '$95' },
        { name: 'Chilaquiles solos', detail: 'Con huevo estrellado, cecina o pechuga', price: '$60 / $120' },
        { name: 'Huevos al gusto', detail: 'Con frijolitos, totopos y salsa casera', price: '$78' },
        { name: 'Boneless', detail: 'BBQ, bufalo o habanero', price: '$80 / $120' },
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
      description: 'Opciones clasicas disponibles para la mayoria de pedidos.',
      items: ['Fresa', 'Durazno', 'Chocolate']
    },
    {
      title: 'Rellenos por disponibilidad',
      description: 'Consultar al cotizar porque dependen de temporada o produccion.',
      items: ['Frutos rojos', 'Crema pastelera', 'Cajeta']
    }
  ];

  readonly orderNotes = [
    'Pedidos pequenos: solicitar con minimo 1 a 2 dias de anticipacion.',
    'Bodas, XV anos y eventos grandes: solicitar con 1 a 2 semanas de anticipacion.',
    'Eventos grandes requieren cita en pasteleria para definir sabores, tamano, colores, pisos y detalles.'
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
}
