import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones - RUTs Chile | Generador de RUT Chileno",
  description: "Lee los términos y condiciones de uso de RUTs Chile. Conoce tus derechos y responsabilidades al usar nuestro servicio gratuito.",
  keywords: "términos y condiciones, términos de uso, condiciones de servicio, RUTs Chile",
  openGraph: {
    title: "Términos y Condiciones - RUTs Chile",
    description: "Términos y condiciones de uso del servicio RUTs Chile",
    url: "https://rutificador.nicovega.dev/terminos-condiciones",
    siteName: "RUTs Chile",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Términos y Condiciones - RUTs Chile",
    description: "Términos y condiciones de uso del servicio RUTs Chile",
  },
  alternates: {
    canonical: "https://rutificador.nicovega.dev/terminos-condiciones",
  },
};

export default function TerminosCondicionesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Términos y Condiciones de Uso
      </h1>

      <div className="prose prose-lg max-w-none space-y-8">
        <section className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-600 leading-relaxed">
            <strong>Última actualización:</strong> 27 de julio de 2025
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            Bienvenido a RUTs Chile. Al acceder y utilizar nuestro sitio web 
            rutificador.nicovega.dev, aceptas cumplir y estar sujeto a los siguientes 
            términos y condiciones de uso.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Aceptación de los Términos
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Al utilizar RUTs Chile, confirmas que has leído, entendido y aceptado 
            estos Términos y Condiciones. Si no estás de acuerdo con alguna parte 
            de estos términos, no debes usar nuestro servicio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Descripción del Servicio
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            RUTs Chile proporciona las siguientes herramientas gratuitas:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Generador de RUTs válidos según el algoritmo chileno</li>
            <li>Validador de RUTs existentes</li>
            <li>Formateador de RUTs con puntos y guión</li>
            <li>Información educativa sobre el sistema de RUT</li>
            <li>Descarga de RUTs generados en formato de texto</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            <strong>Importante:</strong> Los RUTs generados son aleatorios y válidos 
            algorítmicamente, pero no corresponden necesariamente a personas o empresas reales.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Uso Permitido
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            El servicio de RUTs Chile está diseñado para usos legítimos, incluyendo:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Pruebas de desarrollo de software</li>
            <li>Validación de formularios web</li>
            <li>Fines educativos y de aprendizaje</li>
            <li>Demostración de sistemas</li>
            <li>Generación de datos de prueba</li>
          </ul>
        </section>

        <section className="bg-red-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Uso Prohibido
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Está estrictamente prohibido utilizar RUTs Chile para:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Cualquier actividad ilegal o fraudulenta</li>
            <li>Suplantación de identidad</li>
            <li>Creación de documentos falsos</li>
            <li>Evasión fiscal o tributaria</li>
            <li>Acceso no autorizado a sistemas</li>
            <li>Cualquier actividad que viole las leyes chilenas</li>
            <li>Uso comercial sin autorización</li>
            <li>Sobrecarga intencional de nuestros servidores</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Propiedad Intelectual
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Todo el contenido de RUTs Chile, incluyendo pero no limitado a texto, 
            gráficos, logos, código fuente, y diseño, es propiedad de RUTs Chile 
            o sus licenciantes y está protegido por las leyes de derechos de autor 
            chilenas e internacionales.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Se permite el uso del servicio para los fines establecidos, pero no 
            la reproducción, distribución o creación de trabajos derivados sin 
            autorización expresa.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Limitación de Responsabilidad
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            RUTs Chile se proporciona &quot;tal cual&quot; y &quot;según disponibilidad&quot;. No garantizamos:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Que el servicio será ininterrumpido o libre de errores</li>
            <li>La exactitud o confiabilidad de los resultados</li>
            <li>Que el servicio cumplirá con requisitos específicos</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            <strong>RUTs Chile no será responsable por:</strong>
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Daños directos, indirectos, incidentales o consecuentes</li>
            <li>Pérdida de datos o beneficios</li>
            <li>Uso indebido de los RUTs generados</li>
            <li>Consecuencias del uso ilegal del servicio</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Indemnización
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Aceptas indemnizar y mantener indemne a RUTs Chile, sus propietarios, 
            empleados y afiliados de cualquier reclamo, daño, pérdida o gasto 
            (incluyendo honorarios legales) que surjan de tu uso del servicio 
            o violación de estos términos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            8. Privacidad
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Tu uso de RUTs Chile también está regido por nuestra{" "}
            <a href="/politica-privacidad" className="text-blue-600 hover:underline">
              Política de Privacidad
            </a>
            . Al usar el servicio, aceptas las prácticas descritas en dicha política.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            9. Modificaciones al Servicio
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Nos reservamos el derecho de modificar, suspender o discontinuar 
            cualquier aspecto del servicio en cualquier momento sin previo aviso. 
            No seremos responsables ante ti o terceros por cualquier modificación, 
            suspensión o discontinuación del servicio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            10. Cambios en los Términos
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Podemos actualizar estos Términos y Condiciones ocasionalmente. 
            Los cambios entrarán en vigor inmediatamente después de su publicación. 
            El uso continuado del servicio después de los cambios constituye 
            aceptación de los nuevos términos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            11. Terminación
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Podemos terminar o suspender tu acceso al servicio inmediatamente, 
            sin previo aviso, por cualquier motivo, incluyendo sin limitación 
            si violas estos Términos y Condiciones.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            12. Ley Aplicable
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Estos Términos y Condiciones se rigen por las leyes de la República 
            de Chile. Cualquier disputa relacionada con estos términos estará 
            sujeta a la jurisdicción exclusiva de los tribunales chilenos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            13. Divisibilidad
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Si alguna disposición de estos términos se considera inválida o 
            inaplicable, las disposiciones restantes continuarán en pleno 
            vigor y efecto.
          </p>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            14. Contacto
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Si tienes preguntas sobre estos Términos y Condiciones, contáctanos:
          </p>
          <ul className="list-none text-gray-600 space-y-2">
            <li>📧 Email: hola@nicovega.dev</li>
            <li>🌐 Sitio web: rutificador.nicovega.dev</li>
            <li>📍 País: Chile</li>
          </ul>
        </section>

        <section>
          <p className="text-center text-gray-500 text-sm mt-8">
            Al usar RUTs Chile, reconoces haber leído y comprendido estos 
            Términos y Condiciones y aceptas estar legalmente obligado por ellos.
          </p>
        </section>
      </div>
    </div>
  );
}