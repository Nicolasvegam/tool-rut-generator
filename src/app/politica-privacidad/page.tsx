import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad - RUTs Chile | Generador de RUT Chileno",
  description: "Conoce nuestra política de privacidad y cómo protegemos tus datos en RUTs Chile. Tu privacidad es nuestra prioridad.",
  keywords: "política de privacidad, privacidad, datos personales, protección de datos, RUTs Chile",
  openGraph: {
    title: "Política de Privacidad - RUTs Chile",
    description: "Conoce cómo protegemos tu privacidad en RUTs Chile",
    url: "https://rutificador.nicovega.dev/politica-privacidad",
    siteName: "RUTs Chile",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Privacidad - RUTs Chile",
    description: "Conoce cómo protegemos tu privacidad en RUTs Chile",
  },
  alternates: {
    canonical: "https://rutificador.nicovega.dev/politica-privacidad",
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Política de Privacidad
      </h1>

      <div className="prose prose-lg max-w-none space-y-8">
        <section className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-600 leading-relaxed">
            <strong>Última actualización:</strong> 27 de julio de 2025
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            En RUTs Chile, tu privacidad es nuestra prioridad. Esta Política de Privacidad 
            explica cómo recopilamos, usamos y protegemos tu información cuando utilizas 
            nuestro sitio web rutificador.nicovega.dev.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Información que NO Recopilamos
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Es importante destacar que RUTs Chile:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>NO solicita ni almacena RUTs reales de personas</li>
            <li>NO requiere registro ni cuenta de usuario</li>
            <li>NO guarda información personal identificable</li>
            <li>NO almacena los RUTs generados o validados</li>
            <li>NO utiliza cookies de rastreo invasivas</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Información que Recopilamos
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Recopilamos únicamente información técnica anónima para mejorar nuestro servicio:
          </p>
          
          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">
            2.1 Datos de Uso Anónimos
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Páginas visitadas y tiempo de permanencia</li>
            <li>Tipo de navegador y sistema operativo</li>
            <li>País y ciudad de origen (no dirección específica)</li>
            <li>Dispositivo utilizado (móvil, tablet, computadora)</li>
            <li>Fuente de tráfico (búsqueda directa, Google, etc.)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">
            2.2 Datos Técnicos
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Dirección IP anonimizada</li>
            <li>Información de rendimiento del sitio</li>
            <li>Errores y problemas técnicos</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Cómo Usamos la Información
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            La información anónima recopilada se utiliza exclusivamente para:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Mejorar la experiencia del usuario</li>
            <li>Optimizar el rendimiento del sitio</li>
            <li>Entender qué funciones son más utilizadas</li>
            <li>Detectar y corregir errores técnicos</li>
            <li>Generar estadísticas agregadas de uso</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Herramientas de Análisis
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Utilizamos las siguientes herramientas de análisis:
          </p>
          
          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">
            4.1 Vercel Analytics
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Vercel Analytics nos proporciona métricas de rendimiento y uso del sitio 
            de manera completamente anónima. No rastrea usuarios individuales ni 
            utiliza cookies persistentes.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">
            4.2 Google Analytics (Opcional)
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Si está habilitado, utilizamos Google Analytics con anonimización de IP 
            activada y sin recopilación de datos demográficos detallados.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Cookies
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            RUTs Chile utiliza cookies mínimas y esenciales:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li><strong>Cookies de sesión:</strong> Se eliminan al cerrar el navegador</li>
            <li><strong>Cookies de preferencias:</strong> Guardan configuraciones como tema oscuro (si está disponible)</li>
            <li><strong>Cookies analíticas:</strong> Solo si aceptas, para mejorar el servicio</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            Puedes desactivar las cookies en tu navegador sin afectar la funcionalidad 
            principal del sitio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Seguridad de la Información
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Implementamos medidas de seguridad para proteger nuestro sitio:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Conexión segura HTTPS en todo el sitio</li>
            <li>Hosting en infraestructura segura de Vercel</li>
            <li>Actualizaciones regulares de seguridad</li>
            <li>Monitoreo de vulnerabilidades</li>
            <li>No almacenamiento de datos sensibles</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Enlaces a Terceros
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Nuestro sitio puede contener enlaces a sitios externos como el Servicio de 
            Impuestos Internos (SII) o el Registro Civil. No somos responsables de las 
            prácticas de privacidad de estos sitios. Te recomendamos leer sus políticas 
            de privacidad.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            8. Derechos del Usuario
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Aunque no recopilamos datos personales, tienes derecho a:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Conocer qué información técnica recopilamos</li>
            <li>Solicitar que no se recopilen datos analíticos de tu visita</li>
            <li>Usar el sitio con cookies desactivadas</li>
            <li>Contactarnos con preguntas sobre privacidad</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            9. Uso por Menores de Edad
          </h2>
          <p className="text-gray-600 leading-relaxed">
            RUTs Chile es un servicio de acceso público que no recopila información 
            personal. Sin embargo, recomendamos que los menores de 13 años utilicen 
            el sitio bajo supervisión de un adulto.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            10. Cambios en la Política de Privacidad
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Nos reservamos el derecho de actualizar esta Política de Privacidad. 
            Los cambios serán publicados en esta página con la fecha de actualización. 
            El uso continuado del sitio después de los cambios constituye aceptación 
            de la nueva política.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            11. Marco Legal
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Esta política se rige por las leyes chilenas, incluyendo la Ley 19.628 
            sobre Protección de la Vida Privada y sus modificaciones.
          </p>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            12. Contacto
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Si tienes preguntas sobre esta Política de Privacidad o cómo manejamos 
            la información, contáctanos:
          </p>
          <ul className="list-none text-gray-600 space-y-2">
            <li>📧 Email: hola@nicovega.dev</li>
            <li>🌐 Sitio web: rutificador.nicovega.dev</li>
            <li>📍 País: Chile</li>
          </ul>
        </section>

        <section>
          <p className="text-center text-gray-500 text-sm mt-8">
            Al usar RUTs Chile, aceptas esta Política de Privacidad. 
            Gracias por confiar en nosotros.
          </p>
        </section>
      </div>
    </div>
  );
}