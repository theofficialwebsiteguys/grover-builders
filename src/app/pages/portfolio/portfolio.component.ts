import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

export type Category = 'All' | 'Residential' | 'Renovation' | 'Framing';

interface Project {
  src: string;
  title: string;
  category: Category;
  desc: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  categories: Category[] = ['All', 'Residential', 'Renovation', 'Framing'];
  activeCategory = signal<Category>('All');

  projects: Project[] = [
    { src: 'images/project-1.jpg', title: 'Custom Home — Front Elevation', category: 'Residential', desc: 'Full custom build, gray vinyl siding & skylights' },
    { src: 'images/project-2.jpg', title: 'Custom Home — Rear & Deck', category: 'Residential', desc: 'Multi-level deck with hydroseeded lawn' },
    { src: 'images/project-3.jpg', title: 'Screened Porch Addition', category: 'Residential', desc: 'Elevated screened sunroom on timber posts' },
    { src: 'images/project-4.jpg', title: 'Screened Sunroom — Side View', category: 'Residential', desc: 'Custom structural framing & screen enclosure' },
    { src: 'images/project-5.jpg', title: 'Sunroom — Aerial View', category: 'Renovation', desc: 'Addition to existing lakeside cottage' },
    { src: 'images/project-6.jpg', title: 'New Construction Framing', category: 'Framing', desc: 'ZIP System sheathing, concrete foundation' },
    { src: 'images/project-7.jpg', title: 'Active Build Site', category: 'Framing', desc: 'Multi-unit residential framing' },
    { src: 'images/project-8.jpg', title: 'Telehandler Operations', category: 'Framing', desc: 'Heavy-lift framing operations' },
    { src: 'images/project-9.jpg', title: 'Interior Renovation', category: 'Renovation', desc: 'LVP flooring & trim package' },
  ];

  filtered = computed(() => {
    const cat = this.activeCategory();
    return cat === 'All' ? this.projects : this.projects.filter(p => p.category === cat);
  });

  setCategory(cat: Category) {
    this.activeCategory.set(cat);
  }

  testimonials = [
    {
      quote: 'The craftsmanship on our custom home was unreal. Every detail was exactly what we asked for — and some we didn\'t even know to ask for.',
      name: 'David & Lisa M.',
      role: 'Custom Home Client',
    },
    {
      quote: 'We needed our commercial space turned around fast. Grover\'s team delivered ahead of schedule and the quality was exactly what we needed to open our doors.',
      name: 'Rachel P.',
      role: 'Commercial Tenant Build-Out',
    },
    {
      quote: 'Our kitchen renovation completely changed how we live in our home. Couldn\'t be happier with the result.',
      name: 'Tom & Nancy B.',
      role: 'Kitchen Renovation Client',
    },
  ];
}
