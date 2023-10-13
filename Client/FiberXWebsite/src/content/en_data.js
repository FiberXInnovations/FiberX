const content_data = {
    "NavBar" : {
        "logo" : { 
            "img" : "/src/assets/img/logo/logo_2.png",
            "text" : "FiberX Innovations"
        },
        "menu": [
            {"text": "Home", "link": "/", "name": "Home"},
            {"text": "About Us", "link": "/about", "name": "About"},
            {"text": "Services", "link": "/services", "name": "Services"},
            {"text": "Products", "link": "/products", "name": "Products"},
            {"text": "Contact Us", "link": "/contact_us", "name": "Contact"}
        ]
    },
    "FooterArea": {
        "add_to": ["social_menu"],
        "page_menu": [
            {"text": "About", "link": "/about", "name": "About"},
            {"text": "Services", "link": "/services", "name": "Services"},
            {"text": "Products", "link": "/products", "name": "Products"},
            {"text": "Contact", "link": "/contact_us", "name": "Contact"}
        ],
        "social_menu": [
            {
                "icon": "<svg class='md:w-5 md:h-5 w-2 h-2' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' /></svg>",
                "link": "mailto:fiberxinnovations@gmail.com",
                "text": "Email"
            },
            {
                "icon": "<svg class='md:w-5 md:h-5 w-2 h-2' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'><path fill-rule='evenodd' d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' clip-rule='evenodd' /></svg>",
                "link": "",
                "text": "Facebook"
            },
            {
                "icon": "<svg class='md:w-5 md:h-5 w-2 h-2' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'><path fill-rule='evenodd' d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z' clip-rule='evenodd' /></svg>",
                "link": "",
                "text": "instagram"
            },
            {
                "icon": "<svg class='md:w-5 md:h-5 w-2 h-2' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'><path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' /></svg>",
                "link": "",
                "text": "Twitter"
            },
            {
                "icon": " <svg class='bi bi-telegram md:w-5 md:h-5 w-2 h-2' xmlns='http://www.w3.org/2000/svg' fill='currentColor'  viewBox='0 0 16 16'> <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z'/> </svg>",
                "link": "",
                "text": "Telegram",
            },
            {
                "icon": "<svg class='md:w-5 md:h-5 w-2 h-2' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z' /></svg>",
                "link": "tel:+2348091414443",
                "text": "Phone",
            }
        ]
    },
    "Scroller": {
        "scroll_down": {
            "icon": "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-full h-full'><path stroke-linecap='round' stroke-linejoin='round' d='M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z' /></svg>",
            "text": "Scroll Down"
        },
        "scroll_up": {
            "icon": "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-full h-full'><path stroke-linecap='round' stroke-linejoin='round' d='M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z' /></svg>",
            "text": "Scroll Down"
        }
    },
    "HomeWelcome": {
        "welcome_title_text": "Innovate, Integrate, Inspire.",
        "welcome_sub_text": "Welcome to Fiber x, Bringing you a world where technology empowers  organiztions and individuals to reach new heights of productivity  & success.",
        "img": "/src/assets/img/bg/welcome_character.svg",
        "btn_text": "Get To Know Us."
    },
    "AboutWelcome": {
        "title_text": "About FiberX Innovations",
        "sub_text": "FiberX Innovations is a dynamic IT enterprise at the forefront of technological advancement. We are committed to driving innovation and excellence in the creation, design, and manufacturing of IT solutions. With a relentless focus on quality and customer satisfaction, we are poised to make a profound impact in the industry.",
        "img": "/src/assets/img/bg/welcome_character.svg"
    },
    "ServicesWelcome": {
        "title_text": "FiberX Innovations Services",
        "sub_text": "At FiberX Innovations, we extend a warm welcome to you, our valued guest, as you embark on a journey into the world of innovation and technology.",
        "img": "/src/assets/img/bg/welcome_character.svg"
    },
    "ProductWelcome": {
        "title_text": "Our Products Portfolio!",
        "sub_text": "Discover a world of possibilities at FiberX Innovations. Our product offerings are designed to elevate your digital experience and empower you with cutting-edge solutions. Whether you're seeking innovative software products, high-quality hardware solutions, or a range of professional services, you've come to the right place.",
        "img": "/src/assets/img/bg/welcome_character.svg"
    },
    "ContactUsWelcome": {
        "title_text": "Get in Touch",
        "sub_text": "Caring for our clients is at the heart of what we do. Feel free to reach out with your inquiries, suggestions, or feedback, and we'll respond promptly. Let's start a conversation, and together, we'll navigate the digital realm.",
        "img": "/src/assets/img/bg/welcome_character.svg"
    },
    "Description_1": {
        "descriptions": [
            {
                "graphics_order": 1,
                "desc_order": 2,
                "img": "/src/assets/img/bg/description_2_1.svg",
                "img_text": "About FiberX Innovations image",
                "title_text": "About FiberX Innovations",
                "btn_text": "Learn More...",
                "sub_text": "FiberX Innovations is a dynamic IT enterprise at the forefront of technological advancement. We are committed to driving innovation and excellence in the creation, design, and manufacturing of IT solutions. With a relentless focus on quality and customer satisfaction, we are poised to make a profound impact in the industry. \n Our vision is inspired by Proverbs 29:18: 'Where there is no vision, the people perish.' At FiberX Innovations, we envision a world where technology empowers individuals and organizations to reach new heights of productivity and success. Our mission, grounded in Matthew 5:16, is to let our technological light shine before others, delivering transformative solutions that illuminate the path to progress.",
            },
            
        ]
    },
    "Description_2": {
        "descriptions": [
            {
                "graphics_order": 1,
                "desc_order": 2,
                "img": "/src/assets/img/bg/description_2_1.svg",
                "img_text": "who we are image",
                "title_text": "Who we Are",
                "sub_text": "At FiberX Innovations, we are a dynamic IT company fueled by a passion for innovation and a commitment to excellence. Founded in 2022, we've grown from a small, dedicated team to a tech powerhouse with a diverse range of software products and hardware solutions. Our core values of innovation, quality, customer-centricity, and ethical integrity drive everything we do. We believe in the transformative power of technology and strive to empower businesses, individuals, and communities to thrive in the digital age. Join us on this exciting journey as we continue to push the boundaries of what's possible in the world of IT.",
            },
            {
                "graphics_order": 2,
                "desc_order": 1,
                "img": "/src/assets/img/bg/description_2_1.svg",
                "img_text": "What we Do image",
                "title_text": "What we Do",
                "sub_text": "At FiberX Innovations, we are your trusted partner in the world of technology. We specialize in providing innovative software products, cutting-edge hardware solutions, and a range of professional services tailored to your unique needs. Our mission is to empower businesses and individuals through digital transformation, offering not only exceptional products but also expert consultation, training, and ongoing support. Discover how FiberX Innovations can elevate your digital journey and unlock new possibilities in the world of technology.",
            },
            {
                "graphics_order": 1,
                "desc_order": 2,
                "img": "/src/assets/img/bg/description_2_1.svg",
                "img_text": "Our Mission image",
                "title_text": "Our Mission",
                "sub_text": "Our mission is clear—to empower, to innovate, and to transform. We are driven by the belief that technology should be an enabler, making your life easier, your business more efficient, and your dreams more achievable.",
            },
            {
                "graphics_order": 2,
                "desc_order": 1,
                "img": "/src/assets/img/bg/description_2_1.svg",
                "img_text": "What We Offer image",
                "title_text": "What We Offer",
                "sub_text": "Explore our diverse array of services, from groundbreaking software products and cutting-edge hardware solutions to consultation, training, and exceptional customer support. Our offerings are designed to elevate your digital experience and help you succeed in today's fast-paced, tech-driven world.",
            },
            
        ]
    },
    "CoreValues": {
       "title_text": "Our Guiding Principles",
       "sub_text": "Discover the Core Values that Drive Us. At FiberX Innovations, we are deeply committed to a set of guiding principles that shape our every decision and action. These values are the cornerstone of our identity, defining who we are and how we serve our clients and community.",
       "core_values": [
            {
                "img": "/src/assets/img/core_values/innovation_1.svg",
                "title_text": "Innovation",
                "sub_text": "We strive to lead through innovation, driven by Philippians 4:13: 'I can doall things through Christ who strengthens me.' Our objective is to create technology that empowers and uplifts.",
            },
            {
                "img": "/src/assets/img/core_values/customer_1.svg",
                "title_text": "Customer-Centricity",
                "sub_text": "Rooted in Luke 6:31 ('Do to others as you would have them do to you'), we prioritize customer satisfaction, aiming to exceed expectations in every interaction.",
            },
            {
                "img": "/src/assets/img/core_values/quality_excellence_1.svg",
                "title_text": "Quality Excellence",
                "sub_text": "Guided by Colossians 3:23 ('Whatever you do, work at it with all your heart'), we commit to delivering products and services of the highest quality, exceeding industry standards.",
            },
            {
                "img": "/src/assets/img/core_values/integrity_1.svg",
                "title_text": "Ethical Integrity",
                "sub_text": "We adhere to the principles of honesty and integrity outlined in Proverbs 11:3, ensuring our business practices reflect godly values, building trust with all stakeholders.",
            }
       ]
    },
    "Team": {
        "title_text": "Our Dedicated Team",
        "sub_text": "Meet the Faces Behind FiberX Innovations. Our diverse and passionate team is the driving force behind our commitment to innovation and excellence. Get to know the individuals who bring our vision to life and make it their mission to serve you.",
        "team_mates": [
             {
                 "img": "/src/assets/img/core_values/innovation_1.svg",
                 "name_text": "David Matt-Ojo",
                 "role_text": "Senior Engineer & Founder"
             },
             {
                 "img": "/src/assets/img/core_values/customer_1.svg",
                 "name_text": "Team 1",
                 "role_text": "Team 1"
             },
             {
                 "img": "/src/assets/img/core_values/quality_excellence_1.svg",
                 "name_text": "Team 1",
                 "role_text": "Team 1"
             },
             {
                 "img": "/src/assets/img/core_values/integrity_1.svg",
                 "name_text": "Team 1",
                 "role_text": "Team 1"
             },
             {
                "img": "/src/assets/img/core_values/innovation_1.svg",
                "name_text": "Team 1",
                "role_text": "Team 1"
            },
            {
                "img": "/src/assets/img/core_values/customer_1.svg",
                "name_text": "Team 1",
                "role_text": "Team 1"
            },
            {
                "img": "/src/assets/img/core_values/quality_excellence_1.svg",
                "name_text": "Team 1",
                "role_text": "Team 1"
            },
            {
                "img": "/src/assets/img/core_values/integrity_1.svg",
                "name_text": "Team 1",
                "role_text": "Team 1"
            }

        ]
    },
    "CoreValues": {
        "title_text": "Our Guiding Principles",
        "sub_text": "Discover the Core Values that Drive Us. At FiberX Innovations, we are deeply committed to a set of guiding principles that shape our every decision and action. These values are the cornerstone of our identity, defining who we are and how we serve our clients and community.",
        "core_values": [
             {
                 "img": "/src/assets/img/core_values/innovation_1.svg",
                 "title_text": "Innovation",
                 "sub_text": "We strive to lead through innovation, driven by Philippians 4:13: 'I can doall things through Christ who strengthens me.' Our objective is to create technology that empowers and uplifts.",
             },
             {
                 "img": "/src/assets/img/core_values/customer_1.svg",
                 "title_text": "Customer-Centricity",
                 "sub_text": "Rooted in Luke 6:31 ('Do to others as you would have them do to you'), we prioritize customer satisfaction, aiming to exceed expectations in every interaction.",
             },
             {
                 "img": "/src/assets/img/core_values/quality_excellence_1.svg",
                 "title_text": "Quality Excellence",
                 "sub_text": "Guided by Colossians 3:23 ('Whatever you do, work at it with all your heart'), we commit to delivering products and services of the highest quality, exceeding industry standards.",
             },
             {
                 "img": "/src/assets/img/core_values/integrity_1.svg",
                 "title_text": "Ethical Integrity",
                 "sub_text": "We adhere to the principles of honesty and integrity outlined in Proverbs 11:3, ensuring our business practices reflect godly values, building trust with all stakeholders.",
             }
        ]
    },
    "Slogan": {
        "title_text": "Where Technology meets Transformation.",
        "img" : "/src/assets/img/logo/logo_2.png",
     },
    "ServicesList": {
        "title_text": "Our Services",
        "sub_text": "FiberX Innovations offers a wide range of services, such as:",
        "img": "/src/assets/img/bg/services_1.svg",
        "services_list" : [
            {"text": "Consultation and Training Services", "link": "/services#form"},
            {"text": "Custom Software Development", "link": "/services#form"},
            {"text": "Technical Support and Maintenance", "link": "/services#form"},
            {"text": "Digital Transformation Consultancy", "link": "/services#form"},
            {"text": "Hardware Supply and Procurement", "link": "/services#form"},
            {"text": "Quality Control & Testing", "link": "/services#form"},
        ]
    },
    "ServicesForm": {
        "title_text": "Service Inquiry Form",
        "sub_text": "Have questions about our services or need more information? Fill out the form below, and our team will be happy to assist you. Your journey with FiberX Innovations starts here.",
        "img": "/src/assets/img/bg/contact_us_form_1.svg",
        
    },
    "ExploreProducts": {
        "title_text": "Explore Our Products",
        "sub_text": "The future of technology is not distant; it's at your fingertips. Dive into our product offerings and discover how FiberX Innovations can transform your digital world, opening doors to opportunities you've only dreamed of.",
        "img": "/src/assets/img/bg/semi_colon_1.svg",
        "img_gif": "/src/assets/img/bg/explore_products_1.gif"
    },
    "ProductList": {
        "product_list": [
            {
                "graphics_order": 1,
                "desc_order": 2,
                "img": "/src/assets/img/products/project_fiyalo_1.svg",
                "img_text": "Fiyalo - Empowering E-commerce & Events",
                "title_text": "Fiyalo - Empowering E-commerce & Events",
                "sub_text": "Fiyalo, our flagship software product, is a versatile eCommerce and event management application designed to cater to three distinct user groups (Users, Creators, Designers). Fiyalo embraces emerging financial trends, allowing transactions in cryptocurrencies. It prioritizes the principle of customer centricity.",
                "link": "https://fiyalo.com",
            },
            {
                "graphics_order": 2,
                "desc_order": 1,
                "img": "/src/assets/img/products/project_fora_script_1.svg",
                "img_text": "Fora Script - Enlightening Church Presentations",
                "title_text": "Fora Script - Enlightening Church Presentations",
                "sub_text": "Fora Script, our second software solution offering, is a video presentation software meticulouslycrafted for churches. It facilitates the display of scriptures, songs, hymns, titles, captions, and preaching points, ushering in a new era of immersive worship experiences .",
            },
            {
                "graphics_order": 1,
                "desc_order": 2,
                "img": "/src/assets/img/products/project_fund_flow_1.svg",
                "img_text": "Fund Flow - Nurturing Financial Growth",
                "title_text": "Fund Flow - Nurturing Financial Growth",
                "sub_text": "Fund Flow is an investment application designed to empower users to invest money & achieve profitable outcomes. It reflects our commitment to stewardship and financial wisdom (Proverbs 13:11).",
            },
            
        ]
    },
    "ContactUsInfo": {
        "title_text": "Connect with Us",
        "sub_text": "Here's how to get in touch with FiberX Innovations. Whether you prefer to drop us a message, give us a call, or visit our office, we're always here to assist you. Feel free to reach out and let's start a conversation.",
        "img": "/src/assets/img/bg/semi_colon_1.svg",
        "infos": [
            {
                "icon": "<svg class='w-full h-full' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z' /><path stroke-linecap='round' stroke-linejoin='round' d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z' /></svg>",
                "title_text": "Address",
                "link": "",
                "sub_text": "Plot 904 sector F FHA Lugbe."
            },
            {
                "icon": "<svg class='w-full h-full' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3' /></svg>",
                "title_text": "Phone",
                "link": "tel:+234 809 141 4443.",
                "sub_text": "+234 809 141 4443."
            },
            {
                "icon": "<svg class='w-full h-full' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' /></svg>",
                "title_text": "Email",
                "link": "mailto:fiberxinnovations@gmail.com",
                "sub_text": "fiberxinnovations@gmail.com"
            }
        ]
    },
    "ContactUsForm": {
        "title_text": "Talk to Us",
        "sub_text": "",
        "img": "/src/assets/img/bg/contact_us_form_1.svg",
    }
    
}

export { content_data }