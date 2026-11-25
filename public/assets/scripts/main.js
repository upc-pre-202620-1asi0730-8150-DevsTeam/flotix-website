
const flotixDefaultLang = 'en';
const flotixSupportedLangs = ['en', 'es'];

const flotixI18n = {
    en: {
        'skip': 'Skip to content',
        'nav.home': 'Home',
        'nav.benefits': 'Benefits',
        'nav.plans': 'Plans',

        'nav.signIn': 'Sign in',
        'nav.signUp': 'Sign up',
        'hero.title': 'Control your fleet from a single platform',
        'hero.subtitle': 'Flotix connects vehicles, drivers and maintenance workshops through IoT and GPS, so owners monitor fuel, mileage and routes in real time.',
        'hero.ctaPrimary': 'Start now',
        'hero.ctaSecondary': 'See benefits',
        'hero.statVehicles': 'vehicles tracked in the pilot',
        'hero.statWorkshops': 'affiliated workshops',
        'hero.statUptime': 'GPS device uptime',
        'benefits.kicker': 'Benefits',
        'benefits.title': 'Everything a fleet operation needs, in one route',
        'benefits.subtitle': 'Four connected capabilities cover the daily work of running vehicles, fuel, maintenance and visibility.',
        'benefits.fleetTitle': 'Fleet management',
        'benefits.fleetBody': 'Register vehicles and drivers, assign units and review the full history of every plate.',
        'benefits.fuelTitle': 'Fuel control',
        'benefits.fuelBody': 'Log every refill, compare efficiency across units and catch anomalies before they add up.',
        'benefits.maintenanceTitle': 'Preventive maintenance',
        'benefits.maintenanceBody': 'Schedule service by mileage or date and coordinate work with affiliated workshops end to end.',
        'benefits.monitoringTitle': 'Real time monitoring',
        'benefits.monitoringBody': 'Track location, routes and speed for every active unit through the GPS and IoT device.',
        'plans.kicker': 'Plans and pricing',
        'plans.title': 'Pick the plan that matches your fleet',
        'plans.subtitle': 'Every plan includes fuel control, maintenance coordination and the mobile app for drivers.',
        'plans.starterName': 'Starter',
        'plans.starterFleet': 'Up to 5 vehicles',
        'plans.starterFeature1': 'Centralized vehicle and driver registry',
        'plans.starterFeature2': 'Fuel logging and consumption history',
        'plans.starterFeature3': 'Email support',
        'plans.growthFlag': 'Recommended',
        'plans.growthName': 'Growth',
        'plans.growthFleet': 'Up to 25 vehicles',
        'plans.growthFeature1': 'Everything in Starter',
        'plans.growthFeature2': 'Real time GPS monitoring and route history',
        'plans.growthFeature3': 'Preventive maintenance scheduling',
        'plans.growthFeature4': 'Priority chat support',
        'plans.fleetName': 'Fleet',
        'plans.fleetFleet': 'Unlimited vehicles',
        'plans.fleetFeature1': 'Everything in Growth',
        'plans.fleetFeature2': 'Efficiency and comparison reports',
        'plans.fleetFeature3': 'Multiple administrator accounts',
        'plans.fleetFeature4': 'Dedicated account manager',
        'plans.ctaChoose': 'Choose plan',
        'plans.perMonth': '/ month',
        'aboutProduct.kicker': 'About the product',
        'aboutProduct.title': 'See Flotix in action',
        'aboutProduct.subtitle': 'A short look at how the platform controls, monitors and optimizes a whole fleet.',
        'aboutProduct.placeholder': 'Video coming soon',
        'aboutTeam.kicker': 'About the team',
        'aboutTeam.title': 'The people behind Flotix',
        'aboutTeam.subtitle': 'Meet the Developers Team and how we are building the platform.',
        'aboutTeam.placeholder': 'Video coming soon',
        'team.title': 'Meet the team',
        'team.tabs.info': 'Info',
        'team.tabs.bio': 'Bio',
        'team.prev': 'Previous member',
        'team.next': 'Next member',
        'team.carouselLabel': 'Team members',
        'team.member1.role': 'Software Engineering',
        'team.member1.bio': 'Curious and always learning, Gonzalo brings that same drive for discovery to how Flotix tracks and improves a fleet.',
        'team.member2.role': 'Software Engineering',
        'team.member2.bio': 'Responsible and self-taught, Mauricio keeps Flotix moving forward with the same discipline he brings to staying active.',
        'team.member3.role': 'Software Engineering',
        'team.member3.bio': 'An enthusiastic programmer who enjoys learning new technologies, Joaquin contributes ideas, technical direction and organization to Flotix.',
        'team.member4.role': 'Software Engineering',
        'team.member4.bio': 'Practical and curious, Gustavo turns what he learns into solutions that make Flotix genuinely useful for fleet owners.',
        'team.member5.role': 'Software Engineering',
        'team.member5.bio': 'Interested in web development and in learning new technologies by applying them to real projects, Jhon brings clear technical solutions and organized teamwork to Flotix.',
        'team.member6.role': 'Software Engineering',
        'team.member6.bio': 'Organized and detail-oriented, Maria Luisa designs the interfaces of Flotix so the product feels intuitive and easy to use.',
        'footer.blurb': 'Fleet management with real time IoT and GPS monitoring for owners, drivers and mechanic workshops.',
        'footer.navTitle': 'Platform',
        'footer.companyTitle': 'Company',
        'footer.terms': 'Terms and conditions',
        'footer.rights': 'All rights reserved.',
        'footer.privacy': 'Privacy policy',
        'cta.kicker': 'Start today',
        'cta.title': 'Take control of your whole fleet today',
        'cta.subtitle': 'Monitor vehicles, control fuel and schedule preventive maintenance from one platform.',
        'privacy.title': 'Privacy policy',
        'privacy.lede': 'This page explains what information Flotix collects, why it is collected and how it is protected.',
        'privacy.section1Title': '1. Information we collect',
        'privacy.section1Body': 'Account details such as name, email and role, together with vehicle, location, fuel and maintenance data reported by the web application and the IoT device.',
        'privacy.section2Title': '2. How we use it',
        'privacy.section2Body': 'The data powers fleet management, fuel control, preventive maintenance and real time monitoring, and helps us improve the platform.',
        'privacy.section3Title': '3. Sharing',
        'privacy.section3Body': 'Information is shared only inside the organization that owns the account and with affiliated workshops when a maintenance task requires it. It is never sold to third parties.',
        'privacy.section4Title': '4. Security and retention',
        'privacy.section4Body': 'We apply access controls by role and keep data only as long as the account is active or as needed to provide the service.',
        'privacy.section5Title': '5. Your rights',
        'privacy.section5Body': 'You may ask to access, correct or delete your personal information at any time by contacting the Flotix team.',
        'terms.title': 'Terms and conditions',
        'terms.lede': 'These terms describe how visitors and registered users may use the Flotix landing page, web application and IoT device.',
        'terms.section1Title': '1. Scope',
        'terms.section1Body': 'These terms apply to the Flotix landing page, the web application and the companion GPS, odometer and fuel sensor device offered to fleet owners.',
        'terms.section2Title': '2. Accounts and roles',
        'terms.section2Body': 'Every account belongs to one of three roles: owner, driver or workshop. Each role sees only the screens and data relevant to its work, and an owner may assign roles to the members of their organization.',
        'terms.section3Title': '3. Acceptable use',
        'terms.section3Body': 'Users agree to provide accurate vehicle and account information, to use the IoT device only on vehicles they own or operate, and not to interfere with telemetry data belonging to another account.',
        'terms.section4Title': '4. Data and privacy',
        'terms.section4Body': 'Location, fuel and maintenance data collected through the platform is used to power the features owners, drivers and workshops rely on, and is not sold to third parties.',
        'terms.section5Title': '5. Professional responsibility',
        'terms.section5Body': 'The Flotix team follows recognized software engineering ethics guidance in how the platform is built, tested and deployed, and documents changes to the service through its public version control repository.',
        'terms.backLink': 'Back to the homepage',
        'nav.contact': 'Contact',
        'footer.contact': 'Contact',
        'contact.title': 'Contact us',
        'contact.lede': 'Have questions about Flotix, the IoT device or our plans? Write to us and the team will reply as soon as possible.',
        'contact.infoTitle': 'Get in touch',
        'contact.emailLabel': 'Email',
        'contact.phoneLabel': 'Phone',
        'contact.whatsappText': 'Chat with us',
        'contact.locationLabel': 'Location',
        'contact.locationValue': 'Lima, Peru',
        'contact.hoursLabel': 'Business hours',
        'contact.hoursValue': 'Monday to Friday, 9:00 a.m. to 6:00 p.m. (Lima time)',
        'contact.followTitle': 'Follow us',
        'contact.formTitle': 'Send us a message',
        'contact.nameLabel': 'Full name',
        'contact.emailFieldLabel': 'Your email',
        'contact.phoneFieldLabel': 'Phone (optional)',
        'contact.roleLabel': 'I am a…',
        'contact.select': 'Select an option',
        'contact.roleAdmin': 'Fleet administrator',
        'contact.roleDriver': 'Driver',
        'contact.rolePassenger': 'Passenger',
        'contact.roleCompany': 'Company',
        'contact.roleWorkshop': 'Mechanic workshop',
        'contact.topicLabel': 'Topic',
        'contact.topicDemo': 'Request a demo',
        'contact.topicDevice': 'Buy the IoT device (GPS, odometer, fuel sensor)',
        'contact.topicPlans': 'Plans and pricing',
        'contact.topicSupport': 'Technical support',
        'contact.topicOther': 'Other',
        'contact.messageLabel': 'Message',
        'contact.messagePlaceholder': 'Tell us how we can help…',
        'contact.consent': 'I agree to be contacted about my request.',
        'contact.privacyLink': 'Privacy policy',
        'contact.submit': 'Send message',
        'contact.note': 'Your email app will open with the message ready to send.',
        'contact.errorRequired': 'Please complete all required fields and accept the consent box.',
        'contact.errorEmail': 'Please enter a valid email address.',
        'contact.success': 'Thanks! Your email app should open now. If it does not, write to us directly at the address on this page.',
        'contact.faqTitle': 'Frequently asked questions',
        'contact.faq1Q': 'How fast do you reply?',
        'contact.faq1A': 'We aim to reply within one business day.',
        'contact.faq2Q': 'How do I buy the IoT device?',
        'contact.faq2A': 'Choose “Buy the IoT device” as the topic in the form and tell us how many vehicles you have. We will send you the options.',
        'contact.faq3Q': 'I already have an account and need help.',
        'contact.faq3A': 'Choose “Technical support”, and include the email of your account and a description of the problem.',
    },
    es: {
        'skip': 'Ir al contenido',
        'nav.home': 'Inicio',
        'nav.benefits': 'Beneficios',
        'nav.plans': 'Planes',

        'nav.signIn': 'Iniciar sesión',
        'nav.signUp': 'Registrarse',
        'hero.title': 'Controla tu flota desde una sola plataforma',
        'hero.subtitle': 'Flotix conecta vehículos, conductores y talleres mecánicos mediante IoT y GPS, para que los dueños monitoreen combustible, kilometraje y rutas en tiempo real.',
        'hero.ctaPrimary': 'Empieza ahora',
        'hero.ctaSecondary': 'Ver beneficios',
        'hero.statVehicles': 'vehículos monitoreados en el piloto',
        'hero.statWorkshops': 'talleres afiliados',
        'hero.statUptime': 'disponibilidad del dispositivo GPS',
        'benefits.kicker': 'Beneficios',
        'benefits.title': 'Todo lo que necesita una operación de flota, en una ruta',
        'benefits.subtitle': 'Cuatro capacidades conectadas cubren el trabajo diario de gestionar vehículos, combustible, mantenimiento y visibilidad.',
        'benefits.fleetTitle': 'Gestión de flotas',
        'benefits.fleetBody': 'Registra vehículos y conductores, asigna unidades y revisa el historial completo de cada placa.',
        'benefits.fuelTitle': 'Control de combustible',
        'benefits.fuelBody': 'Registra cada carga, compara la eficiencia entre unidades y detecta anomalías antes de que se acumulen.',
        'benefits.maintenanceTitle': 'Mantenimiento preventivo',
        'benefits.maintenanceBody': 'Programa el servicio por kilometraje o fecha y coordina el trabajo con talleres afiliados de principio a fin.',
        'benefits.monitoringTitle': 'Monitoreo en tiempo real',
        'benefits.monitoringBody': 'Sigue la ubicación, las rutas y la velocidad de cada unidad activa mediante el dispositivo GPS e IoT.',
        'plans.kicker': 'Planes y precios',
        'plans.title': 'Elige el plan según el tamaño de tu flota',
        'plans.subtitle': 'Todos los planes incluyen control de combustible, coordinación de mantenimiento y la app móvil para conductores.',
        'plans.starterName': 'Starter',
        'plans.starterFleet': 'Hasta 5 vehículos',
        'plans.starterFeature1': 'Registro centralizado de vehículos y conductores',
        'plans.starterFeature2': 'Registro de combustible e historial de consumo',
        'plans.starterFeature3': 'Soporte por correo electrónico',
        'plans.growthFlag': 'Recomendado',
        'plans.growthName': 'Growth',
        'plans.growthFleet': 'Hasta 25 vehículos',
        'plans.growthFeature1': 'Todo lo incluido en Starter',
        'plans.growthFeature2': 'Monitoreo GPS en tiempo real e historial de rutas',
        'plans.growthFeature3': 'Programación de mantenimiento preventivo',
        'plans.growthFeature4': 'Soporte prioritario por chat',
        'plans.fleetName': 'Fleet',
        'plans.fleetFleet': 'Vehículos ilimitados',
        'plans.fleetFeature1': 'Todo lo incluido en Growth',
        'plans.fleetFeature2': 'Reportes de eficiencia y comparación',
        'plans.fleetFeature3': 'Múltiples cuentas de administrador',
        'plans.fleetFeature4': 'Ejecutivo de cuenta dedicado',
        'plans.ctaChoose': 'Elegir plan',
        'plans.perMonth': '/ mes',
        'aboutProduct.kicker': 'Sobre el producto',
        'aboutProduct.title': 'Mira Flotix en acción',
        'aboutProduct.subtitle': 'Un vistazo corto a cómo la plataforma controla, monitorea y optimiza toda una flota.',
        'aboutProduct.placeholder': 'Video próximamente',
        'aboutTeam.kicker': 'Sobre el equipo',
        'aboutTeam.title': 'Las personas detrás de Flotix',
        'aboutTeam.subtitle': 'Conoce al Developers Team y cómo construimos la plataforma.',
        'aboutTeam.placeholder': 'Video próximamente',
        'team.title': 'Conoce al equipo',
        'team.tabs.info': 'Info',
        'team.tabs.bio': 'Bio',
        'team.prev': 'Integrante anterior',
        'team.next': 'Integrante siguiente',
        'team.carouselLabel': 'Integrantes del equipo',
        'team.member1.role': 'Ingeniería de Software',
        'team.member1.bio': 'Curioso y siempre aprendiendo, Gonzalo aplica esa misma pasión por descubrir a cómo Flotix rastrea y mejora una flota.',
        'team.member2.role': 'Ingeniería de Software',
        'team.member2.bio': 'Responsable y autodidacta, Mauricio mantiene a Flotix avanzando con la misma disciplina con la que se mantiene activo.',
        'team.member3.role': 'Ingeniería de Software',
        'team.member3.bio': 'Programador entusiasta al que le gusta aprender nuevas tecnologías, Joaquin aporta ideas, dirección técnica y organización a Flotix.',
        'team.member4.role': 'Ingeniería de Software',
        'team.member4.bio': 'Práctico y curioso, Gustavo convierte lo que aprende en soluciones que hacen de Flotix algo realmente útil para los dueños de flota.',
        'team.member5.role': 'Ingeniería de Software',
        'team.member5.bio': 'Interesado en el desarrollo web y en aprender nuevas tecnologías aplicándolas a proyectos prácticos, Jhon aporta soluciones técnicas claras y un trabajo en equipo ordenado a Flotix.',
        'team.member6.role': 'Ingeniería de Software',
        'team.member6.bio': 'Organizada y atenta al detalle, Maria Luisa diseña las interfaces de Flotix para que el producto sea intuitivo y fácil de usar.',
        'footer.blurb': 'Gestión de flotas con monitoreo IoT y GPS en tiempo real para dueños, conductores y talleres mecánicos.',
        'footer.navTitle': 'Plataforma',
        'footer.companyTitle': 'Empresa',
        'footer.terms': 'Términos y condiciones',
        'footer.rights': 'Todos los derechos reservados.',
        'footer.privacy': 'Política de privacidad',
        'cta.kicker': 'Empieza hoy',
        'cta.title': 'Toma el control de toda tu flota hoy',
        'cta.subtitle': 'Monitorea vehículos, controla el combustible y programa el mantenimiento preventivo desde una sola plataforma.',
        'privacy.title': 'Política de privacidad',
        'privacy.lede': 'Esta página explica qué información recopila Flotix, por qué se recopila y cómo se protege.',
        'privacy.section1Title': '1. Información que recopilamos',
        'privacy.section1Body': 'Datos de la cuenta como nombre, correo y rol, junto con los datos de vehículos, ubicación, combustible y mantenimiento que reportan la aplicación web y el dispositivo IoT.',
        'privacy.section2Title': '2. Cómo la usamos',
        'privacy.section2Body': 'Los datos permiten la gestión de flotas, el control de combustible, el mantenimiento preventivo y el monitoreo en tiempo real, y nos ayudan a mejorar la plataforma.',
        'privacy.section3Title': '3. Compartir',
        'privacy.section3Body': 'La información se comparte solo dentro de la organización dueña de la cuenta y con talleres afiliados cuando una tarea de mantenimiento lo requiere. Nunca se vende a terceros.',
        'privacy.section4Title': '4. Seguridad y conservación',
        'privacy.section4Body': 'Aplicamos control de acceso por rol y conservamos los datos solo mientras la cuenta esté activa o sea necesario para prestar el servicio.',
        'privacy.section5Title': '5. Tus derechos',
        'privacy.section5Body': 'Puedes solicitar acceso, corrección o eliminación de tu información personal en cualquier momento contactando al equipo de Flotix.',
        'terms.title': 'Términos y condiciones',
        'terms.lede': 'Estos términos describen cómo los visitantes y usuarios registrados pueden usar el landing page, la aplicación web y el dispositivo IoT de Flotix.',
        'terms.section1Title': '1. Alcance',
        'terms.section1Body': 'Estos términos aplican al landing page de Flotix, la aplicación web y el dispositivo de GPS, odómetro y sensor de combustible ofrecido a los dueños de flota.',
        'terms.section2Title': '2. Cuentas y roles',
        'terms.section2Body': 'Cada cuenta pertenece a uno de tres roles: dueño, conductor o taller. Cada rol ve únicamente las pantallas y los datos relevantes para su trabajo, y un dueño puede asignar roles a los miembros de su organización.',
        'terms.section3Title': '3. Uso aceptable',
        'terms.section3Body': 'Los usuarios se comprometen a proporcionar información precisa de vehículos y cuenta, a usar el dispositivo IoT solo en vehículos que posean u operen, y a no interferir con los datos de telemetría de otra cuenta.',
        'terms.section4Title': '4. Datos y privacidad',
        'terms.section4Body': 'Los datos de ubicación, combustible y mantenimiento recolectados por la plataforma se usan para las funciones que dueños, conductores y talleres necesitan, y no se venden a terceros.',
        'terms.section5Title': '5. Responsabilidad profesional',
        'terms.section5Body': 'El equipo de Flotix sigue lineamientos reconocidos de ética en ingeniería de software para construir, probar y desplegar la plataforma, y documenta los cambios del servicio en su repositorio público de control de versiones.',
        'terms.backLink': 'Volver al inicio',
        'nav.contact': 'Contacto',
        'footer.contact': 'Contacto',
        'contact.title': 'Contáctanos',
        'contact.lede': '¿Tienes preguntas sobre Flotix, el dispositivo IoT o nuestros planes? Escríbenos y el equipo te responderá lo antes posible.',
        'contact.infoTitle': 'Ponte en contacto',
        'contact.emailLabel': 'Correo electrónico',
        'contact.phoneLabel': 'Teléfono',
        'contact.whatsappText': 'Escríbenos por chat',
        'contact.locationLabel': 'Ubicación',
        'contact.locationValue': 'Lima, Perú',
        'contact.hoursLabel': 'Horario de atención',
        'contact.hoursValue': 'Lunes a viernes, de 9:00 a. m. a 6:00 p. m. (hora de Lima)',
        'contact.followTitle': 'Síguenos',
        'contact.formTitle': 'Envíanos un mensaje',
        'contact.nameLabel': 'Nombre completo',
        'contact.emailFieldLabel': 'Tu correo electrónico',
        'contact.phoneFieldLabel': 'Teléfono (opcional)',
        'contact.roleLabel': 'Soy…',
        'contact.select': 'Selecciona una opción',
        'contact.roleAdmin': 'Administrador de flota',
        'contact.roleDriver': 'Conductor',
        'contact.rolePassenger': 'Pasajero',
        'contact.roleCompany': 'Empresa',
        'contact.roleWorkshop': 'Taller mecánico',
        'contact.topicLabel': 'Tema',
        'contact.topicDemo': 'Solicitar una demostración',
        'contact.topicDevice': 'Comprar el dispositivo IoT (GPS, odómetro y sensor de combustible)',
        'contact.topicPlans': 'Planes y precios',
        'contact.topicSupport': 'Soporte técnico',
        'contact.topicOther': 'Otro',
        'contact.messageLabel': 'Mensaje',
        'contact.messagePlaceholder': 'Cuéntanos en qué podemos ayudarte…',
        'contact.consent': 'Acepto que me contacten por mi solicitud.',
        'contact.privacyLink': 'Política de privacidad',
        'contact.submit': 'Enviar mensaje',
        'contact.note': 'Se abrirá tu correo con el mensaje listo para enviar.',
        'contact.errorRequired': 'Completa todos los campos obligatorios y acepta el consentimiento.',
        'contact.errorEmail': 'Ingresa un correo electrónico válido.',
        'contact.success': '¡Gracias! Tu correo debería abrirse ahora. Si no es así, escríbenos directamente a la dirección de esta página.',
        'contact.faqTitle': 'Preguntas frecuentes',
        'contact.faq1Q': '¿Qué tan rápido responden?',
        'contact.faq1A': 'Buscamos responder en un día hábil.',
        'contact.faq2Q': '¿Cómo compro el dispositivo IoT?',
        'contact.faq2A': 'Elige “Comprar el dispositivo IoT” como tema en el formulario e indícanos cuántos vehículos tienes. Te enviaremos las opciones.',
        'contact.faq3Q': 'Ya tengo una cuenta y necesito ayuda.',
        'contact.faq3A': 'Elige “Soporte técnico” e incluye el correo de tu cuenta y una descripción del problema.',
    },
};

