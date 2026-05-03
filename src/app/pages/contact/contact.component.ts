import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form = {
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  };

  submitted = signal(false);
  submitting = signal(false);

  projectTypes = [
    'Custom Home Construction',
    'Commercial Construction',
    'Renovation / Remodel',
    'Kitchen & Bath',
    'Framing & Structural',
    'General Contracting',
    'Other',
  ];

  onSubmit() {
    this.submitting.set(true);
    // In production, replace with your backend API call or form service
    setTimeout(() => {
      this.submitting.set(false);
      this.submitted.set(true);
    }, 800);
  }

  reset() {
    this.form = { name: '', phone: '', email: '', projectType: '', message: '' };
    this.submitted.set(false);
  }
}
