'use client';

import { useState } from 'react';

interface ContactFormProps {
  onSubmit?: (formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => void;
  submitButtonText?: string;
  showPhone?: boolean;
  messagePlaceholder?: string;
  title?: string;
}

export default function ContactForm({
  onSubmit,
  submitButtonText = "Envoyer le message",
  showPhone = false,
  messagePlaceholder = "Votre message...",
  title = "Contactez-nous"
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    if (onSubmit) {
      // Si une fonction onSubmit est fournie, l'utiliser
      onSubmit(formData);
      setIsSubmitting(false);
      return;
    }

    // Sinon, utiliser le comportement par défaut
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        {title}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nom *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-base bg-white hover:border-primary-300 text-gray-800"
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-base bg-white hover:border-primary-300 text-gray-800"
            placeholder="votre@email.com"
          />
        </div>

        {showPhone && (
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-base bg-white hover:border-primary-300 text-gray-800"
              placeholder="06 12 34 56 78"
            />
          </div>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-base bg-white hover:border-primary-300 text-gray-800 resize-none"
            placeholder={messagePlaceholder}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium text-base shadow-medium hover:shadow-large transform hover:-translate-y-1"
        >
          {isSubmitting ? 'Envoi en cours...' : submitButtonText}
        </button>
      </form>

      {submitStatus === 'success' && (
        <div className="mt-4 p-4 bg-green-50 border-2 border-green-200 text-green-800 rounded-lg text-center">
          <div className="text-xl mb-2">🎉</div>
          <div className="text-base font-semibold">Message envoyé avec succès !</div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mt-4 p-4 bg-red-50 border-2 border-red-200 text-red-800 rounded-lg text-center">
          <div className="text-xl mb-2">❌</div>
          <div className="text-base font-semibold">Erreur lors de l&apos;envoi du message</div>
          <div className="text-red-600">Veuillez réessayer</div>
        </div>
      )}
    </div>
  );
}