function flotixResolveLang(requested) {
    return flotixSupportedLangs.includes(requested) ? requested : flotixDefaultLang;
}

function flotixGetInitialLang() {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('lang');
    if (fromUrl) return flotixResolveLang(fromUrl);
    let stored = null;
    try { stored = window.localStorage.getItem('flotix-lang'); } catch (err) { /* no storage */ }
    if (stored) return flotixResolveLang(stored);
    return flotixDefaultLang;
}

function flotixApplyLang(lang) {
    const resolved = flotixResolveLang(lang);
    const dict = flotixI18n[resolved];

    document.documentElement.setAttribute('lang', resolved);

    document.querySelectorAll('[data-i18n]').forEach((node) => {
        const key = node.getAttribute('data-i18n');
        if (dict[key] !== undefined) node.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
        const key = node.getAttribute('data-i18n-placeholder');
        if (dict[key] !== undefined) node.setAttribute('placeholder', dict[key]);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((node) => {
        const key = node.getAttribute('data-i18n-aria-label');
        if (dict[key] !== undefined) node.setAttribute('aria-label', dict[key]);
    });

    document.querySelectorAll('.lang-toggle button').forEach((button) => {
        button.setAttribute('aria-pressed', String(button.getAttribute('data-lang') === resolved));
    });

    try { window.localStorage.setItem('flotix-lang', resolved); } catch (err) { /* storage unavailable */ }
}

/* Reusable header/footer: injected from _header.html and _footer.html.
   Paths are relative to the page, so every page must live in /public.
   Note: fetch() needs a web server (Netlify, Live Server, `python -m http.server`), not file://. */
async function flotixLoadPartial(placeholderId, url) {
    const placeholder = document.getElementById(placeholderId);
    if (!placeholder) return;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.status + ' ' + response.statusText);
        placeholder.outerHTML = await response.text();
    } catch (err) {
        console.warn('Could not load ' + url + ':', err);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await Promise.all([
        flotixLoadPartial('header-placeholder', '_header.html'),
        flotixLoadPartial('footer-placeholder', '_footer.html'),
    ]);

    flotixApplyLang(flotixGetInitialLang());

    const flotixPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.primary-nav a').forEach((link) => {
        if (flotixPage && link.getAttribute('href') === flotixPage) link.setAttribute('aria-current', 'page');
    });

    document.querySelectorAll('.lang-toggle button').forEach((button) => {
        button.addEventListener('click', () => flotixApplyLang(button.getAttribute('data-lang')));
    });

    const toggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('primary-nav');
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            const isOpen = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!isOpen));
            nav.classList.toggle('is-open', !isOpen);
        });
        nav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                toggle.setAttribute('aria-expanded', 'false');
                nav.classList.remove('is-open');
            });
        });
    }

    document.querySelectorAll('.member-card').forEach((card) => {
        const tabs = card.querySelectorAll('.tab-btn');
        const panes = card.querySelectorAll('.member-content-pane');
        tabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-tab');
                tabs.forEach((t) => t.classList.remove('active'));
                tab.classList.add('active');
                panes.forEach((pane) => {
                    pane.classList.toggle('active', pane.getAttribute('data-pane') === target);
                });
            });
        });
    });

    /* Team carousel: native scroll snapping, arrow buttons and page dots. */
    const teamTrack = document.getElementById('team-track');
    const teamDots = document.getElementById('team-dots');
    if (teamTrack && teamDots) {
        const prevBtn = document.querySelector('.carousel-prev');
        const nextBtn = document.querySelector('.carousel-next');
        const cards = Array.from(teamTrack.querySelectorAll('.member-card'));

        const stepSize = () => {
            if (cards.length < 2) return teamTrack.clientWidth;
            return cards[1].offsetLeft - cards[0].offsetLeft;
        };
        const pageCount = () => {
            const visible = Math.max(1, Math.round(teamTrack.clientWidth / stepSize()));
            return Math.max(1, cards.length - visible + 1);
        };
        const currentPage = () => {
            const max = teamTrack.scrollWidth - teamTrack.clientWidth;
            if (teamTrack.scrollLeft >= max - 2) return pageCount() - 1;
            return Math.min(pageCount() - 1, Math.round(teamTrack.scrollLeft / stepSize()));
        };
        let pendingPage = null;
        let pendingTimer = null;
        const basePage = () => (pendingPage !== null ? pendingPage : currentPage());
        const goTo = (page) => {
            pendingPage = page;
            window.clearTimeout(pendingTimer);
            pendingTimer = window.setTimeout(() => {
                pendingPage = null;
            }, 700);
            teamTrack.scrollTo({ left: page * stepSize(), behavior: 'smooth' });
        };

        const renderDots = () => {
            const total = pageCount();
            if (teamDots.children.length !== total) {
                teamDots.innerHTML = '';
                for (let i = 0; i < total; i++) {
                    const dot = document.createElement('button');
                    dot.type = 'button';
                    dot.className = 'carousel-dot';
                    dot.setAttribute('aria-label', String(i + 1));
                    dot.addEventListener('click', () => goTo(i));
                    teamDots.appendChild(dot);
                }
            }
            teamDots.hidden = total < 2;
        };

        const update = () => {
            renderDots();
            const page = currentPage();
            Array.from(teamDots.children).forEach((dot, i) => {
                dot.classList.toggle('active', i === page);
                if (i === page) dot.setAttribute('aria-current', 'true');
                else dot.removeAttribute('aria-current');
            });
            prevBtn.disabled = page <= 0;
            nextBtn.disabled = page >= pageCount() - 1;
        };

        prevBtn.addEventListener('click', () => goTo(Math.max(0, basePage() - 1)));
        nextBtn.addEventListener('click', () => goTo(Math.min(pageCount() - 1, basePage() + 1)));
        teamTrack.addEventListener('scroll', () => window.requestAnimationFrame(update), { passive: true });
        teamTrack.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                event.preventDefault();
                nextBtn.click();
            } else if (event.key === 'ArrowLeft') {
                event.preventDefault();
                prevBtn.click();
            }
        });
        window.addEventListener('resize', update);
        update();
    }
});


