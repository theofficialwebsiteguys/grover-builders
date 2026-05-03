import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  values = [
    {
      title: 'Integrity',
      desc: 'We say what we mean and do what we say. Honest pricing, honest timelines, honest work.',
    },
    {
      title: 'Craftsmanship',
      desc: 'Every nail, seam, and finish is done with care. We take personal pride in the quality of our work.',
    },
    {
      title: 'Transparency',
      desc: 'No hidden costs or surprise change orders. You always know where your project and budget stand.',
    },
    {
      title: 'Partnership',
      desc: 'Your project is our project. We listen, collaborate, and build lasting relationships with every client.',
    },
  ];

  clients = [
    {
      type: 'Homeowners',
      desc: 'From first-time custom builds to dream renovations, we guide homeowners through every decision with care and expertise.',
      icon: 'home',
    },
    {
      type: 'Developers',
      desc: 'We understand schedules and bottom lines. Developers trust us to deliver quality builds on spec, on time, every time.',
      icon: 'building',
    },
    {
      type: 'Business Owners',
      desc: 'Commercial fit-outs and new builds that create the professional space your business deserves — with minimal disruption.',
      icon: 'briefcase',
    },
  ];
}
