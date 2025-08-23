import RealEstateForm from '@/components/RealEstateForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Hoogstoel - Votre Projet Immobilier
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Décrivez-nous votre projet immobilier en quelques étapes et recevez une étude personnalisée.
        </p>
        
        <RealEstateForm />
      </div>
    </main>
  );
}