/* Video sections: paste a link in data-video-url on each .video-frame in index.html.
   Supports YouTube, Vimeo, Google Drive and direct .mp4 / .webm links. */
(function () {
  function toEmbed(url) {
    var m;
    if ((m = url.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/))) {
      return { type: 'iframe', src: 'https://www.youtube.com/embed/' + m[1] };
    }
    if ((m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/))) {
      return { type: 'iframe', src: 'https://player.vimeo.com/video/' + m[1] };
    }
    if ((m = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/))) {
      return { type: 'iframe', src: 'https://drive.google.com/file/d/' + m[1] + '/preview' };
    }
    if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) {
      return { type: 'video', src: url };
    }
    return { type: 'iframe', src: url };
  }

  document.querySelectorAll('.video-frame[data-video-url]').forEach(function (frame) {
    var url = (frame.getAttribute('data-video-url') || '').trim();
    if (!url) return;
    var info = toEmbed(url);
    var el;
    if (info.type === 'video') {
      el = document.createElement('video');
      el.controls = true;
      el.preload = 'metadata';
      el.src = info.src;
    } else {
      el = document.createElement('iframe');
      el.src = info.src;
      el.title = 'Video';
      el.allow = 'accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen';
      el.allowFullscreen = true;
      el.loading = 'lazy';
    }
    var ph = frame.querySelector('.video-placeholder');
    if (ph) ph.remove();
    frame.appendChild(el);
  });
})();


