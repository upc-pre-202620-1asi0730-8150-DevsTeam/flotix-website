
const FLOTIX_DEFAULT_LANG = 'en';
const FLOTIX_SUPPORTED_LANGS = ['en', 'es'];

const FLOTIX_I18N = {
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
        'team.title': 'Meet the team',
        'team.tabs.info': 'Info',
        'team.tabs.bio': 'Bio',
        'team.member1.role': 'Software Engineering',
        'team.member1.bio': 'Curious and always learning, Gonzalo brings that same drive for discovery to how Flotix tracks and improves a fleet.',
        'team.member2.role': 'Software Engineering',
        'team.member2.bio': 'Responsible and self-taught, Mauricio keeps Flotix moving forward with the same discipline he brings to staying active.',
        'team.member3.role': 'Software Engineering',
        'team.member3.bio': 'An enthusiastic programmer who enjoys learning new technologies, Joaquin contributes ideas, technical direction and organization to Flotix.',
        'team.member4.role': 'Software Engineering',
        'team.member4.bio': 'Practical and curious, Gustavo turns what he learns into solutions that make Flotix genuinely useful for fleet owners.',
        'footer.blurb': 'Fleet management with real time IoT and GPS monitoring for owners, drivers and mechanic workshops.',
        'footer.navTitle': 'Platform',
        'footer.companyTitle': 'Company',
        'footer.terms': 'Terms and conditions',
        'footer.rights': 'All rights reserved.',
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
        'team.title': 'Conoce al equipo',
        'team.tabs.info': 'Info',
        'team.tabs.bio': 'Bio',
        'team.member1.role': 'Ingeniería de Software',
        'team.member1.bio': 'Curioso y siempre aprendiendo, Gonzalo aplica esa misma pasión por descubrir a cómo Flotix rastrea y mejora una flota.',
        'team.member2.role': 'Ingeniería de Software',
        'team.member2.bio': 'Responsable y autodidacta, Mauricio mantiene a Flotix avanzando con la misma disciplina con la que se mantiene activo.',
        'team.member3.role': 'Ingeniería de Software',
        'team.member3.bio': 'Programador entusiasta al que le gusta aprender nuevas tecnologías, Joaquin aporta ideas, dirección técnica y organización a Flotix.',
        'team.member4.role': 'Ingeniería de Software',
        'team.member4.bio': 'Práctico y curioso, Gustavo convierte lo que aprende en soluciones que hacen de Flotix algo realmente útil para los dueños de flota.',
        'footer.blurb': 'Gestión de flotas con monitoreo IoT y GPS en tiempo real para dueños, conductores y talleres mecánicos.',
        'footer.navTitle': 'Plataforma',
        'footer.companyTitle': 'Empresa',
        'footer.terms': 'Términos y condiciones',
        'footer.rights': 'Todos los derechos reservados.',
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
    },
};

function flotixResolveLang(requested) {
    return FLOTIX_SUPPORTED_LANGS.includes(requested) ? requested : FLOTIX_DEFAULT_LANG;
}

function flotixGetInitialLang() {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('lang');
    if (fromUrl) return flotixResolveLang(fromUrl);
    let stored = null;
    try { stored = window.localStorage.getItem('flotix-lang'); } catch (err) { /* no storage */ }
    if (stored) return flotixResolveLang(stored);
    return FLOTIX_DEFAULT_LANG;
}

function flotixApplyLang(lang) {
    const resolved = flotixResolveLang(lang);
    const dict = FLOTIX_I18N[resolved];

    document.documentElement.setAttribute('lang', resolved);

    document.querySelectorAll('[data-i18n]').forEach((node) => {
        const key = node.getAttribute('data-i18n');
        if (dict[key] !== undefined) node.textContent = dict[key];
    });

    document.querySelectorAll('.lang-toggle button').forEach((button) => {
        button.setAttribute('aria-pressed', String(button.getAttribute('data-lang') === resolved));
    });

    try { window.localStorage.setItem('flotix-lang', resolved); } catch (err) { /* storage unavailable */ }
}

document.addEventListener('DOMContentLoaded', () => {
    flotixApplyLang(flotixGetInitialLang());

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
});
