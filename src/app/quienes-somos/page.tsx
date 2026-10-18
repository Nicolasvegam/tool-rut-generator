import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes Somos - RUTs Chile | Generador de RUT Chileno",
  description: "Conoce al equipo detrás de RUTs Chile, el generador de RUT más confiable y utilizado en Chile. Nuestra misión es facilitar el acceso a herramientas útiles para todos los chilenos.",
  keywords: "quiénes somos, acerca de, RUTs Chile, equipo, misión, visión",
  openGraph: {
    title: "Quiénes Somos - RUTs Chile",
    description: "Conoce al equipo detrás de RUTs Chile y nuestra misión",
    url: "https://rutificador.vercel.app/quienes-somos",
    siteName: "RUTs Chile",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiénes Somos - RUTs Chile",
    description: "Conoce al equipo detrás de RUTs Chile y nuestra misión",
  },
  alternates: {
    canonical: "https://rutificador.vercel.app/quienes-somos",
  },
};

export default function QuienesSomosPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Quiénes Somos
      </h1>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Nuestra Historia
          </h2>
          <p className="text-gray-600 leading-relaxed">
            RUTs Chile nació en 2020 como una solución simple y efectiva para generar, 
            validar y formatear RUTs chilenos. Lo que comenzó como un proyecto personal 
            para facilitar pruebas de software, se convirtió rápidamente en una herramienta 
            utilizada por miles de desarrolladores, estudiantes y profesionales en todo Chile.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Nuestra Misión
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Nuestra misión es proporcionar herramientas digitales gratuitas y de calidad 
            que faciliten el trabajo diario de los chilenos. Creemos en la importancia de 
            democratizar el acceso a tecnología útil y confiable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            ¿Qué Hacemos?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            En RUTs Chile ofrecemos:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Generación masiva de RUTs válidos para pruebas y desarrollo</li>
            <li>Validación instantánea de RUTs existentes</li>
            <li>Formateo correcto con puntos y guión</li>
            <li>Información educativa sobre el sistema de RUT chileno</li>
            <li>API gratuita para desarrolladores (próximamente)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Nuestro Compromiso
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Nos comprometemos a mantener nuestras herramientas:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li><strong>Gratuitas:</strong> Siempre accesibles sin costo</li>
            <li><strong>Seguras:</strong> No almacenamos datos personales</li>
            <li><strong>Confiables:</strong> Algoritmos verificados y precisos</li>
            <li><strong>Rápidas:</strong> Respuesta inmediata sin esperas</li>
            <li><strong>Educativas:</strong> Promovemos el entendimiento del sistema</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            El Equipo
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Somos un equipo de desarrolladores chilenos apasionados por crear 
            herramientas que marquen la diferencia. Con experiencia en desarrollo 
            web, seguridad informática y experiencia de usuario, trabajamos 
            constantemente para mejorar y expandir nuestros servicios.
          </p>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contáctanos
          </h2>
          <p className="text-gray-600 leading-relaxed">
            ¿Tienes sugerencias, comentarios o necesitas ayuda? Nos encantaría 
            escucharte. Puedes contactarnos a través de:
          </p>
          <ul className="list-none text-gray-600 space-y-2 mt-4">
            <li>📧 Email: hola@nicovega.dev</li>
            <li>🐦 Twitter: @RutsChile</li>
            <li>💼 LinkedIn: RUTs Chile</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Agradecimientos
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Agradecemos a toda la comunidad que ha confiado en nosotros y nos ha 
            ayudado a crecer con sus comentarios y sugerencias. Este proyecto es 
            posible gracias a ustedes.
          </p>
        </section>
      </div>
    </div>
  );
}