/* Contact form: static site, so the form opens the visitor's email app with the message ready.
   To receive messages without an email app, replace this with Formspree or Netlify Forms. */
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  var status = document.getElementById('contact-status');

  function t(key) {
    var lang = flotixResolveLang(document.documentElement.getAttribute('lang'));
    return flotixI18n[lang][key] || key;
  }
  function show(message, isError) {
    status.textContent = message;
    status.className = 'form-status ' + (isError ? 'is-error' : 'is-ok');
  }
  function selectedText(select) {
    return select.options[select.selectedIndex].text;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var f = form.elements;
    var name = f.name.value.trim();
    var email = f.email.value.trim();
    var phone = f.phone.value.trim();
    var message = f.message.value.trim();

    if (!name || !email || !f.role.value || !f.topic.value || !message || !f.consent.checked) {
      show(t('contact.errorRequired'), true);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      show(t('contact.errorEmail'), true);
      return;
    }

    var subject = 'Flotix: ' + selectedText(f.topic);
    var body = [
      t('contact.nameLabel') + ': ' + name,
      t('contact.emailFieldLabel') + ': ' + email,
      phone ? t('contact.phoneFieldLabel').replace(/\s*\(.*\)/, '') + ': ' + phone : '',
      t('contact.roleLabel') + ' ' + selectedText(f.role),
      '',
      message
    ].filter(function (line, i) { return line !== '' || i === 4; }).join('\n');

    window.location.href = 'mailto:' + form.getAttribute('data-to') +
      '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    show(t('contact.success'), false);
  });
});
