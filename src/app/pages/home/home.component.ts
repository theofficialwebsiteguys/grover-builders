import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  services = [
    {
      icon: 'home',
      title: 'Custom Home Construction',
      desc: 'From foundation to finish, we build custom homes that reflect your unique vision and lifestyle.',
    },
    {
      icon: 'building',
      title: 'Commercial Construction',
      desc: 'Offices, retail, and multi-use spaces built to code, on schedule, and within budget.',
    },
    {
      icon: 'wrench',
      title: 'Renovations & Remodels',
      desc: 'Transform your existing space with expert renovations that add function and lasting value.',
    },
    {
      icon: 'kitchen',
      title: 'Kitchen & Bath',
      desc: 'Precision craftsmanship on your most-used spaces — delivered beautifully and on time.',
    },
    {
      icon: 'frame',
      title: 'Framing & Structural',
      desc: 'Solid structural work that forms the backbone of every quality construction project.',
    },
    {
      icon: 'clipboard',
      title: 'General Contracting',
      desc: 'Full-service project management coordinating every trade from start to final walk-through.',
    },
  ];

  stats = [
    { value: '20+', label: 'Years in Business' },
    { value: '500+', label: 'Projects Completed' },
    { value: '100%', label: 'Licensed & Insured' },
    { value: '5★', label: 'Client Satisfaction' },
  ];

  whyUs = [
    {
      title: 'Transparent Communication',
      desc: 'You stay informed at every phase. No surprises — just clear timelines, honest updates, and open books.',
    },
    {
      title: 'Master Craftsmen',
      desc: 'Our crews take pride in their work. Every joint, finish, and detail is held to the highest standard.',
    },
    {
      title: 'On Time & On Budget',
      desc: 'We respect your investment. Detailed planning and proactive management keep projects on track.',
    },
  ];

  projects = [
    { src: '/images/project-1.jpg', label: 'Custom Home Build', category: 'Residential' },
    { src: '/images/project-2.jpg', label: 'Custom Home — Rear View', category: 'Residential' },
    { src: '/images/project-3.jpg', label: 'Screened Porch Addition', category: 'Residential' },
    { src: '/images/project-6.jpg', label: 'Framing & New Construction', category: 'Framing' },
    { src: '/images/project-7.jpg', label: 'Active Build Site', category: 'Framing' },
    { src: '/images/project-4.jpg', label: 'Screened Sunroom', category: 'Residential' },
  ];

  testimonials = [
    {
      quote: 'Grover Builders delivered our custom home exactly as promised — on time, on budget, and beautifully built. The craftsmanship is exceptional.',
      name: 'Michael & Sarah T.',
      role: 'Custom Home Client',
    },
    {
      quote: 'From demo to final walkthrough, the communication was outstanding. I always knew exactly what was happening. Highly recommend.',
      name: 'James R.',
      role: 'Commercial Client',
    },
  ];
}
