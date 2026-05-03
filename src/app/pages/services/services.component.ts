import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      id: 'custom-home',
      title: 'Custom Home Construction',
      tagline: 'Your vision. Our expertise.',
      desc: 'There\'s nothing quite like a home built to your exact specifications. We guide you through every phase — site selection, design collaboration, permitting, construction, and final walkthrough. Our team of skilled craftsmen brings your dream home to life with the precision and care it deserves.',
      img: '/images/project-1.jpg',  /* Completed home front elevation */
      points: [
        'Full design-build services',
        'Transparent cost tracking',
        'On-site project management',
        'Quality material sourcing',
      ],
    },
    {
      id: 'commercial',
      title: 'Commercial Construction',
      tagline: 'Professional spaces that perform.',
      desc: 'From office buildings to retail spaces and multi-unit developments, we deliver commercial builds that meet code, stay on schedule, and come in on budget. Our commercial team understands the complexity and accountability that large-scale projects demand.',
      img: '/images/project-7.jpg',  /* Active framing site */
      points: [
        'Office & retail build-outs',
        'Multi-unit residential',
        'Tenant improvements',
        'ADA compliance & permitting',
      ],
    },
    {
      id: 'renovations',
      title: 'Renovations & Remodels',
      tagline: 'Transform what you have.',
      desc: 'Whether you\'re updating a single room or transforming an entire property, our renovation team delivers results that blend seamlessly with your existing structure. We minimize disruption and maximize value — ensuring every dollar you invest comes back tenfold.',
      img: '/images/project-3.jpg',  /* Screened porch addition */
      points: [
        'Whole-home renovations',
        'Room additions',
        'Historic preservation',
        'Structural modifications',
      ],
    },
    {
      id: 'kitchen-bath',
      title: 'Kitchen & Bath Remodels',
      tagline: 'Detail work done right.',
      desc: 'Kitchens and bathrooms are where craftsmanship shows most clearly. We specialize in high-detail remodels that balance function and beauty — custom cabinetry, precision tile work, plumbing upgrades, and everything in between.',
      img: '/images/project-2.jpg',  /* Completed home rear / deck */
      points: [
        'Custom cabinetry & millwork',
        'Tile & stone installation',
        'Plumbing & electrical coordination',
        'Project managed start to finish',
      ],
    },
    {
      id: 'framing',
      title: 'Framing & Structural Work',
      tagline: 'The backbone of quality construction.',
      desc: 'Proper framing is the foundation of every quality build. Our framing crews are precise, efficient, and work to the highest structural standards. From light residential to complex commercial steel framing, we build structures that stand the test of time.',
      img: '/images/project-6.jpg',  /* ZIP system framing wall */
      points: [
        'Wood & steel framing',
        'Load-bearing modifications',
        'Structural inspections',
        'Engineered lumber systems',
      ],
    },
    {
      id: 'general-contracting',
      title: 'General Contracting',
      tagline: 'One point of contact. Total accountability.',
      desc: 'When you need a trusted general contractor to manage a complex project, Grover Builders is the call to make. We coordinate every subcontrade, handle scheduling, manage budgets, and ensure quality control from groundbreaking to final inspection.',
      img: '/images/project-8.jpg',  /* Telehandler / job site operations */
      points: [
        'Subcontractor coordination',
        'Budget & schedule management',
        'Permit & inspection handling',
        'Single point of accountability',
      ],
    },
  ];

  processSteps = [
    {
      num: '01',
      title: 'Free Consultation',
      desc: 'We meet to discuss your vision, goals, and budget. No pressure — just a genuine conversation about what\'s possible.',
    },
    {
      num: '02',
      title: 'Detailed Estimate',
      desc: 'You receive a thorough, line-item estimate. We walk you through every cost so there are zero surprises down the road.',
    },
    {
      num: '03',
      title: 'Build & Communicate',
      desc: 'Construction begins with regular updates, transparent reporting, and an open door to your project manager.',
    },
    {
      num: '04',
      title: 'Final Walkthrough',
      desc: 'We do a complete walkthrough together before we call it done. Every punch list item addressed before you sign off.',
    },
  ];
}
